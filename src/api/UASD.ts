import { Usuario } from "./types";

const url = "https://uasdapi.ia3x.com/"

interface CrearUsuarioRes {
    success: true,
    message: "Usuario creado exitosamente",
    data: null,
    error: null
}

// Headers { accept: "*/*", Authorization: token, "Content-Type": "application/json" }
function crearUsuario(usuario: Usuario) {
    fetch(url, {
        headers: {
            accept: "*/*",
            Authorization: "",
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            id: usuario.id,
            nombre: usuario.nombre,
            apellido: usuario.apellido,
            username: usuario.username,
            password: usuario.password,
            email: usuario.email,
            authToken: usuario.authToken
        })
    })
    .then((res) => res.json())
    .then((data: CrearUsuarioRes) => {
        console.log("@@ Create User Data: ", data);
    })
}