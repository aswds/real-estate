import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import LandingPage from "../pages/LandingPage";

const NavbarLayout = () => {
  return (
    <>
      <nav>
        <Navbar />
      </nav>
      <div className="mx-5">
        <Outlet />
      </div>
    </>
  );
};

export const router = createBrowserRouter([
  {
    element: <NavbarLayout />,
    children: [
      {
        element: <LandingPage />,
        path: "/",
      },
    ],
  },
]);
