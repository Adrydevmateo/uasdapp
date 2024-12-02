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

export interface APIRes<T> {
    success: boolean,
    message: string,
    error: unknown,
    data: T
}

export interface IniciarSesionData {
    id: 0,
    nombre: string,
    apellido: string,
    username: string,
    password: string,
    email: string,
    authToken: string,
}

export interface ObtenerNoticiasData {
    id: "20680",
    title: "Inauguran torneo Interinstitucional de Softbol NAVI-UASD",
    img: "https://uasd.edu.do/wp-content/uploads/RECONNOCIMIENTO.jpg",
    url: "https://uasd.edu.do/inauguran-torneo-interinstitucional-de-softbol-navi-uasd/",
    date: "diciembre 2, 2024"
}