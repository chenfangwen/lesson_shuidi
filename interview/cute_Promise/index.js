function MyPromise(executor) {
    this.status = 'pending';
    this.result = '';
    this.error = '';
    this.onResolvedQueue = [];
    this.onRejectedQueue = [];

    var self = this;
    function resolve(res) {
        if (self.status !== 'pending') return;
        self.result = res;
        self.status = 'fufilled';
        self.onResolvedQueue.forEach(onResolved => {
            onResolved(self.result);
        });
    }

    function reject(err) {
        if (self.status !== 'pending') return;
        self.error = err;
        self.status = 'rejected';
        self.onRejectedQueue(onRejected => {
            onRejected(self.error);
        });
    }

    executor(resolve, reject);
}


function resolutionProcedure(promise2, x, resolve, reject) {
    // 这里 hasCalled 这个标识，是为了确保 resolve、reject 不要被重复执行
    let hasCalled;
    if (x === promise2) {
        // 决议程序规范：如果 resolve 结果和 promise2相同则reject，这是为了避免死循环
        return reject(new TypeError('为避免死循环，此处抛错'));
    } else if (x !== null && (typeof x === 'object' || typeof x === 'function')) {
        // 决议程序规范：如果x是一个对象或者函数，则需要额外处理下
        try {
            // 首先是看它有没有 then 方法（是不是 thenable 对象）
            let then = x.then;
            // 如果是 thenable 对象，则将promise的then方法指向x.then。
            if (typeof then === 'function') {
                // 如果 then 是是一个函数，那么用x为this来调用它，第一个参数为 resolvePromise，第二个参数为rejectPromise
                then.call(x, y => {
                    // 如果已经被 resolve/reject 过了，那么直接 return
                    if (hasCalled) return;
                    hasCalled = true;
                    // 进入决议程序（递归调用自身）
                    resolutionProcedure(promise2, y, resolve, reject);
                }, err => {
                    // 这里 hascalled 用法和上面意思一样
                    if (hasCalled) return;
                    hasCalled = true;
                    reject(err);
                });
            } else {
                // 如果then不是function，用x为参数执行promise
                resolve(x);
            }
        } catch (e) {
            if (hasCalled) return;
            hasCalled = true;
            reject(e);
        }
    } else {
        // 如果x不是一个object或者function，用x为参数执行promise
        resolve(x);
    }
}


MyPromise.prototype.then = function (onResolved, onRejected) {

    // 注意，onResolved 和 onRejected必须是函数；如果不是，我们此处用一个透传来兜底
    if (typeof onResolved !== 'function') {
        onResolved = function (x) { return x };
    }
    if (typeof onRejected !== 'function') {
        onRejected = function (e) { throw e };
    }

    // 依然是保存 this
    var self = this;
    // 这个变量用来存返回值 x
    let x

    // resolve态的处理函数
    function resolveByStatus(resolve, reject) {
        // 包装成异步任务，确保决议程序在 then 后执行
        setTimeout(function () {
            try {
                // 返回值赋值给 x
                x = onResolved(self.result);
                // 进入决议程序
                resolutionProcedure(promise2, x, resolve, reject);
            } catch (e) {
                // 如果onResolved或者onRejected抛出异常error，则promise2必须被rejected，用error做reason
                reject(e);
            }
        });
    }
    // reject态的处理函数
    function rejectByStatus(resolve, reject) {
        // 包装成异步任务，确保决议程序在 then 后执行
        setTimeout(function () {
            try {
                // 返回值赋值给 x
                x = onRejected(self.error);
                // 进入决议程序
                resolutionProcedure(promise2, x, resolve, reject);
            } catch (e) {
                reject(e);
            }
        });
    }
    // 注意，这里我们不能再简单粗暴 return this 了，需要 return 一个符合规范的 Promise 对象
    var promise2 = new MyPromise(function (resolve, reject) {
        // 判断状态，分配对应的处理函数
        if (self.status === 'fufilled') {
            // resolve 处理函数
            resolveByStatus(resolve, reject);
        } else if (self.status === 'rejected') {
            // reject 处理函数
            rejectByStatus(resolve, reject);
        } else if (self.status === 'pending') {
            // 若是 pending ，则将任务推入对应队列
            self.onResolvedQueue.push(function () {
                resolveByStatus(resolve, reject);
            });
            self.onRejectedQueue.push(function () {
                rejectByStatus(resolve, reject);
            });
        }
    });

    // 把包装好的 promise2 return 掉
    return promise2;
};

let p = new MyPromise((resolve, reject) => {
    setTimeout(() => {
        resolve(1);
    }, 1000);
});

p.then(res => {
    console.log(res);
    // return Promise.resolve(2);
}, err => {
    console.log(err);
}).then(res => {
    console.log(res)
});