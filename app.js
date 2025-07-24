/*Inserta de manera dinamica texto en la pagina, esto no es un texto, ya pasa a ser un objeto!
let titulo = document.querySelector('h1');
let parrafo = document.querySelector('p');
titulo.innerHTML = "ANIMATE A SUMAR 2 NUMEROS";
parrafo.innerHTML = "Ingrese un numero del 1 al 10";
ESTA ES UNA MANERA PRECARIA DE DAR DINAMISMO!!!!!!!!!
 */
let r = NaN;

function darTXT(elemento,txt){
    let elementoHTML =document.querySelector(elemento);
    elementoHTML.innerHTML = txt;
}
//Creamos una funcion que nos permite ingresar el texto dinamicamente  siempre que necesitemos, ya no hace falta mencionar el document.querySelector y despues llamar a la variable dandole un TXT, ahora con la funcion esta ya estamos haciendo eso automaticamente para cada parte del texto, esto para crear publicaciones es clave!!
darTXT('h1', 'Primer texto dinamico bien puesto');
darTXT('p', 'segundo texto dinamico bien puesto');

/* function funIntentar(){
    let numIngresado = parseInt(prompt("Ingresa un numero entero"));
    let numIngresado2 = parseInt(prompt("Ingresa otro numero entero"));
    let a = numIngresado + numIngresado2;
    alert(`El resultado de tu suma fue de ${a}`)
}
 */
/* function numAl(){
    let j = Math.floor(Math.random()*10+1);
    console.log(j);
    let numUser = parseInt(prompt("Ingresa pue un numero ñeri, trata de que sea entero nms no sea gil"));
    while (numUser != j){
        numUser = parseInt(prompt("Ingresa pue un numero ñeri, trata de que sea entero nms no sea gil parte2"));
    }
    alert("congratulations acertaste")
} */
//----------------------------//
let i = 1;
function numAleatorio(){
    r = Math.floor(Math.random()*10+1);
    darTXT('p','Felicidades comenzaste un nuevo juego, proba ingresando un numero entero aqui debajo');
    console.log(r);
}
function adivinar(){
    let adiv = parseInt(document.getElementById("valorUser").value);
    console.log(r);
    console.log(i);
    if(adiv != r ){
        darTXT(`p`, `No le pegaste`);
        let parIntentos = document.getElementById(`numIntentos`);
        parIntentos.innerHTML = `La cantidad de intentos actual es de ${i}`
    }
    else darTXT('p', "Capoooo era ese");
    i++
    return;
}
