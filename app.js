//Inserta de manera dinamica texto en la pagina, esto no es un texto, ya pasa a ser un objeto!
let titulo = document.querySelector('h1');
let parrafo = document.querySelector('p');


titulo.innerHTML = "ANIMATE A SUMAR 2 NUMEROS";
parrafo.innerHTML = "Ingrese un numero del 1 al 10";




function funIntentar(){
    let numIngresado = parseInt(prompt("Ingresa un numero entero"));
    let numIngresado2 = parseInt(prompt("Ingresa otro numero entero"))
    let a = numIngresado + numIngresado2;
    alert(`El resultado de tu suma fue de ${a}`)
}