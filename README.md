# Delilah Restó




> Estas son las instrucciones de la aplicacion de pedidos Online (Delilah Restó)

---

### Contenidos
Puede hacer click sobre los contenidos para para hacer una busqueda mas rapida

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

#### Instalacion

Abrir una terminal he instalar las siguientes dependencias en caso de que no se encuentren instaladas de manera correcta

- npm install nodemon
- npm install express
- npm install sequelize
- npm install cors
- npm install jwt-simple
- npm install mysql2

Tambien debe descargar he instalar XAMPP para poder inicializar la base de datos como sugerencia puede hacerlo desde "https://www.apachefriends.org/es/download.html"

#### Base de datos

En la carpeta raiz tiene una base de datos creada con usuarios y pedidos, si no desea usar esa base y por lo contrario piensa comenzar una desde cero, puede hacerlo la unica condicion para hacer esto es que el nombre la base a crear debe ser "delilah_resto"
y la direccion en donde debe hacer esto es el servidor local "http://localhost/phpmyadmin".

¿Como iniciar el servidor?: puede hacerlo de manera sencilla con nodemon simplemente debe poner en la terminal nodemon con eso se incializa correctamente el nodemon, claro esta desde su editor de codigo va poder ver las sentencias que se van a ir ejecutando.


## End points


PRODUCTOS : 
http://localhost:3000/api/productos GET Esta ruta refleja todos los productos que se encuentran en la base de datos, y devuelve un json.

Claro esta el objeto que retorna va ser del tipo json
```javascript
const exampleReturn = {
        id: 1,
        nombre: "Hamburguesa",
        descripcion: "Hamburguesa completa",
        precio:850,
        createdAt: "2021-05-01T01:07:50.000Z",
        updatedAt: "2021-05-01T01:07:50.000Z"
  

}
```








## Desarrollador 

- Ezequiel Rey - [eze.rey92@gmail.com]


[Volver al inicio](#Contenidos)
