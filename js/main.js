const menu = document.querySelector('#menu');
const bars = document.querySelector('.bars');

bars.addEventListener('click', () => {
	bars.classList.toggle('bars-active');
	menu.classList.toggle('menu');
});
