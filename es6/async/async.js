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
async function fn(){
    let f1= await redfile('./a.txt');
    console.error(f1);
    let f1= await redfile('./b.txt');
    console.error(f1);
    let f1= await redfile('./c.txt');
    console.error(f1);
}

// fn();
console.error(fn());
