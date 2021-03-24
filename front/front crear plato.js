

const formularioCrearPlato            =document.getElementById("formulario-crear-plato");
const btnCrearPlato                   =document.getElementById("btn-crear-plato");
const obtenerTodosLosPlatosDisponibles= document.getElementById("obtener-todos-los-platos");
const contenedorTodosLosPlatos        =document.getElementById("contenedor-todos-los-platos");
var todoLosPlatosArray =[];
var url = 'http://localhost:3000/api/productos';


var plato = {
    nombre : "nombre",
    precio: "precio",
    descripcion: "descripcion"

}

btnCrearPlato.addEventListener("click",(ev)=>{
    ev.preventDefault();
   var  nombre      =document.getElementById("nombre").value;
   var  precio   =document.getElementById("precio").value;
   var  descripcion  =document.getElementById("descripcion").value;

    
    plato.nombre        = nombre;
    plato.precio        = precio;
    plato.descripcion    = descripcion;


    creandoPlato(plato)
    console.log(plato,"este es mi usuario");
    formularioCrearPlato.reset();
})

obtenerTodosLosPlatosDisponibles.addEventListener("click",(ev)=>{
  obtenerTodosLosPlatos();
      var JSONString2 =JSON.stringify(todoLosPlatosArray) ;
      var pasadoAObj = JSON.parse(JSONString2);

      for (let index = 0; index < todoLosPlatosArray.length; index++) {
      console.log(pasadoAObj[index])
      contenedorTodosLosPlatos.innerHTML +=`<div><p>Nombre: ${pasadoAObj[index].nombre}</p> <p>Precio: ${pasadoAObj[index].precio}</p> <p>Descripción: ${pasadoAObj[index].descripcion}</p> <p>Creado: ${pasadoAObj[index].createdAt}</p></div>` 
        
      }

})









function creandoPlato(plato) {
    fetch(url, {
        method: 'POST', // or 'PUT'
        body: JSON.stringify(plato), 
        headers:{
          'Content-Type': 'application/json'
        }
      }).then(res => res.json())
      .catch(error => console.error('Error:', error))
      .then(response => console.log('Success:', response));
}

function obtenerTodosLosPlatos() {
  fetch(url)
  .then(response => response.json())
 // .then((data) => console.log(data))
  .then((data) => todoLosPlatosArray=data)

  
}
