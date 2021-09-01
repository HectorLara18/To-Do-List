let btnAgregar = document.getElementById("agregar")

function agrega(){
    myArray = [];
    const valorDePrueba = document.getElementById("prueba").value
    console.log(valorDePrueba)
}

//document.addEventListener("keydown",imprimeConsola);



function imprimeConsola(evento){
    console.log("tecla oprimida")
    console.log(evento)
    if(evento.key =="Enter"){
        console.log("mensaje secreto")
        alert("Error!!")
    }else{
        console.log("mensaje no secreto")
    }
}

//let dinero = prompt("cuanto dinero tienes: ")