import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js"
let botonRegistro = document.getElementById("btn-registro")

botonRegistro.addEventListener("click", function(event) {

    let email = document.getElementById("email").value
    let password = document.getElementById("password").value

    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            // ...
            console.log("Usuario registrado")

        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
            console.log("Error al registrar usuario")
        });

    //limpiar campos
    document.getElementById("email").value = ""
    document.getElementById("password").value = ""

})