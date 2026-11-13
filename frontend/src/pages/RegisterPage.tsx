import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function RegisterPage() {
  // Состояние: показывать окно или нет
  const [showModal, setShowModal] = useState(false);

  // Функция для обработки отправки формы
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // Чтобы страница не перезагружалась
    setShowModal(true); // Показываем окно
  };

  return (
    <>
      <h1 className="page-title login-title">Регистрация</h1>
      
      <div className="login-wrapper">
        <form className="login-box" onSubmit={handleSubmit}>
          <input type="text" placeholder="Имя" className="login-input" required />
          <input type="text" placeholder="Фамилия" className="login-input" required />
          <input type="email" placeholder="Email" className="login-input" required />
          <input type="tel" placeholder="Телефон" className="login-input" required />
          <input type="password" placeholder="Пароль" className="login-input" required />
          
          <button type="submit" className="btn-login">Зарегистрироваться</button>
          
          <p className="register-link">
            Уже есть аккаунт? <Link to="/login">Войти</Link>
          </p>
        </form>
      </div>

      {/* Всплывающее окно (Модалка) */}
      {showModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2>Успешно!</h2>
            <p>Ваш аккаунт создан. Добро пожаловать в ÉLAN!</p>
            <Link to="/login" className="btn-login" style={{ textDecoration: 'none', display: 'block' }}>
              Перейти к входу
            </Link>
          </div>
        </div>
      )}
    </>
  );
}