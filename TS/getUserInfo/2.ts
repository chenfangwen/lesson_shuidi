const getUserInfo3 = function (user: {name:string,age:string}) {
    return `name:${user.name},age:${user.age}`
}



console.log(getUserInfo3({name:'陈方闻',age:"21"}))