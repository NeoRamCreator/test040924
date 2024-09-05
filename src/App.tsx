import React, { useEffect, useState } from "react";
import "./App.css";
import {
  createBrowserRouter,
  createHashRouter,
  RouterProvider,
} from "react-router-dom";

import routes from "./routes";

function App() {
  const [route, setRoute] = useState<any>(null);
  useEffect(() => {
    setRoute(createBrowserRouter(routes));
    // setRoute(createHashRouter(routes));
  }, []);

  if (route) {
    return <RouterProvider router={route} />;
  } else {
    return <h1>Роут не грузит</h1>;
  }
}

export default App;
