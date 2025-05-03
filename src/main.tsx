
import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Create a more reliable React initialization
const renderApp = () => {
  const rootElement = document.getElementById("root");

  if (!rootElement) {
    console.error("Root element not found - DOM might not be fully loaded");
    return;
  }

  try {
    const root = createRoot(rootElement);
    
    root.render(
      // Remove StrictMode for production to prevent double-rendering issues
      <App />
    );
    
    console.log("React app successfully mounted");
  } catch (error) {
    console.error("Failed to initialize React application:", error);
  }
};

// Ensure DOM is fully loaded
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', renderApp);
} else {
  renderApp();
}
