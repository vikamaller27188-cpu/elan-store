import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function RegisterPage() {
  const navigate = useNavigate();
  const { signUp } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const { error: authError } = await signUp(email, password, fullName);
    if (authError) {
      setError(authError.message);
    } else {
      setShowModal(true);
    }
  };

  return (
    <>
      <h1 className="page-title login-title">Регистрация</h1>
      <div className="login-wrapper">
        <form className="login-box" onSubmit={handleSubmit}>
          <input type="text" placeholder="Ваше имя" className="login-input" value={fullName} onChange={(e) => setFullName(e.target.value)} required />
          <input type="email" placeholder="Email" className="login-input" value={email} onChange={(e) => setEmail(e.target.value)} required />
          <input type="password" placeholder="Пароль (мин. 6 символов)" className="login-input" value={password} onChange={(e) => setPassword(e.target.value)} required minLength={6} />
          {error && <p style={{ color: 'red', fontSize: '14px' }}>{error}</p>}
          <button type="submit" className="btn-login">Зарегистрироваться</button>
          <p className="register-link">Уже есть аккаунт? <Link to="/login">Войти</Link></p>
        </form>
      </div>
      {showModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2>Успешно!</h2>
            <p>Ваш аккаунт создан.</p>
            <button className="btn-login" onClick={() => { setShowModal(false); navigate('/login'); }}>Перейти к входу</button>
          </div>
        </div>
      )}
    </>
  );
}