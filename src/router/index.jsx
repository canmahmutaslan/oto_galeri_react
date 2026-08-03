import {
    createBrowserRouter
} from "react-router-dom";

import Home from "../pages/Home";
import Vehicles from "../pages/Vehicles";
import VehicleDetail from "../pages/VehicleDetail";
import About from "../pages/About";
import Services from "../pages/Services";
import Contact from "../pages/Contact";
import NotFound from "../pages/NotFound";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home/>,
    },
    {
        path : "/araclar",
        element : <Vehicles/>
    },
    {
        path : "/arac/:id",
        element : <VehicleDetail/>
    },
    {
        path : "/hakkimizda",
        element : <About/>
    },
    {
        path : "/hizmetler",
        element : <Services/>
    },
    {
        path : "/iletisim",
        element : <Contact/>
    },
    {
        path : "*",
        element : <NotFound/>
    },
]);

export default router;