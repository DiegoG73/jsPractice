// // La forma profesional de trabajar con selectores, es creándoles una variable que los represente
// const h1 = document.querySelector('h1')
// const parrafito = document.querySelector('.parrafito')
// const pid = document.querySelector('#pid')
// const input = document.querySelector('input')
// const p = document.querySelector('p')

// console.log({
//     h1,
//     parrafito,
//     pid,
//     input
// })

// //Nos permite modificar el HTML
// h1.innerHTML = 'Hola borola'
// //Nos permite leer el atributo HTML
// h1.getAttribute('class')
// //Nos permite modificar el atributo
// h1.setAttribute('class', 'rojo')

// //Agregando una clase a nuestro elemento HTML y removiéndola
// h1.classList.add('rojo')
// //Así eliminamos la clase agregada
// h1.classList.remove('verde')

const form = document.getElementById('form')
const input1 = document.getElementById('calculo1')
const input2 = document.getElementById('calculo2')
const btn = document.getElementById('btnCalcular')
const result = document.getElementById('result')

form.addEventListener('submit', sumasInputValues)

function sumasInputValues(event){
    event.preventDefault()
    const sumaInputs = input1.value + input2.value
    result.innerText = "La suma de los dos valores es: " +  sumaInputs
}