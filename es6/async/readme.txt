三种移步的比较
promise
generator
async

async特点

async function fn(){//表示异步
    let  f1= await XXX  表示结果需要等待
}

1.await 只能放到async函数中
2 相比generator予以更强
3 await后面可以是promise对象 也可以是数组 数字  什么玩意的
4 返回的是一个promise对象
5 只要await语句后面promise状态变成reject 那么整个async函数就会中断执行
如何解决 5
使用
try{

}catch(){

}

任何有awiat的地方都要 try{}catch(e){}


可以使用框架  kor2

