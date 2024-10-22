/* Это объявление переменной, мы наши кнопку по тегу */
const button = document.querySelector('button');

const photo = document.querySelector('img');
/* Тут на кнопку навешиваем обрабочик, который ждёт клика и тогда запустит логику */
button.addEventListener('click', function() {
	photo.width += 30
})