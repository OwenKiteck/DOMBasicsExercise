const xMen = document.getElementById(`x-men`);

const centered = document.getElementsByClassName(`center`);

const batman = document.querySelector(`#batman`)

const h3s = document.querySelectorAll(`h3`)

const h1 = document.querySelector(`h1`)

h1.innerText = `The Best Animated Superhero TV Shows Ever!`;

const honorableMentions = document.querySelector(`#honorable-mentions`);

honorableMentions.innerHTML = `<p>OTHER GREAT SHOWS<p/>`;

// 7
const aTag = document.querySelector(`a`)
aTag.innerHTML = `<a href="https://fandomwire.com/15-greatest-animated-superhero-shows-ever-made-ranked/">The Best Animated Superhero TV Shows Ever</a>`;

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

