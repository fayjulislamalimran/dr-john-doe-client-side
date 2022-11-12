import { RouterProvider } from "react-router-dom";
import "./App.css";
import router from "./Routers/Routes/Routes";

function App() {
  return (
    <div className="max-w-screen-xl mx-auto bg-blue-300">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
