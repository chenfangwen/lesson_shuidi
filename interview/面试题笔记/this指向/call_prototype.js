
function Parent(name,money){
    this.name = name;
    this.money = money;
    this.info = function(){
        console.log("姓名："+this.name+"钱："+this.money);
    }
}

function Children(name,money){
    Parent.call(this,name,money); //简单继承
    /*this.info = function(){
        console.log("姓名："+this.name);
    }*/i
}

var per = new Parent("parent",10000); 
var chi = new Children("child",20000);
per.info(); //姓名：parent钱：10000
chi.info(); //姓名：child钱：20000