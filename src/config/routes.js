import LayoutAdmin from "../layouts/LayoutAdmin";
import LayoutBasic from "../layouts/LayoutBasic";

/* Paginas del administrador */
import AdminHome from "../pages/Admin";
import AdminSingIn from "../pages/Admin/SignIn";

import AdminPagUno from "../pages/Admin/PagUno";
import AdminPagDos from "../pages/Admin/PagDos";
import AdminPagTres from "../pages/Admin/PagTres";
/* Pagina nonFund */
import NotFound from "../pages/NotFound"
import Home from "../pages/Home"
import Contact from "../pages/Contact"
/* Arreglo de rutas disponibles para el administrador */
const routesAdmin = [
  {
    /* Para ingresar al home del admin sera: http://localhost:3000/admin */
    path: "/admin",
    layout:LayoutAdmin,
    component: AdminHome,
    //exact: true
  },
  {
    /* Para ingresar al home del admin sera: http://localhost:3000/login */
    path: "/admin/login",
    layout:LayoutAdmin,
    component: AdminSingIn,
    //exact: true
  },
  {
    /* Para ingresar al home del admin sera: http://localhost:3000/login */
    path: "/admin/componente1",
    layout:LayoutAdmin,
    component: AdminPagUno,
    //exact: true
  },
  {
    /* Para ingresar al home del admin sera: http://localhost:3000/login */
    path: "/admin/componente2",
    layout:LayoutAdmin,
    component: AdminPagDos,
    //exact: true
  },
  {
    /* Para ingresar al home del admin sera: http://localhost:3000/login */
    path: "/admin/componente3",
    layout:LayoutAdmin,
    component: AdminPagTres,
    //exact: true
  }
  
];

/* Rutas para home y notfound */
const routesClient=[

  


  {
    /* Para ingresar al home del admin sera: http://localhost:3000/ */
    path: "/",
    layout:LayoutBasic,
    component:Home,
    //exact: true
  }
];

const routesFound=[
  {
    /* Para ingresar al home del admin sera: http://localhost:3000/quelquechoses */
    path: "/*",
    layout:LayoutBasic,
    component:NotFound,
    //exact: true
  }

];


const routes = [...routesAdmin, ...routesClient,...routesFound];
export default routes;



