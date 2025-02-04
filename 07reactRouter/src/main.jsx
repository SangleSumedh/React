import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Layout from "./Layout.jsx";
import Home from "./components/Home/Home.jsx";
import About from "./components/About/About.jsx";
import Contact from "./components/Contact/Contact.jsx";
import User from "./components/User/User.jsx";
import Github, {githubInfoLoader} from "./components/Github/Github.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Layout />}>
        <Route path="" element={<Home />} />
        <Route path="about" element={<About />}></Route>
        <Route path="contact" element={<Contact />} />
        <Route path="user/" element={<User />}>
          <Route path=":userid" element={<User />}></Route>
        </Route>
        <Route 
        path="github" 
        element={<Github />}
        loader={githubInfoLoader}
        />
        <Route path="*" element={<div className="bg-gray-700 text-3xl flex justify-center items-center text-red-600 min-h-screen">Not Found!</div>}></Route>
      </Route>
    </>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
