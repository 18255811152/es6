// 类的由来
function point(x, y) {
    this.x = x;
    this.y = y;
}

point.prototype.toString = function () {
    return '(' + this.x + ', ' + this.y + ')';
};

var p = new point(x, y);

//改成构造函数

class point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }


    toString() {
        return '(' + this.x + ', ' + this.y + ')';
    }
}



class point {
    constructor() {

    }

    showtime() {

    }

    showDataTime() {

    }
}
point.prototype = {
    constructor() { },
    showtime() { },
    showDataTime() { }
}


//在类的实例上面调用方法，其实就是调用原型上的方法。
class B {

}
let b = new B();
b.constructor

console.error(b.constructor === B.constructor);

//Object.assign    一次性添加几个方法
class Assign {
    constructor() {

    }
}
Object.assign(Assign.prototype, {
    toString() { },
    toValue() { }
})

point.prototype.constructor === point //true

class point{
    constructor(x,y){
        this.x=x;
        this.y=y;
    }

    toString(){
        return '('+this.x+','+this.y+')';
    }
}

var point =new point(45,85);
point.toString;

// get set方法
class Myclass{
    constructor(){

    }
    get prop(){
        return 'getting'
    }
    set prop(value){
        console.error(value);
    }
}
let inst = new Myclass();
inst.prop = '1234';//set
let getValue=inst.prop;//get
console.error(getValue);

//属性表达式
//Square类的方法名getArea，是从表达式得到的
 let methodName = 'getArea';
 class methodName{
     constructor(length){
        //
     }

     [methodName](){

     }
 }

 //class 表达式
 //与函数一样，类也可以使用表达式的形式定义。
 //但是Me只在 Class 的内部可用，指代当前类
const Myclass = class Me{
    getClassName(){
        return Me.name;
    }
}
//如果类的内部没用到的话，可以省略Me，也就是可以写成下面的形式。
class Myclass=class{};
//采用 Class 表达式，可以写出立即执行的 Class
let person = new class{
    constructor(name){
        this.name=name;
    }
    seyName(){
        console.error(this.name);
    }
}('章三');
person.seyName();
console.error(person.seyName);// 章三

//












