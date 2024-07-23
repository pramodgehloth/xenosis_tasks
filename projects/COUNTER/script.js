const btnleft = document.querySelector('.btn-left');
const btnright = document.querySelector('.btn-right');
const reset = document.querySelector('.reset');
const num = document.querySelector('#num');

btnleft.addEventListener
('click', () => {
    num.innerHTML++;
});

btnright.addEventListener
('click', () => {
    num.innerHTML--;
});

reset.addEventListener
('click', () => {
    num.innerHTML = 0;
});