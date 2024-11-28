type EstadoSolicitud = "pendiente" | "finalizada" | "rechazada"

export interface Asignatura {
    nombre: string,
    hora: string,
    aula: string
}

export interface Solicitud {
    estado: EstadoSolicitud
    descripcion: string
}

export interface Tarea {
    nombre: string,
    fechaFinalizacionEntrega: string,
    Asignatura: string
}

export interface Evento {
    fecha: string,
    lugar: string,
    descripcion: string
}

export interface Desarrollador {
    nombre: string,
    matricula: string,
    foto: string,
    mensaje: string
}