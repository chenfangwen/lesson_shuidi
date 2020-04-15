var Student = /** @class */ (function () {
    function Student(n, lastName) {
        this.lastName = lastName;
        this.firstName = n;
    }
    return Student;
}());
function greeter(person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}
var user = new Student("chen", 'fangwen');
document.body.innerHTML = greeter(user);
