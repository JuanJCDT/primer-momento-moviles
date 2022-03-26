import { pintarTienda } from './llenadoTienda.js'
import { AmpliarInformacion } from './ampliarInfo.js'

pintarTienda()

//Crear el objeto vacio para almacenar el producto
let producto = {}

//Ampliar
let contenedorTienda = document.getElementById("fila")
contenedorTienda.addEventListener("click", function(event) {
    producto = AmpliarInformacion(event)
})

//Añadir al carrito
let carrito = []

let botonCarrito = document.getElementById("btn-add")
botonCarrito.addEventListener("click", function(event) {
    //Capturar cantidad de productos
    let cantidad = document.getElementById("cantidad").value

    //limpiar campo cantidad
    document.getElementById("cantidad").value = "1"

    //Agrego la cantida al objeto producto
    producto.cantidad = cantidad

    //Agregar el producto al carrito
    carrito.push(producto)

    //Calcula el total
    let totalC = 0
    carrito.forEach(function(producto) {
        totalC = totalC + Number(producto.cantidad)
    });

    let capsula = document.getElementById("capsula")
    capsula.textContent = totalC
    capsula.classList.remove("invisible")
})

let limpiarcarrito = document.getElementById("limpiar")
limpiarcarrito.addEventListener("click", function(event) {
    carrito = []
    let capsula = document.getElementById("capsula")
    capsula.textContent = 0
    capsula.classList.add("invisible")
})