import { Link, useParams } from 'react-router-dom';
import { useState } from 'react';
import { useCart } from '../context/CartContext';
import { allProducts } from './HomePage'; // <-- Импортируем список с главной

export default function ProductPage() {
  const { id } = useParams();
  const [showModal, setShowModal] = useState(false);
  const { addToCart } = useCart();

  // Ищем товар по ID
  const product = allProducts.find((p) => p.id === Number(id));

  if (!product) {
    return (
      <div style={{ padding: '40px', textAlign: 'center' }}>
        <h2>Товар не найден</h2>
        <Link to="/">Вернуться на главную</Link>
      </div>
    );
  }

  const isAccessory = product.category === 'accessories';
  const isShoes = product.category === 'shoes';

  const [selectedSize, setSelectedSize] = useState(
    isAccessory ? 'One size' : (isShoes ? '37' : 'M')
  );

  const clothingSizes = ['XS', 'S', 'M', 'L', 'XL'];
  const shoeSizes = ['36', '37', '38', '39', '40'];

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      brand: product.brand,
      name: product.name,
      price: product.price,
      image: product.image,
      size: selectedSize,
    });
    setShowModal(true);
  };

  return (
    <>
      <Link to="/" className="back-link">← Назад на главную</Link>
      
      <div className="product-page-layout">
        <div className="product-page-image">
          <img src={product.image} alt={product.name} />
        </div>

        <div className="product-page-info">
          <p className="brand">{product.brand}</p>
          <h1 className="product-page-title">{product.name}</h1>
          <p className="price">{product.price.toLocaleString('ru-RU')} ₽</p>
          
          <p className="description">Описание товара скоро появится...</p>

          {!isAccessory ? (
            <div className="size-selection">
              <p>Выберите размер:</p>
              <div className="size-buttons">
                {(isShoes ? shoeSizes : clothingSizes).map((size) => (
                  <button 
                    key={size} 
                    className={`size-btn ${selectedSize === size ? 'active' : ''}`}
                    onClick={() => setSelectedSize(size)}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <p className="description" style={{ marginBottom: '24px' }}>
              Размер: <strong>One size</strong>
            </p>
          )}

          <button className="btn-add-to-cart" onClick={handleAddToCart}>
            Добавить в корзину
          </button>
        </div>
      </div>

      {showModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2>Добавлено в корзину!</h2>
            <p>Товар «{product.name}» успешно добавлен.</p>
            
            <div style={{ display: 'flex', gap: '10px', justifyContent: 'center' }}>
              <button className="btn-login" onClick={() => setShowModal(false)}>
                Продолжить
              </button>
              <Link to="/cart" className="btn-login">
                В корзину
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}