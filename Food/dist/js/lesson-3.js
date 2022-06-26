//index.html
"use strict";

const now = new Date();
console.log("GetFullYear: " + now.getFullYear() + "\n" +
            "GetDate: " + now.getDate() + "\n" + 
            "GetDay: " + now.getDay() + "\n" + 
            "GetHours: " + now.getHours() + "\n" +
            "GetUTCHours: " + now.getUTCHours() + "\n" +
            "GetSeconds: " + now.getSeconds() + "\n" +  
            "GetMilliseconds: " + now.getMilliseconds() + "\n" + 
            "SetHours(40): " +  now.setHours(40) + "\n" + 
            "now: " + now);

let start = new Date();
for(let i=0; i<1000; i++){
    let some = i ** 3;
}

let end = new Date();
console.log(`Цикл отработал за ${end - start} миллисекунд`);
