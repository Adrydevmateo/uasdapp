import { Route, Routes } from "./types";
import Principal from "../pages/principal/Principal";
import Acceso from "../pages/Acceso";
import Inscripcion from "../pages/Inscripcion";
import Recuperacion from "../pages/Recuperacion";
import Menu from "../pages/menu/Menu";
import Noticias from "../pages/menu/Noticias";
import Materias from "../pages/menu/Materias";
import Preseleccion from "../pages/menu/Preseleccion";
import Deudas from "../pages/menu/Deudas";
import Solicitudes from "../pages/menu/Solicitudes";
import Tareas from "../pages/menu/Tareas";
import Eventos from "../pages/menu/Eventos";
import Videos from "../pages/menu/Videos";
import Acerca from "../pages/menu/Acerca";
import Salir from "../pages/menu/Salir";

export const routes: Array<Route> = [
    {
        title: "Pagina Principal",
        url: Routes.PRINCIPAL,
        page: Principal
    },
    {
        title: "Acceso",
        url: Routes.ACCESO,
        page: Acceso
    },
    {
        title: "Inscripción",
        url: Routes.INSCRIPCION,
        page: Inscripcion
    },
    {
        title: "Recuperación de Cuenta",
        url: Routes.RECUPERACION,
        page: Recuperacion
    },
    {
        title: "Menu Principal",
        url: Routes.MENU,
        page: Menu
    },
    {
        title: "Noticias",
        url: Routes.NOTICIAS,
        page: Noticias
    },
    {
        title: "Mis Materias",
        url: Routes.MATERIAS,
        page: Materias
    },
    {
        title: "Preselección",
        url: Routes.PRESELECCION,
        page: Preseleccion
    },
    {
        title: "Deuda",
        url: Routes.DEUDA,
        page: Deudas
    },
    {
        title: "Solicitudes",
        url: Routes.SOLICITUDES,
        page: Solicitudes
    },
    {
        title: "Mis Tareas",
        url: Routes.TAREAS,
        page: Tareas
    },
    {
        title: "Eventos",
        url: Routes.EVENTOS,
        page: Eventos
    },
    {
        title: "Videos",
        url: Routes.VIDEOS,
        page: Videos
    },
    {
        title: "Acerda De",
        url: Routes.ACERCA,
        page: Acerca
    },
    {
        title: "Salir",
        url: Routes.SALIR,
        page: Salir
    },
]