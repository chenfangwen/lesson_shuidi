global.name = '全局';
Object.prototype.myCall = function(context, ...arg) {
    const newContext = context || global;
    newContext.fn = this;
    newContext.fn(...arg);
    delete newContext.fn;
}

Object.prototype.myApply= function (context, arg1) {
    context.fn = this;
    context.fn(...arg1);
    delete context.fn;
}

Object.prototype.myBind = function (context, ...arg1) {
    context.fn = this;
    const result = function (...arg2) {
        context.fn(...arg1, ...arg2);
    }
    return result;
}




function voice(content1, content2) {
    console.log('这是' + this.name + '的声音:' + content1);
    console.log('这是' + this.name + '的声音:' + content2);
}

const cfw = {name: '陈方闻'};

voice.myCall(null, '哈哈哈哈哈', 'hhhhhh');
voice.myApply(cfw, ['哈哈哈哈哈1', 'hhhhhh1']);

const newVoice = voice.myBind(cfw, ['哈哈哈哈哈2']);
newVoice(['hhhhhh2']);