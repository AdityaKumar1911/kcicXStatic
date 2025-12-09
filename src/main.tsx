import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error("Root element not found");
}

// Add main content ID for skip-to-main link
rootElement.setAttribute('id', 'main-content');

createRoot(rootElement).render(<App />);
