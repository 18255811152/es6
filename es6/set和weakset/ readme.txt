数据结构
    数组
    json 二叉树

set数据结构
    类似数组 但里面不能有重复值
   
set用法   
let set=   new set(['1','23323']);
set.add();//往set里面添加数据  但是set里面没有重复值
set.delect();//删除单项数据 
set.clear //清楚全部set数据


属性
set.seze();//查看长度   


循环
   let array = new set(['1','2','3']);

        for(let value of array){//默认返回value
            console.error(value);
        }

        for(let value1 of array.keys()){//返回的是key值
            console.error(value1);
        }

        for(let value2 of array.value()){//返回的是value值
            console.error(value1);
        }


        for(let value2 of array.entries()){// 返回的是键值对
            console.error(value1);
        }

        for(let [k,v] of array.entries()){// 返回的是键值对
            console.error(k,v);
        }

       array.forEach((key,value) => {
        console.error(key,value);
       });

       new Set  ([])
       new WeakSet ({})

       WeakSet没有size

        最好使用add方法添加