const openCodepen = document.getElementById('codepen-button');

let url = 'https://codepen.io/drcberry/';

openCodepen.addEventListener('click', function () {
  window.open(url, '_blank');
});