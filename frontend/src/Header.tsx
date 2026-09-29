import logo from './images/logo.png';
import iconCart from './images/icons/cart.png';
import iconDesigners from './images/icons/designers.png';
import iconFavorites from './images/icons/favorites.png';
import iconProfile from './images/icons/profile.png';
import iconLogin from './images/icons/login.png';

export default function Header() {
  return (
    <header className="header">
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <a href="/" className="logo">
          <img src={logo} alt="ÉLAN" style={{ height: 48 }} />
        </a>
        <span className="menu">≡</span>
        <span className="menu">каталог</span>
      </div>

      <input type="text" className="search" placeholder="поиск" />

<nav className="nav">
  <a href="#">
    <img src={iconCart} alt="корзина" />
    <br />корзина
  </a>
  <a href="#">
    <img src={iconDesigners} alt="дизайнеры" />
    <br />дизайнеры
  </a>
  <a href="#">
    <img src={iconFavorites} alt="избранное" />
    <br />избранное
  </a>
  <a href="#">
    <img src={iconProfile} alt="кабинет" />
    <br />личный<br />кабинет
  </a>
  <a href="#">
    <img src={iconLogin} alt="вход" />
    <br />вход
  </a>
</nav>
    </header>
  );
}