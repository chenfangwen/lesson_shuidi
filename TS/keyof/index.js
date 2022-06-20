var a;
a = {
    name: '234',
    age: 22,
    wife: '23'
};
var Enum;
(function (Enum) {
    Enum[Enum["A"] = 0] = "A";
    Enum[Enum["B"] = 1] = "B";
    Enum["C"] = "C";
    Enum["D"] = "D";
    Enum[Enum["E"] = 1] = "E";
    Enum[Enum["F"] = 2] = "F";
})(Enum || (Enum = {}));
var tes = Enum;
console.log(tes);
