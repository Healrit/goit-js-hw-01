// Задание 5
// Пользователь может оформить доставку товара к себе в страну, указав ее при посещении страницы в prompt. 
// Учти, пользователь может ввести имя страны не только буквами нижнего регистра, а к примеру 'кИтАЙ'.

// Напиши скрипт который выводит сообщение о стоимости доставки в указанную страну. Обязательно используй switch. 
// Формат сообщения: 'Доставка в [страна] будет стоить [цена] кредитов'.

// Но доставка есть не везде, если указанной страны нет в списке, то выводи в alert сообщение 'В вашей стране доставка не доступна'.
// Ниже приведен список стран и стоимость доставки.

// Китай - 100 кредитов
// Чили - 250 кредитов
// Австралия - 170 кредитов
// Индия - 80 кредитов
// Ямайка - 120 кредитов


'use strict'

let country = 'China';

const userInput = prompt('Enter the country of delivery');

const normalizedInput = userInput.toLowerCase();

console.log(country === normalizedInput);

let country = China;
let price = 100;

switch(country){
    case 1: 
        country = `Chile`;
        price = `250`;
        break;
    
    case 2: 
        country = `Australia`;
        price = `170`;
        break;
    
    case 3: 
        country = `India`;
        price = `80`;
        break;
        
    case 4: 
        country = `Jamaica`;
        price = `120`;
        break;  

        default:
            result = `В вашей стране доставка не доступна`;
    }

console.log(result);    

