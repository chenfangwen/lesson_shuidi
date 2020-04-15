class Student {
    firstName: string;
    constructor(n: string,public lastName) {
        this.firstName = n 
    }
}

interface Person {
    firstName: string;
    lastName: string
}

function greeter(person : Person) {
    return "Hello, " + person.firstName + " " + person.lastName
}

let user = new Student("chen",'fangwen');

document.body.innerHTML = greeter(user);