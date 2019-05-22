// 字符串模版

//字符串拼接
{
    let name ='章三'
    let age = '18'
    let aa = 'aa'
    console.log(`aaaa${name} xxxx ${age} xxx${aa}`);
}

//indexof  返回的是索引的位置
{
    let str = 'aa bbbbb cccc'
    console.log(str.indexOf('bbb'));
}

//includes 要找的东西  返回  true false 
{
    let str = 'aa bbbbb cccc'
    console.log(str.includes('bbb'));
}

//satrtWith 以什么开始
{
    let str = 'aa bbbbb cccc'
    let strb = 'bb bbbbb cccc'  
    if(str.startsWith('bb')){
        console.error(true);
    }else{
        console.error(false);
    }
}

//endsWith  以什么结束
{
    let str = 'aa bbbbb cccc'
    let strb = 'bb bbbbb cccc'  
    if(str.endsWith('cc')){
        console.error(true);
    }else{
        console.error(false);
    }
}

//repeat  重复字符串   造假数据是可以使用
{
    let str = 'aa bbbbb cccc'
    console.error(str.repeat(100));
}

//字符串转数组
{
    let str ='aa-bb-cc';
    let arr=Array.from(str);
    console.error(arr);
}

// 填充字符串 前面填充 padstart   往后填充 padends   没卵用
