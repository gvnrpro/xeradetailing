
import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Remove unnecessary global React assignment
const rootElement = document.getElementById("root");

if (!rootElement) {
  console.error("Root element not found");
} else {
  const root = createRoot(rootElement);
  
  root.render(
    <App />
  );
  
  console.log("React app successfully mounted");
}
