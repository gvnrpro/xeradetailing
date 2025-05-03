
import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Make sure React is available globally to avoid "React not found" errors
window.React = React;

// Ensure DOM is loaded before attempting to render
document.addEventListener('DOMContentLoaded', () => {
  try {
    const rootElement = document.getElementById("root");
    if (!rootElement) {
      console.error("Root element not found");
      return;
    }

    const root = createRoot(rootElement);

    root.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
    
    console.log("React app successfully mounted");
  } catch (error) {
    console.error("Failed to initialize React application:", error);
  }
});
