/* 
Skriv ett program som frågar användaren efter ett lösenord. Hitta på ett hemligt lösenord och spara det i en variabel. När användaren har skrivit in ett ord ska programmet jämföra med det sparade lösenordet och skriva ut om det var rätt eller inte. Använd en if-sats.

1. Fråga användaren om lösenord
    1. Koppla en eventlister till ett inputfält
    2. Spara värdet från inputfältet i en variabel

2. Hitta på ett lösenord och spara i en variabel

3. Jämför ovan lösenord med användarens inmatade lösenord

4. Meddela om rätt eller fel
*/

const input = document.querySelector('input');
const button = document.querySelector('button');
const message = document.querySelector('p');
const password = 'pwd123'; // Lösenord att jämföra mot

button.addEventListener('click', () => {
    let userPassword = input.value; // input.value hämtar värdet från inputfältet och sen sparar vi det i en variabel
    console.log(userPassword);

    if (userPassword == password) { // Jämför innehållet i två variabler som resulterar i sant eller falskt. Om sant gå in i if-sats
        console.log('Samma lösenord');
        message.innerText = 'Samma lösenord';
    } else {
        console.log('Ej samma lösenord');
        message.innerText = 'Ej samma lösenord';
    }
});

// Slumpa ett tal

const numberWithDecimals = Math.random() * 10; // Slumpa ett tal mellan 0-10
const roundedNumber = Math.round(numberWithDecimals); // Avrunda talet till närmasta heltal utan decimaler

console.log(roundedNumber);