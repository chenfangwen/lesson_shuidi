// interface Array<T> {
//   pop(): T | undefined
//   some((value:T,index:number,arr:Array<T>):boolean):boolean
// }

// let arr: Array<number> = [1,2,4,4]


function foo<T>(arg:T): T{
    return arg
  }
  
  foo<string>('sdfasd')
  foo<number>(123412)
  
  
  class Stack<T> {
    ele: T[]
    constructor(){
      this.ele = []
    }
    push(arg: T){
      this.ele.push(arg)
    }
    pop(): T | undefined {
      return this.ele.pop()
    }
  }
  
  interface Person<T> {
    name: string,
    age: number,
    say:T
  }
  
  let st = new Stack<string>()
  st.push('3')
  
  let st1 = new Stack<Person<number>>()
  st1.push({
    name:'adsf',
    age:12,
    say:23
  })
  