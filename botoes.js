const vermelho = document.querySelector('#btn-red');
const azul = document.querySelector('#btn-blue');
const amarelo = document.querySelector('#btn-yellow');
const verde = document.querySelector('#btn-green');
const laranja = document.querySelector('#btn-orange');
const preto = document.querySelector('#btn-black');
vermelho.addEventListener('click', function(){
    document.body.style.background = 'red'
})

azul.addEventListener('click', function(){
    document.body.style.background = 'blue'
})

amarelo.addEventListener('click', function(){
    document.body.style.background = 'yellow'
})

verde.addEventListener('click', function(){
    document.body.style.background = 'green'
})

laranja.addEventListener('click', function(){
    document.body.style.background = 'orange'
})

preto.addEventListener('click', function(){
    document.body.style.background = 'black'
})
