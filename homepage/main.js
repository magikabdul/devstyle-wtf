let name = 'Krzysztof';
let age = 44;

console.log(`Nazywam sie ${name} i mam ${age} lat`);

const content = document.querySelector('.diary-entry').innerHTML;
document.querySelector('.diary-entry').innerHTML = 'Taka sobie nowa treść! :)'
console.log(content);

const button = document.querySelector('.header__button-js');
const hamburger = document.querySelector('.navigation__switcher--js');
console.log(button);

function handleClick() {
	console.log("naciśnięte");
}

//button.addEventListener('click', handleClick);

button.addEventListener('click', () => {
	const header = document.querySelector('.header__title-js');

	header.innerHTML = 'dddd';
	header.classList.add('header__title--red');
});

hamburger.addEventListener('click', () => {
	const menu = document.querySelector('.navigation__list--js');

	menu.classList.toggle('navigation__list--visible');
});