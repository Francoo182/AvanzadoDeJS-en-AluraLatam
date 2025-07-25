/*Inserta de manera dinamica texto en la pagina, esto no es un texto, ya pasa a ser un objeto!
let titulo = document.querySelector('h1');
let parrafo = document.querySelector('p');
titulo.innerHTML = "ANIMATE A SUMAR 2 NUMEROS";
parrafo.innerHTML = "Ingrese un numero del 1 al 10";
ESTA ES UNA MANERA PRECARIA DE DAR DINAMISMO!!!!!!!!!
 */
let r = NaN;
let a = [];

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
    i = 1;
    r = Math.floor(Math.random()*10+1);
    r = numControl(r) 
    document.getElementById(`reiniciar`).setAttribute(`disabled`, ``);
    darTXT('p','Felicidades comenzaste un nuevo juego, proba ingresando un numero entero aqui debajo');
    document.querySelector(`#valorUser`).value = ``;
    darTXT(`#numIntentos`, `La cantidad de intentos actual es de  ${i}`);
}
//Controlar que el numero este, si no esta, obtener otro numero aleatorio
//Agregar funcion que controle que si ya tuvo los 10 numeros decirle que ya jugo todos los intentos del dia
function numControl(n){
//Camino facil
/*     if(a.length >= 10){
        darTXT(`h1`, `Ya hiciste todos los intentos del dia, vuelve mañana para mas`);
    }
    else {
        console.log(n+ " Numero aleatorio");
        console.log("Lista: "+a);
        if(a.includes(n)){
            n = Math.floor(Math.random()*10+1);
            return numControl(n);
        }
        else{
            a.push(n); return n;}}
 */
//Camino un poco mas engorroso
    if(a.length < 10){
        console.log(typeof(n));
        console.log(n+ " Numero aleatorio");
        console.log("Lista: "+a);
        if(a.includes(n)){
            n = Math.floor(Math.random()*10+1);
            return numControl(n);
        }
        else{
            a.push(n); 
            return n;
        }
        }
    else {
        darTXT(`h1`, `Ya hiciste todos los intentos del dia, vuelve mañana para mas`)
        return null;};
            
// muy lindo pero no use la recursividad
/* if(a.length <=10){
    while (a.includes(n)){
        n = Math.floor(Math.random()*10+1);
        if (a.length >= 10){
            darTXT(`h1`, `Ya hiciste todos los intentos del dia, vuelve mañana para mas`);
            break;}
    }
    console.log(n+ " Numero aleatorio fuera de lista");
    a.push(n);
    console.log("Lista: "+a);
    return n;
} */
   
}

function adivinar(){
    let adiv = parseInt(document.getElementById("valorUser").value);
    if(adiv != r ){
        darTXT(`p`, `No le pegaste`);
        darTXT(`#numIntentos`, `La cantidad de intentos actual es de  ${i}`);
        i++;
        document.querySelector(`#valorUser`).value = ``;
    }
    else {
        document.getElementById(`reiniciar`).removeAttribute(`disabled`);
        darTXT('p', "Capoooo era ese");}
    
    return;
}
/*let parIntentos = document.getElementById(`numIntentos`);
        parIntentos.innerHTML = `La cantidad de intentos actual es de ${i}`*/