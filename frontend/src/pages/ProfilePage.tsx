import { Link } from 'react-router-dom';

export default function ProfilePage() {
  return (
    <>
      <h1 className="page-title">Личный кабинет</h1>
      
      <div className="profile-layout">
        {/* Левая часть - Профиль */}
        <div className="profile-card">
          <h2 className="section-title">Профиль</h2>
          
          <div className="profile-info">
            {/* Теперь используем локальную картинку */}
            <img 
              src="/images/avatar.png" 
              alt="Аватар" 
              className="profile-avatar" 
            />
            
            <div className="profile-text">
              <p>Имя: <strong>Мария</strong></p>
              <p>Фамилия: <strong>Савченко</strong></p>
              <p>Возраст: <strong>24</strong></p>
            </div>
          </div>
        </div>

        {/* Правая часть - Меню */}
        <div className="profile-menu">
          <Link to="/profile/orders" className="profile-btn">История заказов</Link>
          <Link to="/profile/tracking" className="profile-btn">Отслеживание заказов</Link>
          <Link to="/profile/returns" className="profile-btn">Возвраты</Link>
          <Link to="/profile/payments" className="profile-btn">Способы оплаты</Link>
          <Link to="/profile/reviews" className="profile-btn">Мои отзывы</Link>
        </div>
      </div>
    </>
  );
}