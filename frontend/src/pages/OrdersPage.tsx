import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabaseClient';
import { useAuth } from '../context/AuthContext';

export default function OrdersPage() {
  const { user } = useAuth();
  const [orders, setOrders] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user) return;
    
    async function fetchOrders() {
      const { data } = await supabase
        .from('orders')
        .select('*, order_items(*, products(name, image))')
        .eq('user_id', user!.id)
        .order('created_at', { ascending: false });
      
      setOrders(data || []);
      setLoading(false);
    }
    fetchOrders();
  }, [user]);

  if (!user) return <p>Пожалуйста, войдите в аккаунт</p>;
  if (loading) return <p>Загрузка заказов...</p>;

  return (
    <>
      <h1 className="page-title">История заказов</h1>
      <div className="profile-card">
        {orders.length === 0 ? (
          <p>У вас пока нет заказов.</p>
        ) : (
          orders.map((order) => (
            <div key={order.id} style={{ marginBottom: '20px', borderBottom: '1px solid #ccc', paddingBottom: '15px' }}>
              <p><strong>Заказ №{order.id}</strong> от {new Date(order.created_at).toLocaleDateString()}</p>
              <p>Статус: {order.status}</p>
              <p>Сумма: {order.total_price.toLocaleString('ru-RU')} ₽</p>
              <p>Адрес: {order.delivery_address}</p>
              
              <div style={{ display: 'flex', gap: '10px', marginTop: '10px' }}>
                {order.order_items.map((item: any) => (
                  <div key={item.id} style={{ textAlign: 'center' }}>
                    <img 
                      src={item.products.image} 
                      alt={item.products.name} 
                      style={{ width: '60px', height: '60px', objectFit: 'contain', background: '#fff', borderRadius: '8px' }} 
                    />
                    <p style={{ fontSize: '12px', marginTop: '5px' }}>{item.products.name}</p>
                  </div>
                ))}
              </div>
            </div>
          ))
        )}
      </div>
    </>
  );
}