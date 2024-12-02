export interface Usuario {
    id: number,
    nombre: string,
    apellido: string,
    username: string,
    password: string,
    email: string,
    authToken: string
}

export interface CrearUsuarioRes {
    success: true,
    message: "Usuario creado exitosamente",
    data: null,
    error: null
}

export interface IniciarSesionRes {
    success: boolean,
    message: string,
    data: {
        id: 0,
        nombre: string,
        apellido: string,
        username: string,
        password: string,
        email: string,
        authToken: string, 
    },
    error: unknown
}