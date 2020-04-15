const getUserInfo4 = function (user: User): string {
    // fgsdhjcm
    return `name:${user.name},age:${user.age}`
}
// fasdfasdfasf
//asdfasdfasdfsadf

interface User {
    name:string;
    age:string;
}

console.log(getUserInfo4({name:'陈方闻',age:"21"}))