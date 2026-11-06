import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import CatalogPage from './pages/CatalogPage';
import DesignersPage from './pages/DesignersPage'; 
import './styles.css';

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <main className="main">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/catalog" element={<CatalogPage />} />
          {/* Добавили маршрут для дизайнеров */}
          <Route path="/designers" element={<DesignersPage />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}