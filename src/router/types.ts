export enum Routes {
    PRINCIPAL = "/pagina-principal",
    ACCESO = "/acceso",
    INSCRIPCION = "/inscripcion",
    RECUPERACION = "/recuperacion",
    MENU = "/menu",
    NOTICIAS = "/menu/noticias",
    MATERIAS = "/menu/materias",
    PRESELECCION = "/menu/preseleccion",
    DEUDA = "/menu/deuda",
    SOLICITUDES = "/menu/deudas",
    TAREAS = "/menu/tareas",
    EVENTOS = "/menu/eventos",
    VIDEOS = "/menu/videos",
    ACERCA = "/menu/acerca-de",
    SALIR = "/menu/salir"
}

export interface Route {
    title: string,
    url: Routes,
    page: any
}