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

redfile('./a.txt').then(res=>{
    console.error(data.toString());
    return redfile('./b.txt')
}).then(res=>{
    console.error(data.toString());
    return redfile('./c.txt')
}).then(res=>{
    console.error(data.toString());
})