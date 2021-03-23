const formularioCrearPlato    =document.getElementById("formulario-crear-plato");
const btnCrearPlato  =document.getElementById("btn-crear-plato");
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


    creandoUsuario(plato)
    console.log(plato,"este es mi usuario");
    formularioCrearPlato.reset();
})

function creandoUsuario(plato) {
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

