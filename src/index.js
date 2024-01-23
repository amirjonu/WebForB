import * as React from "react"; 
import { createRoot } from "react-dom/client";

import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
} from "react-router-dom";

import Navbar from "./components/Navbars";
import "./App.css";
import Home from "./routes/Home";
import About from "./routes/About";
import Contact from "./routes/Contact";
import Purchase from "./routes/Purchase";
import Appointment from "./routes/Appoitment";
import ErrorPage from "./routes/ErrorPage";
import Footer from "./components/Footer"



const AppLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>   
  );
};

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "purchase",
        element: <Purchase />,
      },
      {
        path: "appoitment",
        element: <Appointment />,
      },
    ],
  },

]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);