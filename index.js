//Esto agrega a la pantalla el valor de los botones
function mostrar(valor){
    document.getElementById('display').value += valor;
}

//Esto elimina el valor de los botones 
function borrar(){
    document.getElementById('display').value = '';
}

function calcular(){
    const valorPantalla = document.getElementById('display').value
    const resultado = eval(valorPantalla)
    document.getElementById('display').value = resultado
}