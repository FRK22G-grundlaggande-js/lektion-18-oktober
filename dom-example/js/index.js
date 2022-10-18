console.log(document); // Visar vårt HTML-träd

const elem = document.querySelector('.heading'); // Sparar vår h1-element i en variabel
console.log(elem);
elem.innerText = 'Hej!'; // Ändrar texten inuti h1-elementet
elem.style.backgroundColor = 'lavender';

let name = 'Christoffer';
console.log('Hej ' + name + '!');
console.log(`Hej ${name}!`); // Template strings

const links = document.querySelectorAll('a');
console.log(links);
links[0].innerText = 'Startsida'; // Selekterar första element i listan

let number = 0; // Deklaration av variabel
number = 1;
number = 'Hej!';

const age = 10;
age = 20;