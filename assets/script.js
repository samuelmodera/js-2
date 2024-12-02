
const imagen = document.querySelector('.desafio1')

imagen.addEventListener('click', () => {
   if (imagen.style.border) {
        (imagen.style.border = '')
        
    } else {
        imagen.style.border = ' 5px solid red'
    }
})
  

/////////////////

const select1 = document.querySelector('#primero')
const select2 = document.querySelector('#segundo')
const select3 = document.querySelector('#tercero')
const respuesta = document.querySelector('.texto')
const verificar = document.querySelector('.btn') 

verificar.addEventListener('click', () => {
    if (select1.value == 9 && select2.value == 1 && select3.value == 1){
        respuesta.innerHTML = 'password correcto'
    } if (select1.value == 7 && select2.value == 1 && select3.value == 4){
        respuesta.innerHTML = 'password correcto'
    } else {
        respuesta.innerHTML = 'password incorrecto'
    }
}) 

//////////////////

const sticker1 = document.querySelector('.sticker1')
const sticker2 = document.querySelector('.sticker2')
const sticker3 = document.querySelector('.sticker3')
const respuesta2 = document.querySelector('.texto2')
const verificar2 = document.querySelector('.btn2') 


verificar2.addEventListener('click', () => {
    const totalStickers = 
        Number(sticker1.value) + 
        Number(sticker2.value) + 
        Number(sticker3.value);

   
    if (totalStickers <= 10) {
        respuesta2.innerHTML = `Llevas ${totalStickers} stickers.`
    } else {
        respuesta2.innerHTML = `Llevas demasiados stickers. Seleccionaste un total de ${totalStickers} stickers.`
    }
})




