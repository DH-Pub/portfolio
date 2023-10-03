import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import { WEBLINKS } from "./const/WebLinks";
import HomePage from "./pages/HomePage";
import Layout from "./layout/Layout";

const router = createBrowserRouter([
  {
    path: WEBLINKS.HOME,
    element: <Layout />,
    children: [
      {
        path: WEBLINKS.HOME,
        element: <HomePage />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
