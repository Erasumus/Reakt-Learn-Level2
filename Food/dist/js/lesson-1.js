//index.html
"use strict";
window.addEventListener("DOMContentLoaded", () => {

    //tab's
    const tab = document.querySelector(".tabheader__items"),
        tabitem = tab.querySelectorAll(".tabheader__item"),
        tabcontent = document.querySelectorAll(".tabcontainer .tabcontent");
    let defaultitem = false, //Найден ли активный таб из index.html
        defaultchange = true, //Нужно ли учитывать index.html
        defaultindex; //Найденный ID активного таба из index.html
    
    function hidetabcontent(){
        tabcontent.forEach(element => {
            element.classList.add("hide");
            element.classList.remove("show", "fade");
        });

        tabitem.forEach(element => {
            element.classList.remove("tabheader__item_active");
        });
    }

    function displaytabcontent(index = 0){
        tabcontent[index].classList.remove("hide");
        tabcontent[index].classList.add("show", "fade");
        tabitem[index].classList.add("tabheader__item_active");
    }

    function defaulttab(){
        tabitem.forEach((element, index) => {
            if(element.classList.contains("tabheader__item_active")){
                defaultitem = true;
                defaultindex = index;
            } 
        });
        return defaultitem;
    }

    function displaytab(defaultchange = true, index = 0){
        hidetabcontent();

        if(defaultitem && defaultchange){
            displaytabcontent(defaultindex);
        } else {
            displaytabcontent(index);
        }

        tab.addEventListener('click', (event)=>{
            const target = event.target;
            if(target && target.classList.contains("tabheader__item")){
                tabitem.forEach((element, i) => {
                    if (target == element){
                        hidetabcontent();
                        displaytabcontent(i);
                    }
                });
            }
        });
    }

    displaytab(defaulttab(), 2); //Имеется ли указанный tab в index.html, index если не найден


    //timer
    const endtime = "2022-07-26";

    function remainTimer(endtime){
        const t = Date.parse(endtime) - Date.parse(new Date()),
              days = Math.floor(t / (1000*60*60*24)),
              hours = Math.floor((t / (1000*60*60)) % 24),
              minutes = Math.floor((t / (1000*60)) % 60),
              seconds = Math.floor((t / 1000) % 60);

        return {
            'total': t,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        };
    }

    console.log(remainTimer(endtime));

    function setZero(num){
        if(num>=0 && num <= 10){
            return `0${num}`;
        } else {
            return num;
        }
    }

    function setClock(endtime, selector){
        const timer = document.querySelector(selector),
              days = timer.querySelector("#days"),
              hours = timer.querySelector("#hours"),
              minutes = timer.querySelector('#minutes'),
              seconds = timer.querySelector('#seconds'),
              updatetimer = setInterval(updateclock, 1000);
              updateclock();

        function updateclock(){
            const t = remainTimer(endtime);
            days.innerHTML = setZero(t.days);
            hours.innerHTML = setZero(t.hours);
            minutes.innerHTML = setZero(t.minutes);
            seconds.innerHTML = setZero(t.seconds);

            if(t.total <= 0){
                clearInterval(updatetimer);
            }
        }
    }

    setClock(endtime, '.timer');

});



    

 












































