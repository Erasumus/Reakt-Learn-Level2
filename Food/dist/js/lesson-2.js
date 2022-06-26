//timer.html
const btn = document.querySelector('.btn'),
    box = document.querySelector('.box');
let pos = 0;


function moveforward(){
    const timer = setInterval(frame, 10);
   
    function frame(){
        if(pos==300){
            clearInterval(timer);
            setTimeout((text) => {
                console.log(text)
                moverevert();
            }, 2000, "Идем обратно");
        }
        pos++;
        box.style.top = pos + "px";
        box.style.left = pos + "px";
    }
}

function moverevert(){
    const timer2 = setInterval(frameend, 10);
    function frameend(){
        if(pos==0){
            clearInterval(timer2);
            setTimeout((text) => {
                console.log(text);
                moveforward();
            }, 2000, "В путь!");
        }
        pos--;
        box.style.top = pos + "px";
        box.style.left = pos + "px";
    }
}

btn.addEventListener('click', moveforward);

// let timerId3, i;

// const timerId = setTimeout((text) => {
//     clearInterval(timerId2); //Остановить таймер
//     console.log(text);
// }, 2000, "Hello");

// //через функцию
// const timerId2 = setTimeout(logger, 2000);
// function logger(){
//     console.log("text");
// }

// //интервальные
// btn.addEventListener('click', ()=>{
//     timerId3 = setInterval(logger2, 200);
// });
// function logger2(){
//     if(i===3){
//         clearInterval(timerId3);
//     }
//     console.log("interval");
//     i++;
// }

// let id = setTimeout(function log(){
//     console.log("hello");
//     id = setTimeout(log, 500);
// }, 500);



