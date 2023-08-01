import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Root } from "./routes/root";
import { ErrorPage } from "./ErrorPage";
import { Contact } from "./routes/Contact";
import { Edit } from "./routes/Edit";
import {
  actionDestroy,
  actionEdit,
  actionRoot,
  loaderContacts,
  loaderRoot,
} from "./routes/functions";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    loader: loaderRoot,
    action: actionRoot,
    children: [
      {
        path: "contacts/:contactId",
        element: <Contact />,
        loader: loaderContacts,
      },
      {
        path: "contacts/:contactId/destroy",
        action: actionDestroy,
        errorElement: <div>Oops! There was an error.</div>,
      },
      {
        path: "contacts/:contactId/edit",
        element: <Edit />,
        loader: loaderContacts,
        action: actionEdit,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
