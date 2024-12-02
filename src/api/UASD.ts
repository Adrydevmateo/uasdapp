import { Preferences } from '@capacitor/preferences';
import { APIRes, CrearUsuarioRes, Deuda, Evento, IniciarSesionData, IniciarSesionRes, Materia, ObtenerNoticiasData, Usuario } from "./types";

const url = "https://uasdapi.ia3x.com"

// Headers { accept: "*/*", Authorization: token, "Content-Type": "application/json" }
export function crearUsuario(usuario: Usuario) {
    fetch("/api/crear_usuario", {
        method: "POST",
        headers: {
            accept: "*/*",
            Authorization: "",
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            id: Math.floor(Math.random() * 10000),
            nombre: usuario.nombre,
            apellido: usuario.apellido,
            username: usuario.username,
            password: usuario.password,
            email: usuario.email,
            authToken: `jEdXqPe0xY0P8DVRzEg99wVU5IHKhFRXovhsicDqxIlzBk7PWaRwFVvPkttsC2qy${crypto.randomUUID()}`
        })
    })
        .then((res) => res.json())
        .then((data: CrearUsuarioRes) => {
            console.log("@@ Create User Data: ", data);
        })
}

export async function cambiarContrasena({usuario, email}) {
    try {
        const { value: jwt } = await Preferences.get({ key: 'jwt' })
        if (!jwt) {
            throw new Error('User not authenticated')
        }

        const res = await fetch('/api/reset_password', {
            method: "POST",
            headers: {
                'accept': '*/*',
                'Content-Type': 'application/json',
                'Authorization': jwt
            },
            body: JSON.stringify({
                usuario,
                email
            }),
        })

        if (!res.ok) {
            throw new Error(`HTTP error! Status: ${res.status}`)
        }

        const json = await res.json()
        console.log("@@ Res: ", json);

        return {
            aprobado: json.success,
            msg: json.message 
        }
    } catch (error) {
        console.error('Error:', error);
    }
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

        const json = await res.json() as APIRes<IniciarSesionData>

        if (json.success) {
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

export async function obtenerNoticias() {
    try {
        const { value: jwt } = await Preferences.get({ key: 'jwt' })
        if (!jwt) {
            throw new Error('User not authenticated')
        }

        const res = await fetch('/api/noticias', {
            headers: {
                'accept': '*/*',
                'Authorization': jwt
            },
        })

        if (!res.ok) {
            throw new Error(`HTTP error! Status: ${res.status}`)
        }

        const json = await res.json() as APIRes<Array<ObtenerNoticiasData>>
        console.log("Data: ", json);

        return json.data
    } catch (error) {
        console.error('Error:', error);
    }
}

export async function obtenerEventos() {
    try {
        const { value: jwt } = await Preferences.get({ key: 'jwt' })
        if (!jwt) {
            throw new Error('User not authenticated')
        }

        const res = await fetch('/api/eventos', {
            headers: {
                'accept': '*/*',
                'Authorization': jwt
            },
        })

        if (!res.ok) {
            throw new Error(`HTTP error! Status: ${res.status}`)
        }

        const json = await res.json() as Array<Evento>
        console.log("Data: ", json);

        return json
    } catch (error) {
        console.error('Error:', error);
    }
}

export async function obtenerDeudas() {
    try {
        const { value: jwt } = await Preferences.get({ key: 'jwt' })
        if (!jwt) {
            throw new Error('User not authenticated')
        }

        const res = await fetch('/api/deudas', {
            headers: {
                'accept': '*/*',
                'Authorization': jwt
            },
        })

        if (!res.ok) {
            throw new Error(`HTTP error! Status: ${res.status}`)
        }

        const json = await res.json() as Array<Deuda>
        console.log("Data: ", json);

        return json
    } catch (error) {
        console.error('Error:', error);
    }
}

export async function obtenerVideos() {
    try {
        const { value: jwt } = await Preferences.get({ key: 'jwt' })
        if (!jwt) {
            throw new Error('User not authenticated')
        }

        const res = await fetch('/api/videos', {
            headers: {
                'accept': '*/*',
                'Authorization': jwt
            },
        })

        if (!res.ok) {
            throw new Error(`HTTP error! Status: ${res.status}`)
        }

        const json = await res.json() as Array<{ id: number, url: string }>
        console.log("Data: ", json);

        return json
    } catch (error) {
        console.error('Error:', error);
    }
}

export async function obtenerMaterias() {
    try {
        const { value: jwt } = await Preferences.get({ key: 'jwt' })
        if (!jwt) {
            throw new Error('User not authenticated')
        }

        const res = await fetch('/api/materias_disponibles', {
            headers: {
                'accept': '*/*',
                'Authorization': jwt
            },
        })

        if (!res.ok) {
            throw new Error(`HTTP error! Status: ${res.status}`)
        }

        const json = await res.json() as Array<Materia>
        console.log("Obtener materias: ", json);

        return json
    } catch (error) {
        console.error('Error:', error);
    }
}

export async function preseleccionarMateria(codigo: string) {
    try {
        const { value: jwt } = await Preferences.get({ key: 'jwt' })
        if (!jwt) {
            throw new Error('User not authenticated')
        }

        const res = await fetch('/api/preseleccionar_materia', {
            method: "POST",
            headers: {
                'accept': '*/*',
                'Content-Type': 'application/json',
                'Authorization': jwt
            },
            body: JSON.stringify(codigo),
        })

        if (!res.ok) {
            throw new Error(`HTTP error! Status: ${res.status}`)
        }

        const json = await res.json()
        console.log("@@ Res: ", json);

        return {
            aprobado: json.success,
        }
    } catch (error) {
        console.error('Error:', error);
    }
}

export async function cancelarPreseleccionMateria(codigo: string) {
    try {
        const { value: jwt } = await Preferences.get({ key: 'jwt' })
        if (!jwt) {
            throw new Error('User not authenticated')
        }

        const res = await fetch('/api/cancelar_preseleccion_materia', {
            method: "POST",
            headers: {
                'accept': '*/*',
                'Content-Type': 'application/json',
                'Authorization': jwt
            },
            body: JSON.stringify(codigo),
        })

        if (!res.ok) {
            throw new Error(`HTTP error! Status: ${res.status}`)
        }

        const json = await res.json()
        console.log("@@ Res: ", json);

        return {
            aprobado: json.success,
        }
    } catch (error) {
        console.error('Error:', error);
    }
}

export async function obtenerPreseleccion() {
    try {
        const { value: jwt } = await Preferences.get({ key: 'jwt' })
        if (!jwt) {
            throw new Error('User not authenticated')
        }

        const res = await fetch('/api/ver_preseleccion', {
            headers: {
                'accept': '*/*',
                'Authorization': jwt
            },
        })

        if (!res.ok) {
            throw new Error(`HTTP error! Status: ${res.status}`)
        }

        const json = await res.json()
        console.log("Obtener Pre: ", json);

        return json.data
    } catch (error) {
        console.error('Error:', error);
    }
}

export async function obtenerTareas() {
    try {
        const { value: jwt } = await Preferences.get({ key: 'jwt' })
        if (!jwt) {
            throw new Error('User not authenticated')
        }

        const res = await fetch('/api/tareas', {
            headers: {
                'accept': '*/*',
                'Authorization': jwt
            },
        })

        if (!res.ok) {
            throw new Error(`HTTP error! Status: ${res.status}`)
        }

        const json = await res.json()
        console.log("Obtener Tareas: ", json);

        return json
    } catch (error) {
        console.error('Error:', error);
    }
}

export async function crearSolicitud({tipo, descripcion}) {
    try {
        const { value: jwt } = await Preferences.get({ key: 'jwt' })
        if (!jwt) {
            throw new Error('User not authenticated')
        }

        const res = await fetch('/api/crear_solicitud', {
            method: "POST",
            headers: {
                'accept': '*/*',
                'Content-Type': 'application/json',
                'Authorization': jwt
            },
            body: JSON.stringify({
                tipo,
                descripcion
            }),
        })

        if (!res.ok) {
            throw new Error(`HTTP error! Status: ${res.status}`)
        }

        const json = await res.json()

        return {
            aprobado: json.success,
            msg: json.message
        }
    } catch (error) {
        console.error('Error:', error);
    }
}

export async function obtenerSolicitudes() {
    try {
        const { value: jwt } = await Preferences.get({ key: 'jwt' })
        if (!jwt) {
            throw new Error('User not authenticated')
        }

        const res = await fetch('/api/mis_solicitudes', {
            headers: {
                'accept': '*/*',
                'Authorization': jwt
            },
        })

        if (!res.ok) {
            throw new Error(`HTTP error! Status: ${res.status}`)
        }

        const json = await res.json()

        return json.data
    } catch (error) {
        console.error('Error:', error);
    }
}