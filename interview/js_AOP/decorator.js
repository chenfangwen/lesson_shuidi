function isAnimal (target){
    // console.log(target)
    target.isAnimal = function () {
        console.log('is animal')
    }
}
function watchWork (target, name, descriptor) {
    console.log(descriptor)
    let orginWork = descriptor.value
    descriptor.value = function() {
        console.log("监听work")
        orginWork()
    }
}

@isAnimal
class Man {
    static isMan() {
        console.log('yes')
    }
    say() {
        console.log('i say')
    }
    @watchWork
    work() {
        console.log('i am working')
    }
}

let boy = new Man()

boy.say()
Man.isMan()
Man.isAnimal()
boy.work()