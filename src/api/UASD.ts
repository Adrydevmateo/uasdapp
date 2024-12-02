import { Preferences } from '@capacitor/preferences';
import { CrearUsuarioRes, IniciarSesionRes, Usuario } from "./types";

const url = "https://uasdapi.ia3x.com"

// Headers { accept: "*/*", Authorization: token, "Content-Type": "application/json" }
function crearUsuario(usuario: Usuario) {
    fetch(url, {
        method: "POST",
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

export async function iniciarSesion(usuario: Pick<Usuario, "username" | "password">) {
    try {
        const res = await fetch('/api/login', {
            method: "POST",
            headers: {
                'accept': '*/*',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username: usuario.username,
                password: usuario.password,
            }),
        })

        if (!res.ok) {
            throw new Error(`HTTP error! Status: ${res.status}`)
        }
        
        const json = await res.json() as IniciarSesionRes

        if(json.success) {
            await Preferences.set({ key: 'jwt', value: json.data.authToken });
        }

        return {
            aprobado: json.success,
            mensajeDeError: json.error
        }
    } catch (error) {
        console.error('Error:', error);
    }
}