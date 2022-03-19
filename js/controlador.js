import { pintarTienda } from './llenadoTienda.js'
import { AmpliarInformacion } from './ampliarInfo.js'

pintarTienda()

//Ampliar
let contenedorTienda = document.getElementById("fila")
contenedorTienda.addEventListener("click", function(event) {
    AmpliarInformacion(event)
})