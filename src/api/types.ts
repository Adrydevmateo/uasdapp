export interface Usuario {
    id: number,
    nombre: string,
    apellido: string,
    username: string,
    password: string,
    email: string,
    authToken: string
}

export interface Evento {
    id: number,
    titulo: string,
    descripcion: string,
    fechaEvento: string,
    lugar: string,
    coordenadas: string
}

export interface Deuda {
    "id": number,
    "usuarioId": number,
    "monto": number,
    "pagada": boolean,
    "fechaActualizacion": string
  }

export interface CrearUsuarioRes {
    success: true,
    message: string,
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
    id: number,
    title: string,
    img: string,
    url: string,
    date: string
}