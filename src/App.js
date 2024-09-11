import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/Home";

const router = createBrowserRouter([{ path: "/", element: <HomePage /> }]);

function App() {
  return (
    <RouterProvider router={router}>
      <h1>My React App</h1>
    </RouterProvider>
  );
}

export default App;
