var makeSound = function(animal){
    //传统分支
    // if(animal instanceof Duck){
    //     console.log('ggg');
    // }
    // else if(animal instanceof Chicken){
    //     console.log('jjj');
    // }
    //多态  面向对象的优化
    animal.say();
}
var Duck = function(){}
Duck.prototype.say = function(){
    console.log('ggg')
}
var Chicken = function(){}
Chicken.prototype.say = function(){
    console.log('jjj')
}
makeSound(new Chicken());