import { Link, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useCart } from '../context/CartContext';
import { supabase } from '../lib/supabaseClient';

export default function ProductPage() {
  const { id } = useParams();
  const [product, setProduct] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [selectedSize, setSelectedSize] = useState('M'); // По умолчанию M
  const { addToCart } = useCart();

  useEffect(() => {
    async function fetchProduct() {
      const { data, error } = await supabase
        .from('products')
        .select('*')
        .eq('id', Number(id))
        .single();
        
      if (!error && data) {
        setProduct(data);
        // Устанавливаем размер по умолчанию в зависимости от категории
        if (data.category === 'accessories') setSelectedSize('One size');
        else if (data.category === 'shoes') setSelectedSize('37');
        else setSelectedSize('M');
      }
      setLoading(false);
    }
    fetchProduct();
  }, [id]);

  if (loading) return <p>Загрузка...</p>;
  if (!product) return <p>Товар не найден</p>;

  const isAccessory = product.category === 'accessories';
  const isShoes = product.category === 'shoes';

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