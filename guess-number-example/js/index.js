/**
 * Slumpa ett tal med `Math.random()`. 
 * Låt användaren skriva in ett tal och 
 * jämför sedan med det slumpade talet. Om det är det samma skriv ut "Rätt gissat" annars säg om det är för högt eller lågt.
 */

const input = document.querySelector('input');
const button = document.querySelector('button');
const message = document.querySelector('p');
const randomNumber = Math.round(Math.random() * 100); // Slumpar ett tal mellan 0 och 100
let guesses = 0;

button.addEventListener('click', () => {
    const userNumber = input.value;
    guesses++;

    if (userNumber == randomNumber) {
        message.innerText = 'Rätt gissat! Antal gissningar: ' + guesses;
    } else if (userNumber > randomNumber) {
        message.innerText = 'För högt! Antal gissningar: ' + guesses;
    } else  {
        message.innerText = 'För lågt! Antal gissningar: ' + guesses;
    }
});