let btn = document.querySelector('.result__go');
let result = document.querySelector('.result__result');
let img = document.querySelector('.random__img')
let mes = ['YES', 'NO'];

btn.addEventListener('click', ()=> {
    result.innerHTML = ``;
    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }
    setTimeout(function(){
        result.innerHTML = `${mes[getRandomInt(0, 2)]}`
    },320)
    
    img.classList.add('active');
    setTimeout(function(){
    img.classList.remove('active');
    },350)
})

console.log(('sss'));