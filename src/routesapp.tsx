import { createBrowserRouter } from "react-router-dom";
import Login from "../src/Pages/Login";
import Error from "../src/Pages/Error";
import Signup from "../src/Pages/Signup";
import Home from "../src/Pages/Home";
import Profile from "../src/Pages/Profile";
import CreatePost from "../src/Pages/CreatePost";
import Photos from "../src/Pages/Photos";

export const router = createBrowserRouter([
  {
    path: "/Login",
    element: <Login />,
    errorElement: <Error />,
  },
  {
    path: "/Signup",
    element: <Signup />,
    errorElement: <Error />,
  },
  {
    path: "/Home",
    element: <Home />,
    errorElement: <Error />,
  },
  {
    path: "/Profile",
    element: <Profile />,
    errorElement: <Error />,
  },
  {
    path: "/CreatePost",
    element: <CreatePost />,
    errorElement: <Error />,
  },
  {
    path: "/Photos",
    element: <Photos />,
    errorElement: <Error />,
  },
]);
