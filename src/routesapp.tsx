import { createBrowserRouter } from "react-router-dom";
import Login from "./Pages/Login";
import Error from "./Pages/Error";
import Signup from "./Pages/Signup";
import Home from "./Pages/Home";
import Profile from "./Pages/Profile";
import CreatePost from "./Pages/Createpost";
import Photos from "./Pages/Photos";
import Protectedroutes from "./components/Protectedroutes";

export const router = createBrowserRouter([
  {
    element: <Protectedroutes />,
    children: [
      {
        path: "/",
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
    ],
  },

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
]);

export default router;
