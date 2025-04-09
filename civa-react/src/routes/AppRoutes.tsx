import { createBrowserRouter } from "react-router";
import BusesPage from "../views/BusesPage";
import { Home } from "../views/Home";
import { BusByIdPage } from "../views/BusByIdPage";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/bus",
        element: <BusesPage />,
    },
    {
        path: "/bus/:id",
        element: <BusByIdPage />,
    }
])