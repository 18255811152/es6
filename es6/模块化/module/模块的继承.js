//模块之间也可以继承。

export *from 'circle'
export var e = 2.6413218653;
export default function(x){
    return Math.exp(x);
}

export { area as circleArea } from 'circle';
