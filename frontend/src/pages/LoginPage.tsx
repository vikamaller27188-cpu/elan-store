import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function LoginPage() {
  const navigate = useNavigate();
  const { signIn } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    const { error: authError } = await signIn(email, password);
    if (authError) {
      setError('Неверный email или пароль');
    } else {
      navigate('/profile');
    }
  };

  return (
    <>
      <h1 className="page-title login-title">Вход в аккаунт</h1>
      <div className="login-wrapper">
        <form className="login-box" onSubmit={handleLogin}>
          <input type="email" placeholder="Email" className="login-input" value={email} onChange={(e) => setEmail(e.target.value)} required />
          <input type="password" placeholder="Пароль" className="login-input" value={password} onChange={(e) => setPassword(e.target.value)} required />
          {error && <p style={{ color: 'red', fontSize: '14px' }}>{error}</p>}
          <button type="submit" className="btn-login">Войти</button>
          <p className="register-link">Нет аккаунта? <Link to="/register">Регистрация</Link></p>
        </form>
      </div>
    </>
  );
}