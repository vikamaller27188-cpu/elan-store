import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { supabase } from '../lib/supabaseClient';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';

export default function CheckoutPage() {
  const { cartItems, removeFromCart } = useCart();
  const { user } = useAuth();
  const navigate = useNavigate();
  
  const [address, setAddress] = useState('');
  const [loading, setLoading] = useState(false);

  const totalPrice = cartItems.reduce((sum, item) => sum + item.price, 0);

  const handleOrder = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!user) {
      alert('Пожалуйста, войдите в аккаунт');
      navigate('/login');
      return;
    }
    if (cartItems.length === 0) {
      alert('Корзина пуста');
      return;
    }

    setLoading(true);

    // 1. Создаем заказ в таблице orders
    const { data: order, error: orderError } = await supabase
      .from('orders')
      .insert({ 
        user_id: user.id, 
        total_price: totalPrice, 
        delivery_address: address 
      })
      .select()
      .single();

    if (orderError || !order) {
      alert('Ошибка при создании заказа: ' + orderError?.message);
      setLoading(false);
      return;
    }

    // 2. Добавляем товары в order_items
    const orderItems = cartItems.map((item) => ({
      order_id: order.id,
      product_id: item.id,
      size: item.size,
      quantity: 1,
      price: item.price,
    }));

    const { error: itemsError } = await supabase.from('order_items').insert(orderItems);

    if (itemsError) {
      alert('Ошибка при добавлении товаров: ' + itemsError.message);
      setLoading(false);
      return;
    }

    // 3. Очищаем корзину
    cartItems.forEach((item) => removeFromCart(item.id));

    alert('Заказ успешно оформлен!');
    navigate('/profile/orders');
  };

  return (
    <>
      <h1 className="page-title">Оформление заказа</h1>
      
      <div className="checkout-container">
        <h2 className="section-title">Детали доставки</h2>
        
        <form onSubmit={handleOrder} className="checkout-form">
          <input 
            type="text" 
            placeholder="Адрес доставки (город, улица, дом, квартира)" 
            className="login-input" 
            value={address} 
            onChange={(e) => setAddress(e.target.value)} 
            required 
          />
          
          <div className="total-price" style={{ marginTop: '20px', textAlign: 'center' }}>
            Итого к оплате: <strong>{totalPrice.toLocaleString('ru-RU')} ₽</strong>
          </div>

          <button type="submit" className="btn-login" disabled={loading} style={{ marginTop: '20px' }}>
            {loading ? 'Оформление...' : 'Подтвердить заказ'}
          </button>
        </form>

        <div style={{ marginTop: '20px', textAlign: 'center' }}>
          <Link to="/cart" className="back-link">← Вернуться в корзину</Link>
        </div>
      </div>
    </>
  );
}