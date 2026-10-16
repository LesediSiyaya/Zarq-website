import { Navigate, type RouteObject } from "react-router";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Programmes from "./pages/Programmes";
import Digital from "./pages/Digital";
import GetInvolved from "./pages/GetInvolved";
import Partners from "./pages/Partners";
import Websites from "./pages/services/Websites";
import CipcRegistration from "./pages/services/CipcRegistration";
import CodingClasses from "./pages/services/CodingClasses";
import DigitalKindness from "./pages/services/DigitalKindness";
import Contact from "./pages/Contact";
import FAQ from "./pages/FAQ";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import NotFound from "./pages/NotFound";

// Shared by the browser router (App.tsx) and the build-time prerender (entry-server.tsx).
export const routes: RouteObject[] = [
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "about", Component: About },
      { path: "programmes", Component: Programmes },
      { path: "digital", Component: Digital },
      { path: "digital/websites", Component: Websites },
      { path: "digital/cipc-registration", Component: CipcRegistration },
      { path: "programmes/coding-classes", Component: CodingClasses },
      { path: "programmes/digital-kindness", Component: DigitalKindness },
      { path: "get-involved", Component: GetInvolved },
      { path: "partners", Component: Partners },
      { path: "contact", Component: Contact },
      { path: "faq", Component: FAQ },
      { path: "privacy", Component: Privacy },
      { path: "terms", Component: Terms },
      // Legacy URLs kept working after the restructure.
      { path: "programs", element: <Navigate to="/programmes" replace /> },
      { path: "services", element: <Navigate to="/digital" replace /> },
      { path: "hub", element: <Navigate to="/programmes#hub" replace /> },
      { path: "robotics", element: <Navigate to="/programmes#robotics" replace /> },
      { path: "impact", element: <Navigate to="/about#impact" replace /> },
      { path: "digital-kindness", element: <Navigate to="/programmes/digital-kindness" replace /> },
      { path: "*", Component: NotFound },
    ],
  },
];
