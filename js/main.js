let btn = document.querySelector('.result__go');
let result = document.querySelector('.result__result');
let img = document.querySelector('.random__img')
let mes = ['YES', 'NO'];

btn.addEventListener('click', ()=> {
    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }
    result.innerHTML = `${mes[getRandomInt(0, 2)]}`
    img.classList.add('active');
    setTimeout(function(){
    img.classList.remove('active');
    },300)
})
