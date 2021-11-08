import About from "../pages/About";
import Login from "../pages/Login";
import Notes from "../pages/Notes";
import NotFound from "../pages/NotFound";
import Training from "../pages/Training";


export const privateRoutes = [
    {path: '/about', component: About, exect:true},
    {path: '/notes', component: Notes, exect:true},
    {path: '/notfound', component: NotFound, exect:true},
    {path: '/training', component: Training, exect:true},
]

export const pablicRoutes = [
    {path: '/login', component: Login, exect:true},
]