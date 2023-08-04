import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  actionContacts,
  actionDestroy,
  actionEdit,
  actionRoot,
  loaderContacts,
  loaderRoot,
} from "./routes/functions";
import { Contact, Edit, ErrorPage, Home, Root } from "./routes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    loader: loaderRoot,
    action: actionRoot,
    children: [
      {
        errorElement: <ErrorPage />,
        children: [
          { index: true, element: <Home /> },
          {
            path: "contacts/:contactId",
            element: <Contact />,
            loader: loaderContacts,
            action: actionContacts,
          },
          {
            path: "contacts/:contactId/destroy",
            action: actionDestroy,
          },
          {
            path: "contacts/:contactId/edit",
            element: <Edit />,
            loader: loaderContacts,
            action: actionEdit,
          },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
