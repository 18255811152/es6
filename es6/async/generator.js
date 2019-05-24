// import fs from 'fs';
const fs = require('fs');
//封装成一个promise版本
const redfile = function (fileName) {
    return new Promise((resove, reject) => {
        fs.readFile(fileName, (err, data) => {
            if (err) { reject(data) }
            resove(data);
        });
    })
}
function * gent(){
    yield redfile('./a.txt');
    yield redfile('./b.txt');
    yield redfile('./c.txt');
}
let g1 =gent();
g1.next().value.then(res=>{
    console.error(data.toString());
    return g1.next().value;
}).then(res=>{
    console.error(data.toString());
    return g1.next().value;
}).then(res=>{
    console.error(data.toString());

})