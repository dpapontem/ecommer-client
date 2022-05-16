import React from "react";

/* import Admin from "./pages/Admin"
import SingIn from "./pages/Admin/SignIn";
import Home from "./pages/Home"
import Contact from "./pages/Contact" */


import { BrowserRouter as Router, Route ,Routes} from "react-router-dom";
import routes from "../src/config/routes"

import "./App.scss";

export default function App() {
    
  return (

    <Router className="App">
        <Routes>
            {routes.map((route,index)=>(
                
                <Route
                key={index}
                path={route.path}
                element={
                    <route.layout>
                        <route.component></route.component>                           
                        
                    </route.layout>
                }
                />
            ))}
        </Routes>
    </Router>

/* prop son las propiedades del layout */
    /* <React.Fragment>
        <Router>
            {routes.map((route, index) =>(
                <AdminSubRoutesViews key={index}{...route}></AdminSubRoutesViews>
            ))}
        </Router>
    </React.Fragment> */
    

    /* <React.Fragment>
        <Admin></Admin>
        <SingIn></SingIn>
        <Home></Home>
        <Contact></Contact>
    </React.Fragment> */
    

    
        
        /* <BrowserRouter>

        <Link to="/">Home</Link>
        <br />
        <Link to="/contact">Contact</Link>
        <br />
        <Link to="/users">Users</Link>
        <br />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="contact" element={<Contact />} />
            <Route path="users" element={<Users />} />
            <Route path="*" element={<NotFound />} />


        </Routes>
    </BrowserRouter> */
  );
};

/* function AdminSubRoutesViews(route){
    console.log(route);
    return true;
} */

/* Creación de componentes */

/* function Home(){
    return <h2>Component Home works!</h2>
}


function Contact(){
    return <h2>Component Contact works!</h2>
}


function Users(){
    return <h2>Component Users works!</h2>
}

function NotFound(){
    return <h2>Component not found!</h2>
} */



