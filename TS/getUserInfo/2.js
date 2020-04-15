var getUserInfo = function (user) {
    return "name:" + user.name + ",age:" + user.age;
};
console.log(getUserInfo({ name: 'chenfangwen', age: "21" }));
