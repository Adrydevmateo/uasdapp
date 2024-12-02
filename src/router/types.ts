export enum Routes {
    PRINCIPAL = "/pagina-principal",
    ACCESO = "/acceso",
    INSCRIPCION = "/inscripcion",
    RECUPERACION = "/recuperacion",
    MENU = "/menu",
    NOTICIAS = "/noticias",
    MATERIAS = "/materias",
    PRESELECCION = "/preseleccion",
    DEUDA = "/deudas",
    SOLICITUDES = "/solicitudes",
    TAREAS = "/tareas",
    EVENTOS = "/eventos",
    VIDEOS = "/videos",
    ACERCA = "/acerca-de",
    SALIR = "/salir"
}

export interface Route {
    title: string,
    url: Routes,
    page: any,
    requiresAuth: boolean
}