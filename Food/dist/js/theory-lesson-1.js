"use strict";

//ES6 классы под капотом
/* const num = new Number(3);
console.log(num);

const func = new Function(3);
console.log(func); 

 function User(name, id){
    this.name = name;
    this.id = id;
    this.human = true;
    this.hello = function(){
        console.log(`Hello ${this.name}`);
    };
}

User.prototype.exit = function(name){
    console.log(`Пользователь ${this.name} нас покинул`);
};

const ivan = new User('Ivan', 27);
const alex = new User('Alex', 20);

ivan.exit();
alex.exit();

ivan.hello();
alex.hello();

console.log(ivan);
console.log(alex); */

//Классы (синтаксический сахар)
/* class User{
    constructor(name, id){
        this.name = name;
        this.id = id;
        this.human = true;
    }

    hello(){
        console.log(`Hello ${this.name}`);
    }

    exit(){
        console.log(`Bye ${this.name}`);
    }
}

const ivan = new User('Ivan', 27);
ivan.hello(); */




// 1) Обычная функция: this = window, но если стоит use strct - будет undefined
// 1.2) Замыкание ищет значения сначала внутри, потом ищет во внешней стороне
/*****  function showThis(a, b){
    console.log(this);
    function sum(){
        console.log(this);
        return a + b;
    }
    console.log(sum());
}
showThis(4,5); */

// 2) Контекст у методов объекта - сам объект
/*****  const obj = {
    a: 20,
    b: 15,
    sum: function(){
        function shout(){
            console.log(this);
        }
        shout();
    }
};

obj.sum(); 

// 3) this в конструкторах и классах - это новый экземпляр объекта
/*****  function User(name, id){
    this.name = name;
    this.id = id;
    this.human = true;
    this.hello = function(){
        console.log("hello!" + this.name);
    };
}

let ivan = new User('Ivan', 23); */

// 4) Ручная привязка this: call, apply, bind
/***** function sayName(surname){
    console.log(this);
    console.log(this.name + surname);
}

const user = {
    name: "John"
};

sayName.call(user, 'Smith');
sayName.apply(user, ['Smith']);

function count(num){
    return this*num;
}

const double = count.bind(2);
console.log(double(3));
console.log(double(13)); */


// 5) this сам элемент на котором произошел эвент, если в классическом
const btn = document.querySelector('button');
/* btn.addEventListener('click', function(){
    this.style.backgroundColor = "red";
    console.log(this); 
}); */

btn.addEventListener('click', (e)=>{
    e.target.style.backgroundColor = "red";
    console.log(this); 
});

const obj = {
    num: 5,
    sayNumber: function(){
        const say = () =>{
            console.log(this);
        };

        say();
    }
};

obj.sayNumber();

const double = a => a * 2;
console.log(double(4));











