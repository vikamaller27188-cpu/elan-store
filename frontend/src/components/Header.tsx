import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';

export default function Header() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');

  // Функция для отправки формы поиска
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/catalog?search=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  return (
    <header className="header">
      <div style={{ display: 'flex', alignItems: 'center' }}>
        {/* Логотип */}
        <Link to="/" className="logo">
          <img src="/images/logo.png" alt="ÉLAN" style={{ height: 48 }} />
        </Link>
        
        <Link to="/catalog" className="menu">каталог</Link>
      </div>

      <form onSubmit={handleSearch} className="search-form">
        <input 
          type="text" 
          className="search" 
          placeholder="поиск" 
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </form>

      <nav className="nav">
        <Link to="/cart">
          <img src="/images/icons/cart.png" alt="корзина" className="nav-icon" />
          <br />корзина
        </Link>
        <Link to="/designers">
          <img src="/images/icons/designers.png" alt="дизайнеры" className="nav-icon" />
          <br />дизайнеры
        </Link>
        <Link to="/favorites">
          <img src="/images/icons/favorites.png" alt="избранное" className="nav-icon" />
          <br />избранное
        </Link>
        <Link to="/profile">
          <img src="/images/icons/profile.png" alt="кабинет" className="nav-icon" />
          <br />личный<br />кабинет
        </Link>
        <Link to="/login">
          <img src="/images/icons/login.png" alt="вход" className="nav-icon" />
          <br />вход
        </Link>
      </nav>
    </header>
  );
}