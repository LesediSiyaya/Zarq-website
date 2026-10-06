import { createBrowserRouter, Navigate } from "react-router";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Programmes from "./pages/Programmes";
import Digital from "./pages/Digital";
import Impact from "./pages/Impact";
import GetInvolved from "./pages/GetInvolved";
import Contact from "./pages/Contact";
import FAQ from "./pages/FAQ";
import Privacy from "./pages/Privacy";
import NotFound from "./pages/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "about", Component: About },
      { path: "programmes", Component: Programmes },
      { path: "digital", Component: Digital },
      { path: "impact", Component: Impact },
      { path: "get-involved", Component: GetInvolved },
      { path: "contact", Component: Contact },
      { path: "faq", Component: FAQ },
      { path: "privacy", Component: Privacy },
      // Legacy URLs kept working after the restructure.
      { path: "programs", element: <Navigate to="/programmes" replace /> },
      { path: "services", element: <Navigate to="/digital" replace /> },
      { path: "hub", element: <Navigate to="/programmes#hub" replace /> },
      { path: "robotics", element: <Navigate to="/programmes#robotics" replace /> },
      { path: "*", Component: NotFound },
    ],
  },
]);
