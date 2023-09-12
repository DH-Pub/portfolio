import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import { WEBLINKS } from "./const/WebLinks";
import HomePage from "./pages/HomePage";

const router = createBrowserRouter([
  {
    path: WEBLINKS.HOME,
    element: <HomePage />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
