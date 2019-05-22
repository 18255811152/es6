//第一种写法
export var firstName = 'jack';
export var lastName = 'jacky'
export var year = '1992';

//第二种写法
var firstName = 'jack'
var lastName='jacky'
var year='1991'
export{firstName,lastName,year};

//输入函数
export function show(x=1,y=2){
    return x*y;
}

// 使用as关键字重命名
function show1(){}
function show2(){}
export{
    show1 as showName,
    show2 as showLastName,
}

//不能直接导出数值，
export var age =18;

var age = 18;
export{age}

var age = 18
export{
    age as lastAge
}

//function class 使用
 function show3(){}
 export{show3}
 