const konec = dayjs('2028 - 03 - 09');
const now = dayjs();
const msgElm = document.querySelector('#msg');
const nadpisElm = document.querySelector('h1');

if (now < konec) {
  msgElm.textContent = 'Ano';
  msgElm.classList.add('msg--valid');
  msgElm.style.fontSize = '1200%';
} else if (now >= konec) {
  msgElm.textContent = 'Ne';
  msgElm.classList.add('msg--invalid');
  msgElm.style.fontSize = '1200%';
  nadpisElm.style.color = 'fuchsia';
}
