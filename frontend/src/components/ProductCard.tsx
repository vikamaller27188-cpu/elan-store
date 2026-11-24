import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useCart } from '../context/CartContext';

interface ProductCardProps {
  id?: number;
  name: string;
  price: number;
  image: string;
  brand: string;
  category?: string;
}

export default function ProductCard({ 
  id = 1, 
  name, 
  price, 
  image, 
  brand,
  category = 'clothing' 
}: ProductCardProps) {
  const { addToCart } = useCart();
  const [showToast, setShowToast] = useState(false);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    const defaultSize = category === 'accessories' ? 'One size' : 'M';
    
    addToCart({
      id,
      brand,
      name,
      price,
      image,
      size: defaultSize,
    });
    
    setShowToast(true);
  
    setTimeout(() => {
      setShowToast(false);
    }, 3000);
  };

  return (
    <Link to={`/product/${id}`} className="card">
      <img src={image} alt={name} />
      <p className="brand">{brand}</p>
      <p className="name">{name}</p>
      <p className="price">{price.toLocaleString('ru-RU')} ₽</p>
      
      <button 
        className="btn-card-add" 
        onClick={handleAddToCart}
      >
        В корзину
      </button>
      {showToast && (
        <div className="custom-toast">
          <p>Товар добавлен в корзину!</p>
        </div>
      )}
    </Link>
  );
}