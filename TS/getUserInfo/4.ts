
// 函数类型 说明了参数 返回类型
type IuserInfoFunc = (u: Iuser) => string

interface Iuser {
    name:string;
    age:number
}

const getUserInfo5:IuserInfoFunc = (user) => {
    return `name: ${user.name}, age:${user.age}`
}
console.log(getUserInfo5({name:'陈方闻',age:21}))