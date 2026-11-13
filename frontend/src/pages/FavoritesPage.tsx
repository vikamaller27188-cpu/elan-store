import { useState } from 'react';

export default function FavoritesPage() {
  // Переносим товары в состояние (useState)
  const [favorites, setFavorites] = useState([
    {
      id: 1,
      brand: 'SAINT LAURENT',
      name: 'Черные туфли из лакированной кожи',
      size: '37',
      price: 70000,
      image: '/images/products/product4.png',
    },
    {
      id: 2,
      brand: 'CHRISTIAN DIOR',
      name: 'Белая сумка через плечо Book Tote',
      size: 'One size',
      price: 489000,
      image: '/images/products/product3.png',
    },
    {
      id: 3,
      brand: 'VERSACE',
      name: 'Черный кожаный корсет',
      size: 'M',
      price: 56000,
      image: '/images/products/product5.png',
    },
    {
      id: 4,
      brand: 'MICHAEL KORS',
      name: 'Желтая кожаная сумка с короткими ручками',
      size: 'One size',
      price: 40000,
      image: '/images/products/product6.png',
    },
  ]);

  // Функция удаления товара по id
  const handleRemove = (id: number) => {
    setFavorites(favorites.filter((item) => item.id !== id));
  };

  return (
    <>
      <h1 className="page-title">Избранное</h1>
      
      <section className="favorites-section">
        <h2 className="section-title">Сохраненные товары</h2>

        {favorites.length === 0 ? (
          <p style={{ marginTop: '20px', fontStyle: 'italic' }}>В избранном пока пусто</p>
        ) : (
          <div className="favorites-grid">
            {favorites.map((item) => (
              <div key={item.id} className="favorite-card">
                <img src={item.image} alt={item.name} className="favorite-img" />
                
                <div className="favorite-info">
                  <p className="brand">{item.brand}</p>
                  <p className="name">{item.name}</p>
                  <p className="size">Размер: {item.size}</p>
                  
                  <div className="favorite-actions">
                    <button className="btn-price">
                      {item.price.toLocaleString('ru-RU')} ₽
                    </button>
                    {/* Привязываем функцию удаления к кнопке */}
                    <button className="btn-remove" onClick={() => handleRemove(item.id)}>
                      убрать
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </>
  );
}