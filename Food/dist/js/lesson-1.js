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


    //Modal
    let paddingoffset = window.innerWidth - document.body.offsetWidth + "px"; //Величина скроллбара
    let modalopen = false; // было ли открыто модальное окно
    const openModal = document.querySelectorAll('[data-modal]'),
          modal = document.querySelector('.modal'),
          closeModal = document.querySelectorAll('[data-close]');

    function Modal(){
        modal.classList.toggle("show");
        if(document.body.style.overflow == "" && modal.classList.contains("show")){
            modalopen = true; // модальное окно было открыто
            document.body.style.overflow = "hidden";
            document.body.style.paddingRight = `${paddingoffset}`;
        } else {
            document.body.style.overflow = "";
            document.body.style.paddingRight = "";
        }
    }

    function ShowModalByScroll(){
        if(!modalopen){
            setTimeout(()=>{
                if(window.pageYOffset + document.documentElement.clientHeight >= 3715 &&
                    window.pageYOffset + document.documentElement.clientHeight <= 4500) { // Появл. когда скролл у калькулятора
                        Modal();
                    }
            }, 5000);
            window.removeEventListener('scroll', ShowModalByScroll);
        }
    }

    openModal.forEach(element => {
        element.addEventListener('click', ()=>{
            Modal();
        });
    });

    closeModal.forEach(element => {
        element.addEventListener('click', ()=>{
            Modal();
        });
    });

    modal.addEventListener('click', (element)=>{
        if(element.target == modal){
            Modal();
        }
    });

    document.addEventListener('keydown', (element)=>{
        if(element.code === "Escape" && modal.classList.contains('show')){
            Modal();
        }
    });
 
    window.addEventListener('scroll', ShowModalByScroll);

    // Используем классы для карточек
    class MenuCard {
        constructor(src, alt, title, description, price, parentSelector, ...classes) {
            this.src = src;
            this.alt = alt;
            this.title = title;
            this.description = description;
            this.price = price;
            this.classes = classes;
            this.parent = document.querySelector(parentSelector);
            this.transfer = 27;
            this.changeToUAH();
      }

        changeToUAH() {
            this.price = this.price * this.transfer;
      }

        render() {
            const element = document.createElement("div");
            
            if(this.classes.length === 0){
                this.element = 'menu__item';
                element.classList.add(this.element);
            } 
            else{
                this.classes.forEach(className => element.classList.add(className));
            }

            element.innerHTML = `
                    <img src=${this.src} alt=${this.alt}>
                    <h3 class="menu__item-subtitle">${this.title}</h3>
                    <div class="menu__item-descr">${this.description}</div>
                    <div class="menu__item-divider"></div>
                    <div class="menu__item-price">
                        <div class="menu__item-cost">Цена:</div>
                        <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
                    </div>
            `;
            this.parent.append(element);
        }
    }

    new MenuCard(
        "img/tabs/vegy.jpg",
        "vegy",
        'Меню "Фитнес"',
        'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!',
        9,
        '.menu .container',
        'menu__item'
    ).render();

    new MenuCard(
        "img/tabs/elite.jpg",
        "elite",
        'Меню “Премиум”',
        'В меню “Премиум” мы используем не только красивый дизайн упаковки, но и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!',
        9,
        '.menu .container',
        'menu__item'
    ).render();

    new MenuCard(
        "img/tabs/post.jpg",
        "post",
        '"Меню "Постное"',
        'Меню “Постное” - это тщательный подбор ингредиентов: полное отсутствие продуктов животного происхождения, молоко из миндаля, овса, кокоса или гречки, правильное количество белков за счет тофу и импортных вегетарианских стейков.',
        9,
        '.menu .container',
        'menu__item'
    ).render();
});



    

 












































