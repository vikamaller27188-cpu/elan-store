import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import CatalogPage from './pages/CatalogPage';
import DesignersPage from './pages/DesignersPage';
import CartPage from './pages/CartPage'; // 
import FavoritesPage from './pages/FavoritesPage';
import ProfilePage from './pages/ProfilePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import OrdersPage from './pages/OrdersPage';
import TrackingPage from './pages/TrackingPage';
import ReturnsPage from './pages/ReturnsPage';
import PaymentsPage from './pages/PaymentsPage';
import ReviewsPage from './pages/ReviewsPage';
import DesignerPage from './pages/DesignerPage';
import ProductPage from './pages/ProductPage';
import CheckoutPage from './pages/CheckoutPage';
import './styles.css';

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <main className="main">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/catalog" element={<CatalogPage />} />
          <Route path="/designers" element={<DesignersPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/favorites" element={<FavoritesPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
           <Route path="/profile/orders" element={<OrdersPage />} />
          <Route path="/profile/tracking" element={<TrackingPage />} />
          <Route path="/profile/returns" element={<ReturnsPage />} />
        <Route path="/profile/payments" element={<PaymentsPage />} />
         <Route path="/profile/reviews" element={<ReviewsPage />} />
      <Route path="/designers/:id" element={<DesignerPage />} />
      <Route path="/product/:id" element={<ProductPage />} />
      <Route path="/checkout" element={<CheckoutPage />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}