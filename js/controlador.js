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

//ver resumen de venta
let botonResumen = document.getElementById("btn-resumen")
botonResumen.addEventListener("click", function(event) {

    let contenedor = document.getElementById("verCarrito2")

    let modalVenta = new bootstrap.Modal(document.getElementById('verCarrito'))

    //borrar el contenido html de una sección
    contenedor.innerHTML = ""

    carrito.forEach(function(producto) {

        let fila = document.createElement("div")
        fila.classList.add("row")

        let columna1 = document.createElement("div")
        columna1.classList.add("col-12", "col-md-4")

        let columna2 = document.createElement("div")
        columna2.classList.add("col-12", "col-md-8")

        let foto = document.createElement("img")
        foto.src = producto.foto
        foto.classList.add("img-fluid", "w-100")

        let nombre = document.createElement("h5")
        nombre.textContent = "Nombre del producto: " + producto.nombre
        nombre.classList.add("text-center")

        let precio = document.createElement("h5")
        precio.textContent = "Valor unitario: " + producto.precio
        precio.classList.add("text-center")

        let cantidad = document.createElement("h5")
        cantidad.textContent = "Cantidad: " + producto.cantidad
        cantidad.classList.add("text-center")

        let subtotal = document.createElement("h5")
        subtotal.textContent = "Valor total: " + producto.cantidad * producto.precio
        subtotal.classList.add("text-center")

        columna1.appendChild(foto)
        fila.appendChild(columna1)
        fila.appendChild(columna2)
        contenedor.appendChild(fila)

        columna2.appendChild(nombre)
        columna2.appendChild(precio)
        columna2.appendChild(cantidad)
        columna2.appendChild(subtotal)
        contenedor.appendChild(fila)

    })

    modalVenta.show()

})