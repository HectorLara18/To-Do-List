let myPendingList = []
let myCompletedTask = []

let btnAgregar = document.getElementById("agregar")
let todoList = document.getElementById("todo-list")
let completedList = document.getElementById("completed-list")
let pendientes = document.getElementById("pendientes")


btnAgregar.addEventListener("click", agrega)


function agrega(){
    myArray = [];
    const valorDePrueba = document.getElementById("prueba").value
    myPendingList.push(valorDePrueba)
    console.log(valorDePrueba)
    ejecutarListaPendientes()
    
} 

function ejecutarListaPendientes(){
    todoList.innerHTML = ""
    let entradaTarea = document.getElementById("prueba")
    const pendingList = myPendingList.map(elemento => "<li value =" + elemento + ">" + elemento + "</li>")
    todoList.innerHTML = pendingList.join("")
    entradaTarea.value = ""
    const tareasPendientes = document.querySelectorAll("#todo-list li")
    tareasPendientes.forEach((elemento,i) =>{
        elemento.addEventListener("click",()=>{
            console.log(elemento,i)
            console.log(elemento.innerHTML)
            myCompletedTask.push(elemento.innerHTML)
            elemento.parentNode.removeChild(elemento)
            myPendingList.splice(i,1)
            ejecutarListaPendientes()
            ejecutarListaCompletados()
        })
    })
}

function ejecutarListaCompletados(){
    completedList.innerHTML = ""
    const myCompletedlist = myCompletedTask.map(elemento => "<li value =" + elemento + ">" + elemento + "</li>")
    completedList.innerHTML = myCompletedlist.join("")
}

function eliminarTarea(evento){
    console.log(evento)
}

function prueba(){
    console.log("mensaje secreto!!!")
}
//document.addEventListener("keydown",imprimeConsola);

function holaMundo(){
    console.log("hola mundo")
}

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



const form = document.getElementById("")