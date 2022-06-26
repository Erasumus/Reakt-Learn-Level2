"use strict";
window.addEventListener("DOMContentLoaded", () => {
    const tab = document.querySelector(".tabheader__items"),
        tabitem = tab.querySelectorAll(".tabheader__item"),
        tabcontent = document.querySelectorAll(".tabcontainer .tabcontent");
    let defaultitem = false,
        defaultindex,
        defaultchange = true;

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

    function displaytab(start = true, index = 0){
        hidetabcontent();

        if(start && defaultchange){
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

    displaytab(defaulttab(), 2);

});






