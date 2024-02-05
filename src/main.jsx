import "normalize.css";
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import App from './App';
import ProjectForm from "./pages/ProjectForm";


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="Admin" element={<ProjectForm />} />
      </Routes>
    </Router>
  </React.StrictMode>,
);

