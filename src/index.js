import React from "react";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter } from "react-router-dom"
import { createRoot } from 'react-dom/client';
import { ThemeProvider, AuthProvider, TaskProvider } from "./frontend/contexts";

// Call make Server
makeServer();
const root=createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <ThemeProvider>
      <AuthProvider>
        <TaskProvider>
          <App />
        </TaskProvider>
      </AuthProvider>
    </ThemeProvider>
  </BrowserRouter>
);
