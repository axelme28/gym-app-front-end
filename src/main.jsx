import React from 'react';           // Import the core React library
import ReactDOM from 'react-dom/client'; // Import the ReactDOM for rendering
import App from './App';             // Import your main App component

const root = ReactDOM.createRoot(document.getElementById('root')); // Create a root for rendering

root.render(
  <React.StrictMode>   {/* Helps catch common issues in development */}
    <App />            {/* Render the main App component */}
  </React.StrictMode>
);
