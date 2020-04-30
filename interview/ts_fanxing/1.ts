// interface Array<T> {
//   pop(): T | undefined
//   some(callbackfn: (value: T, index: number, arr: T[]) => boolean): boolean
// }
// // 1
// let arr: number[] = [1, 2, 3, 4];
// // 2：泛型
// let arr1: Array<string> = ['4', '5', '6'];
// let a = arr1.pop();
// let b = arr.pop();
// let flag = arr.some((num, i, arr) => num > 2);
// 每一项
// class Stack {
//   constructor() {
//   }
//   push() {}
//   pop() {
//   }
// }

// 类型的抽象
function foo(arg: number): number {
    return arg;
  }
  function foo1(arg: string): string {
    return arg;
  }
  function foo2(arg: boolean): boolean {
    return arg;
  }
  foo(1)
  foo1('1')
  foo2(true)
  // 输入类 输出类型 不一致
  // number ： string
  // function foo3(arg: any): any {
  //   return arg;
  // }
  
  // 不一致的地方：类型
  // 公共地方： 功能
  // 使用函数的时候，可以传入一个类型，多定义了参数，这个参数是个类型 T U K
  // 
  function myfoo<T>(arg: T): T {
    return arg;
  }
  myfoo<number>(123);
  myfoo<string>('123');
  
  // 靠js数组实现
  // js数组：指定数组类型
  // number 写死？？ string ？？
  // T 用户 
  class Stack<T> {
    eles: T[]
    constructor() {
      this.eles = []
    }
    push(arg: T) {
      this.eles.push(arg);
    }
    pop(): T | undefined {
      return this.eles.pop();
    }
  }
  interface Person<T> {
    name: string,
    age: number,
    say: T         // string   number  boolean
  }
  let st = new Stack<string>();
  st.push('3');
  let st1 = new Stack<Person<number>>();
  st1.push({ name: 'n', age: 89, say: 78 });