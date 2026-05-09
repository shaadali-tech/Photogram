import { Button } from "@/components/ui/button";
import { RouterProvider } from "react-router-dom";
import router from "./routesapp";

function App() {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center">
      <Button>Click me</Button>
      <h1 className="text-4xl font-bold">Hello world</h1>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
