
function supFather(name) {
    this.name = name;
    this.colors = ['red', 'blue']   
}

function sub(name, age) {
    supFather.call(this,name,age)
}

function inher(son, sup) {
    //原型继承
    son.prototype = Object.create(sup.prototype);
    son.prototype.constructor = son;
}
inher(sub, supFather)