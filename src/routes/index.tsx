import React from "react";
import { Navigate } from "react-router-dom";
import Main from "../pages/Main";
import Error from "../pages/Error";

import users from "./users";

const routes = [
  {
    path: "/",
    element: <Main />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Navigate to="/users?tab=table&page=1" replace />,
      },
      users,
    ],
  },
];

export default routes;
