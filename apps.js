const xMen = document.getElementById(`x-men`);

const centered = document.getElementsByClassName(`center`);

const batman = document.querySelector(`#batman`)

const h3s = document.querySelectorAll(`h3`)

const h1 = document.querySelector(`h1`)

h1.innerText = `The Best Animated Superhero TV Shows Ever!`;

const honorableMentions = document.querySelector(`#honorable-mentions`);

// 6
honorableMentions.innerHTML = `<p>OTHER GREAT SHOWS</p>`;

// 7
const aTag = document.querySelector(`a`)
aTag.href = `https://fandomwire.com/15-greatest-animated-superhero-shows-ever-made-ranked/`;

// 8
h1.classList.add(`background`, `text-color`)

// 9
h1.classList.remove(`background`)

// 10
const h4 = document.createElement(`h4`);
h4.innerText = `Is Avatar: The Last Airbender A Superhero Show?`;
const body = document.querySelector(`body`);
body.prepend(h4)

// 11
const h5 = document.createElement(`h5`);
h5.innerText = `Heroes in a half shell Turtle Power!`;
aTag.insertAdjacentElement(`afterend`, h5)

// 12 
const li = document.querySelector(`li`)
li.remove();


// BONUS
const divs = document.querySelectorAll(`div`);
for (d of divs){
    d.classList.toggle(`background`)
}

const avengers = [
    "Forever",
    "Fight",
    "As",
    "One",
    "AVENGERS",
    "ASSEMBLE!"
];
for (item of avengers){
    const newSpan = document.createElement(`span`)
    newSpan.innerText = `${item} `;
    body.insertAdjacentElement(`beforeend`, newSpan)
}