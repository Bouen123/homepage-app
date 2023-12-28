const berger = document.getElementById('berger');
const menu = document.getElementById('menu');
const x = document.getElementById('x');


berger.addEventListener('click', function() {
    menu.style.display = 'flex';
    berger.style.display='none';
})
x.addEventListener('click', function() {
    menu.style.display = 'none';
    berger.style.display='flex';
})