import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
const isDev = import.meta.NODE_ENV === 'development';

createRoot(document.getElementById('root')!).render(
  isDev ? (
    <App />
  ) : (
    <StrictMode>
      <App />
    </StrictMode>
  )
);
