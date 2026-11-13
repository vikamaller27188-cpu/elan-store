import { Link } from 'react-router-dom';
import DeliveryMap from '../components/DeliveryMap';
import { useCart } from '../context/CartContext'; // <-- Импорт контекста

export default function CartPage() {
  // Получаем товары и функцию удаления из контекста
  const { cartItems, removeFromCart } = useCart();

  // Считаем итоговую стоимость
  const totalPrice = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <>
      <h1 className="page-title">Корзина</h1>

      <div className="cart-layout">
        {/* Левая часть — список товаров */}
        <div className="cart-items">
          <h2 className="section-title">К заказу</h2>

          {cartItems.length === 0 ? (
            <p style={{ marginTop: '20px', fontStyle: 'italic' }}>
              Ваша корзина пуста. <Link to="/" style={{ color: '#1a1a1a' }}>Перейти к покупкам</Link>
            </p>
          ) : (
            cartItems.map((item) => (
              <div key={`${item.id}-${item.size}`} className="cart-item">
                <img src={item.image} alt={item.name} className="cart-item-img" />
                <div className="cart-item-info">
                  <p className="brand">{item.brand}</p>
                  <p className="name">{item.name}</p>
                  <p className="size">Размер: {item.size}</p>
                  <div className="cart-item-actions">
                    <button className="btn-buy">{item.price.toLocaleString('ru-RU')} ₽</button>
                    {/* Привязываем функцию удаления */}
                    <button className="btn-remove" onClick={() => removeFromCart(item.id)}>
                      убрать
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Правая часть — оформление */}
        <div className="cart-summary">
          <div className="total-price">
            Итоговая стоимость: <strong>{totalPrice.toLocaleString('ru-RU')} ₽</strong>
          </div>

          <input type="text" className="promo-input" placeholder="Введите промокод" />

          <div className="delivery-map">
            <p>Выберите адрес доставки</p>
            <DeliveryMap />
          </div>

          <Link to="/checkout" className="btn-checkout">
            Оформить заказ
          </Link>
        </div>
      </div>
    </>
  );
}