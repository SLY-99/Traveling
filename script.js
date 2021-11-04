
let ticket = 500;
let hotel = 250;
let museum = 120;

let ticketSum = 10650*ticket;
let hotelSum = 10650*hotel;
let museumSum = 12500*museum;


let spendings =ticketSum+hotelSum+museumSum; 


let cityname = prompt('Welcome to our Travel Agency. Which city do you want to travel?')
let username = prompt('Please type your name')
let money = prompt('Please type amount of money in SUM that you have for travel. I will remaind you that travel to ' + cityname+' starts from  10000000 mln sum including ticket-500$ , hotel-250$ and other entertainment-120€ ', 0)
let tittle = document.querySelector('#tittle');


if(money > 0){
    if(money < spendings){
        tittle.textContent = "I'm so sorry Mr " + username + " You don't have enough money .";
        console.log("I'm so sorry Mr " + username + " You don't have enough money .");
    }else{
        tittle.textContent = "Have a nice trip Mr " + username;
        console.log("Have a nice trip Mr " + username);
    }
}





