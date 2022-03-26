export function pintarTienda() {

    let productosDB = [
        { foto: 'https://tiendaverde.com.co/1498-large_default/camiseta-local-nino-nike-2022-nino-competencia-nike-2021.jpg', nombre: "Camiseta local niño nike 2022 competencia nike 2022", precio: 219950, descripcion: "La pasión la llevas puesta Esta camiseta ha sido Inspirada por las tendencias europeas de fútbol, manteniendo los colores insignia del equipo que son el verde y el blanco, y las clásicas rayas verticales. Nuestro escudo está cuidadosamente ubicado cerca del corazón ¡Dónde llevamos la pasión!" },

        { foto: 'https://tiendaverde.com.co/1498-large_default/camiseta-local-nino-nike-2022-nino-competencia-nike-2021.jpg', nombre: "Camiseta local hombre Nike 2022 Hombre Competencia Nike 2022", precio: 249950, descripcion: "La pasión la llevas puesta Esta camiseta ha sido Inspirada por las tendencias europeas de fútbol, manteniendo los colores insignia del equipo que son el verde y el blanco, y las clásicas rayas verticales. Nuestro escudo está cuidadosamente ubicado cerca del corazón ¡Dónde llevamos la pasión!" },

        { foto: 'https://tiendaverde.com.co/1498-large_default/camiseta-local-nino-nike-2022-nino-competencia-nike-2021.jpg', nombre: "Camiseta local dama Nike 2022 Dama Competencia Nike 2022", precio: 229950, descripcion: "La pasión la llevas puesta Esta camiseta ha sido Inspirada por las tendencias europeas de fútbol, manteniendo los colores insignia del equipo que son el verde y el blanco, y las clásicas rayas verticales. Nuestro escudo está cuidadosamente ubicado cerca del corazón ¡Dónde llevamos la pasión!" },

        { foto: 'https://tiendaverde.com.co/1488-large_default/camiseta-alterna-hombre-nike-2022-competencia-nike-2022.jpg', nombre: "Camiseta alterna hombre Nike 2022 Competencia Nike 2022", precio: 249950, descripcion: "La pasión la llevas puesta Esta camiseta ha sido Inspirada por las tendencias europeas de fútbol. Nuestro escudo está cuidadosamente ubicado cerca del corazón ¡Dónde llevamos la pasión! Nuestras camisetas son: NIKE La tecnología Nike Dry son dos capas de poliester que absorben y evaporan el" },

        { foto: 'https://tiendaverde.com.co/1491-large_default/camiseta-3kit-hombre-nike-2022-competencia-nike-2022.jpg', nombre: "Camiseta 3kit hombre Nike 2022 Competencia Nike 2022", precio: 249950, descripcion: "La pasión la llevas puesta Esta camiseta ha sido Inspirada por las tendencias europeas de fútbol. Nuestro escudo está cuidadosamente ubicado cerca del corazón ¡Dónde llevamos la pasión! Nuestras camisetas son: NIKE La tecnología Nike Dry son dos capas de poliester que absorben y evaporan el" },

        { foto: 'https://tiendaverde.com.co/1412-large_default/buzo-verde-oscuro-atl-nal-doradas-moda-atletico-nacional-2021.jpg', nombre: "Buzo verde oscuro atl/nal doradas Moda Atlético Nacional 2021", precio: 134900, descripcion: "Detrás de un gran equipo SIEMPRE hay una gran hinchada. Nuestro amor es inmortal, por eso lo llévamos puesto en todas partes. Llévalo contigo en este artículo. Todo lo que compras en www.tiendaverde.com.co es original ¿Cómo cuidarlas para que sean inmortales como tu pasión" },

        { foto: 'https://tiendaverde.com.co/1414-large_default/buzo-verde-oscuro-chompa-escudo-moda-atletico-nacional-2021.jpg', nombre: "Buzo verde oscuro chompa escudo Moda Atlético Nacional 2021", precio: 134900, descripcion: "Detrás de un gran equipo SIEMPRE hay una gran hinchada. Nuestro amor es inmortal, por eso lo llévamos puesto en todas partes. Llévalo contigo en este artículo. Todo lo que compras en www.tiendaverde.com.co es original ¿Cómo cuidarlas para que sean inmortales como tu pasión" },

        { foto: 'https://tiendaverde.com.co/1492-large_default/chaqueta-presentacion-verde-blanca-nike-2022-presentacion-nike-2022.jpg', nombre: "Chaqueta presentación verde/blanca Nike 2022", precio: 274950, descripcion: "La pasión la llevas puesta Esta camiseta ha sido Inspirada por las tendencias europeas de fútbol. Nuestro escudo está cuidadosamente ubicado cerca del corazón ¡Dónde llevamos la pasión! Nuestras camisetas son: NIKE La tecnología Nike Dry son dos capas de poliester que absorben y evaporan" },

        { foto: 'https://tiendaverde.com.co/1287-large_default/gorra-core-negra-atletico-nacional-atletico-nacional-2021.jpg', nombre: "Gorra core negra atlético nacional Atlético Nacional 2021", precio: 74900, descripcion: "Detrás de un gran equipo SIEMPRE hay una gran hinchada. Nuestro amor es inmortal, por eso lo llévamos puesto en todas partes. Llévalo contigo en este artículo. Todo lo que compras en www.tiendaverde.com.co es original ¿Cómo cuidarlas para que sean inmortales como tu pasión" },

        { foto: 'https://tiendaverde.com.co/1495-large_default/camiseta-entreno-verde-nike-2022-entrenamiento-nike-2022.jpg', nombre: "Camiseta verde Entrenamiento Nike 2022", precio: 169950, descripcion: "La pasión la llevas puesta Esta camiseta ha sido Inspirada por las tendencias europeas de fútbol. Nuestro escudo está cuidadosamente ubicado cerca del corazón ¡Dónde llevamos la pasión! Nuestras camisetas son: NIKE La tecnología Nike Dry son dos capas de poliester que absorben y evaporan el" }
    ]

    //creo una referencia al componente padre
    //creo una variable para almacenar la base
    //sobre la cual voy a pintar

    let fila = document.getElementById("fila")

    //Recorrer un arreglo con js
    productosDB.forEach(function(producto) {
        //paso 1: crear estructura
        //creo columna
        let columna = document.createElement("div")
        columna.classList.add("col")

        //creo la tarjeta
        let tarjeta = document.createElement("div")
        tarjeta.classList.add("card", "h-100")

        //creo la foto
        let foto = document.createElement("img")
        foto.classList.add("card-img-top")
        foto.src = producto.foto

        //Nombre del producto
        let nombreP = document.createElement("h4")
        nombreP.classList.add("mx-auto", "text-center")
        nombreP.textContent = producto.nombre

        //Precio del producto
        let precioP = document.createElement("h6")
        precioP.classList.add("mx-auto", "text-center")
        precioP.textContent = producto.precio

        //Descripcion del producto
        let descripcionP = document.createElement("p")
        descripcionP.classList.add("mx-auto", "text-center", "d-none", "d-sm-none")
        descripcionP.textContent = producto.descripcion


        //Creando un boton
        let boton = document.createElement("button")
        boton.setAttribute("type", "button")
        boton.classList.add("btn", "btn-success", "mx-4", "my-2")
        boton.textContent = "Ver producto"

        //paso 2: ordenar la estructura
        tarjeta.appendChild(foto)
        columna.appendChild(tarjeta)
        fila.appendChild(columna)
        tarjeta.appendChild(nombreP)
        tarjeta.appendChild(precioP)
        tarjeta.appendChild(descripcionP)
        tarjeta.appendChild(boton)

    })
}