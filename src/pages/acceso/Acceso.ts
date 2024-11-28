export interface Usuario {
    id: number,
    nombre: string,
    apellido: string,
    username: string,
    password: string,
    email: string,
    authToken: string
}

export interface FormResetPassword {
    usuario: string,
    email: string
}