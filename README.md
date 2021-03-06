# Delilah Restó




> Estas son las instrucciones de la aplicación de pedidos Online (Delilah Restó)

---

### Contenidos
Puede hacer click sobre los contenidos para hacer una búsqueda más rápida

- [Descripción ](#Descripción)
- [Como Usarla](#Como-Usarla)
- [Instalacion](#Instalacion)
- [Desarrollador](#Desarrollador)

---

## Descripción 

Delilah Restó,  es una aplicación de pedidos de comida o delivery Online. Este proyecto plantea la creación de un sistema de pedidos online para un restaurante

#### Tecnologias Utilizadas 

- Node.js
- JavaScript
- MySQL

[Volver al inicio](#Contenidos)

---

## Como Usarla

#### Instalación

Abrir una terminal e instalar las siguientes dependencias en caso de que no se encuentren instaladas de manera correcta

- npm install nodemon
- npm install express
- npm install sequelize
- npm install cors
- npm install jwt-simple
- npm install mysql2

También  debe descargar he instalar XAMPP para poder inicializar la base de datos como sugerencia puede hacerlo desde "https://www.apachefriends.org/es/download.html"

#### Base de datos

En la carpeta raíz  tiene una base de datos creada con usuarios y pedidos, si no desea usar esa base y por lo contrario piensa comenzar una desde cero, puede hacerlo la unica condicion para hacer esto es que el nombre la base a crear debe ser "delilah_resto"
y la dirección en donde debe hacer esto es el servidor local "http://localhost/phpmyadmin".

¿Como iniciar el servidor? puede hacerlo de manera sencilla con nodemon. Simplemente debe poner en la terminal nodemon con eso se incializa correctamente. Desde  su editor de código  usted podrá  ver las sentencias que se van a ir ejecutando.
----------

## End points


 ## PRODUCTOS 

http://localhost:3000/api/productos GET: Esta ruta refleja todos los productos que se encuentran en la base de datos, y devuelve un json.

Claro esta el objeto que retorna va ser del tipo json
```javascript
//Example 
 {
       "id": "1",
        "nombre": "Hamburguesa",
        "descripcion": "Hamburguesa completa",
        "precio":"850",
        "createdAt": "2021-05-01T01:07:50.000Z",
        "updatedAt": "2021-05-01T01:07:50.000Z"
  

}
```

http://localhost:3000/api/productos	POST: esta ruta es para crear un producto nuevo, solamente se puede hacer si se es administrador
para hacerlo el rol debe ser 1

```javascript
//Example body

//Rol 1 = Administrador 
//Rol 0 = Usuario
 {
        
        "nombre": "Hamburguesa",
        "descripcion": "Hamburguesa completa",
        "precio":"850",
        
        
 

}
```
```javascript
//Example Header

 {
        
        
        "user-token": "EL TOKEN QUE SE GENERA CUANDO SE HACE USO DE LA RUTA LOGIN"
        
        
 
}
```
http://localhost:3000/api/productos/{id} PUT: Esta ruta sirve para actualizar o cambiar un producto según  la ID del mismo, este end point también, puede ser utilizado  únicamente  por un usuario con  privilegios de Administrador.
```javascript
//Example body 

//Rol 1 = Administrador 
//Rol 0 = Usuario

 {
        
        "nombre": "Sushi",
        "descripcion": "Buenos Aires sushi",
        "precio":"2000",
        
        
  
}
```
```javascript
//Example Header

 {
        
        
        "user-token": "EL TOKEN QUE SE GENERA CUANDO SE HACE USO DE LA RUTA LOGIN"
        
        
 
}
```

http://localhost:3000/api/productos/{id} DELETE:  Esta ruta sirve para eliminar un producto según  la ID del mismo, este end point también, puede ser utilizado  únicamente  por un usuario con  privilegios de Administrador.



```javascript
//Example Header

 {
        
        
        "user-token": "EL TOKEN QUE SE GENERA CUANDO SE HACE USO DE LA RUTA LOGIN"
        
        
 
}
```
---
## USUARIOS


http://localhost:3000/api/users/registrer Este end point sirve para registrar un usuario

```javascript
//Example body, EL ROL POR DEFECTO ES  (0)

//Rol 1 = Administrador 
//Rol 0 = Usuario
 {
        
        "username": "Admin",
        "password": "Admin",
        "email": "admin@gmail.com",
        "numero": "47933255",
        "direccion":"calle 1234",
        "rol":"1" // si se quiere ser administrador se genera el rol 1 es a modo de prueba sino por defecto es 0

        
        
  

}
```
http://localhost:3000/api/users/login  Este end point sirve para ingresar como un usuario

```javascript
//Example body en caso de que algun dato este mal se va enviar un error 
// En caso de que todo este bien se va enviar un token que luego se usara en el cabeceras de varios end Points
// El token se genera por cada ingreso que el usuario hace y  expira en 24h aproximadamente 
// si en la base de datos el Usuario es adm va tener que poner el rol = 1 en caso de ser un usuario el rol va ser =0 en caso de que el rol no concuerde con el de la base de datos va tirar un error que dira que el mismo no concuerda con el de la base de datos 

//Claro esta el token que genera es distinto para un usuario administrador que para uno que no lo es

       
  //Rol 1 = Administrador 
  //Rol 0 = Usuario

 {
        
        "username": "Admin",
        "password": "Admin",
        "email": "admin@gmail.com",
        "rol": "1",


        
        
 
}
```
---




## PEDIDOS

http://localhost:3000/api/pedidos/misPedidos GET: Esta ruta devuelve todos los pedidos que hizo el usuario, para ello hay que agregar el token en las cabeceras


```javascript
//Example Header

 {
        
        
        "user-token": "EL TOKEN QUE SE GENERA CUANDO SE HACE USO DE LA RUTA LOGIN"
        
        
 
}
```


http://localhost:3000/api/pedidos GET: Estar ruta requiere el TOKEN y requiere el rol de administrador que se aplica instantaneamente cuando se pone el token



```javascript
//Example Header

 {
        
        
        "user-token": "EL TOKEN QUE SE GENERA CUANDO SE HACE USO DE LA RUTA LOGIN"
        
        
 
}
```








http://localhost:3000/api/pedidos/carrito POST: Esta ruta requiere el TOKEN en la cabecera y en el body el pedido que desea hacer, siempre es conveniente primero usar esta ruta y luego la que viene a continuacion, primero se carga el carro



```javascript
//Example Header

 {
        
        
        "user-token": "EL TOKEN QUE SE GENERA CUANDO SE HACE USO DE LA RUTA LOGIN"
        
        
 
}
```




```javascript
//Example body

 {
        
        
        
        
        
        "platoId":1, // Este seria el id del plato que se quiere pedir 
        "tipoPago":"efectivo" // Este seria como desea pagarlo si en efectivo o que el medio de pago sea credito

        
 
}
```

http://localhost:3000/api/pedidos/enviar POST: Esta ruta se debe usar despues del carro para poder enviar lo que el carro tiene, simplemente se envia lo del carro, una ves que este tiene todos los requisitos


## Desarrollador 

- Ezequiel Rey - [eze.rey92@gmail.com]


[Volver al inicio](#Contenidos)
