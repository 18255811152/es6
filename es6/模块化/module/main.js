//improt 命令
import {firstName,lastName,year} from './profile'
//输出的重新取一个名字

import {lastName as surename} from './profile'

//一个一个加载
import {area,cricunference} from './circle'
//一次性加载   模块的整体加载 § ⇧
import * as circle from '/circle'


function setUserName(element){
    element.textContent = firstName+'  ' +lastName;
}

//不允许在加载模块里面直接改写接口
// 例如
// improt {a} from ./xxx.js
// a ={};
//  可以改写a的属性
// a.foo ='hello'

console.error(area(3));
console.error(cricunference(10));

console.error(circle.area(123));
console.error(circle.cricunference(122));

// 模块的继承
import * as math from 'circleplus';
import exp from 'circleplus';
console.log(exp(math.e));

