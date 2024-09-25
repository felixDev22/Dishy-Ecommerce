import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import StoreProvider from './context/Store';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <StoreProvider>
      <App />
    </StoreProvider>
  </StrictMode>,
);
