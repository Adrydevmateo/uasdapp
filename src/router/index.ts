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
        page: Principal,
        requiresAuth: false
    },
    {
        title: "Acceso",
        url: Routes.ACCESO,
        page: Acceso,
        requiresAuth: false
    },
    {
        title: "Inscripción",
        url: Routes.INSCRIPCION,
        page: Inscripcion,
        requiresAuth: false
    },
    {
        title: "Recuperación de Cuenta",
        url: Routes.RECUPERACION,
        page: Recuperacion,
        requiresAuth: false
    },
    {
        title: "Menu Principal",
        url: Routes.MENU,
        page: Menu,
        requiresAuth: true
    },
    {
        title: "Noticias",
        url: Routes.NOTICIAS,
        page: Noticias,
        requiresAuth: true
    },
    {
        title: "Mis Materias",
        url: Routes.MATERIAS,
        page: Materias,
        requiresAuth: true
    },
    {
        title: "Preselección",
        url: Routes.PRESELECCION,
        page: Preseleccion,
        requiresAuth: true
    },
    {
        title: "Deudas",
        url: Routes.DEUDA,
        page: Deudas,
        requiresAuth: true
    },
    {
        title: "Solicitudes",
        url: Routes.SOLICITUDES,
        page: Solicitudes,
        requiresAuth: true
    },
    {
        title: "Mis Tareas",
        url: Routes.TAREAS,
        page: Tareas,
        requiresAuth: true
    },
    {
        title: "Eventos",
        url: Routes.EVENTOS,
        page: Eventos,
        requiresAuth: true
    },
    {
        title: "Videos",
        url: Routes.VIDEOS,
        page: Videos,
        requiresAuth: true
    },
    {
        title: "Acerda De",
        url: Routes.ACERCA,
        page: Acerca,
        requiresAuth: true
    },
    {
        title: "Salir",
        url: Routes.SALIR,
        page: Salir
    },
]