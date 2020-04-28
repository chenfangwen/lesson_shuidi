function isAnimal (target){
    // console.log(target)
    target.isAnimal = function () {
        console.log('is animal')
    }
}
function watchFunc (target, name, descriptor) {
    // console.log(descriptor)
    let orginWork = descriptor.value
    descriptor.value = function() {
        console.log("监听到方法执行")
        orginWork()
    }
}

@isAnimal
class Man {
    static isMan() {
        console.log('yes')
    }
    @watchFunc
    say() {
        console.log('i say')
    }
    @watchFunc
    work() {
        console.log('i am working')
    }
}

let boy = new Man()

boy.say()
Man.isMan()
Man.isAnimal()
boy.work()