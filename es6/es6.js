//结构赋值
{
    let json = {
        name: '章三',
        age: 18,
        job: '屌丝码农'

    };

    let { name, age, job } = json;
    console.error(json);
}


{
    let [a, b, c = '暂无数据'] = ['a', 'cc'];
    console.error(a, b, c);
}

{
    let { a, b } = { a: 'ads', b: 'asd' }
    console.error(a, b);
}

{
    //交换位置
    let a = 5;
    let b = 10; 
    [a, b] = [b, a];
    console.error(a, b);
}
