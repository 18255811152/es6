//模块的整体加载 § ⇧
//其他模块加载该模块时，import命令可以为该匿名函数指定任意名字。
export default function(){
    console.log('foo');
}

//export default命令用在非匿名函数前，也是可以的。
export default function show(){
    console.log('foo');
}


//本质上，export default就是输出一个叫做default的变量或方法，然后系统允许你为它取任意名字。所以，下面的写法是有效的。
function add(x,y){
    return x*y;
}
export {add as default};
//等同于
import {default as foo} from 'module';
import { EPERM } from 'constants';

//正是因为export default命令其实只是输出一个叫做default的变量，所以它后面不能跟变量声明语句。
// 正确演示
export var a = 1;
// or
var a = 1;
export default a;

//错误
// export default var a = 1;


//可以讲值赋值给default
// 正确写法 
export default 12;
//错误写法
export 12;




// export default 输出类

// export 与 import 的复合写法

 export default class{};
 //导入
 import Myclass from 'Myclass';
 let o =   new Myclass;


 




