function outer() { var inner = function () { var obj = {}; obj.getVal = () => { console.log("*******"); console.log(this); console.log("*******"); }; return obj; }; return inner; }
outer().bind(outer)().getVal(); //输出如下*******ƒ outer(){    var inner = function(){        var obj = {};        obj.getVal=()=>{            console.log("*******");            console.log(this);            console.log("*******");        }  …*******

