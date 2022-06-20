interface Eg1 {
    name?: string;
    readonly age: number;
}
interface Eg2 {
    wife: string;
}

// T1的类型实则是name | age
type T1 = Eg2 & Eg1;

let a : T1;
a = {
    name: '234',
    age: 22,
    wife: '23'
};

type A = Eg2 extends Eg1 ? 1 : 2;

type UnionToIntersection = A;

enum Enum {
    A,
    B,
    C = "C",
    D = "D",
    E = 1,
    F,
}
let tes = Enum;
console.log(tes)