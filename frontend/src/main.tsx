import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles.css'; // <-- Убедитесь, что стили подключены
import { CartProvider } from './context/CartContext'; // <-- Импорт контекста

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <CartProvider> {/* <-- Обязательная обертка */}
      <App />
    </CartProvider>
  </React.StrictMode>
);