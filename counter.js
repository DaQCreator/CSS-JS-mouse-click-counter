// Zmienne
let counter = 0;

// Elementy pobrane
const spanCounter = document.querySelector("span.counter");
const btnAdd = document.querySelector('button');
const btnMinus = document.querySelector('button:nth-of-type(2)');

// Nasłuchiwanie zdarzenia
btnAdd.addEventListener("click", function(){
    counter++
    // console.log(counter);
    spanCounter.textContent = counter;
})
btnMinus.addEventListener("click", function(){
    counter--
    spanCounter.textContent = counter;
})