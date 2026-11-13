import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function LoginPage() {
  const navigate = useNavigate();
  
  // Состояния для полей ввода (чтобы потом можно было отправить данные на сервер)
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Функция, которая срабатывает при нажатии на "Войти"
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault(); // Отменяем перезагрузку страницы
    
    // Тут в будущем будет проверка логина и пароля через базу данных.
    // А пока мы просто имитируем успешный вход:
    if (email && password) {
      navigate('/profile'); // Переходим в Личный кабинет
    } else {
      alert('Пожалуйста, заполните все поля');
    }
  };

  return (
    <>
      <h1 className="page-title login-title">Вход в аккаунт</h1>
      
      <div className="login-wrapper">
        <form className="login-box" onSubmit={handleLogin}>
          {/* Поля ввода */}
          <input 
            type="text" 
            placeholder="логин или телефон" 
            className="login-input" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input 
            type="password" 
            placeholder="пароль" 
            className="login-input" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          
          <a href="#" className="forgot-link">Забыли пароль?</a>
          
          <button type="submit" className="btn-login">Войти</button>
          
          <p className="register-link">
            Нет аккаунта? <Link to="/register">Регистрация</Link>
          </p>
        </form>
      </div>
    </>
  );
}