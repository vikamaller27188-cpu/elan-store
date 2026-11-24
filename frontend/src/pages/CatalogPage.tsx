import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { supabase } from '../lib/supabaseClient';

interface Product {
  id: number;
  name: string;
  price: number;
  brand: string;
  image: string;
  category: string;
}

export default function CatalogPage() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const searchQuery = searchParams.get('search')?.toLowerCase() || '';

  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  // Загружаем товары из Supabase
  useEffect(() => {
    async function fetchProducts() {
      const { data, error } = await supabase.from('products').select('*');
      if (!error && data) {
        setProducts(data);
      }
      setLoading(false);
    }
    fetchProducts();
  }, []);

  // Фильтруем товары по поисковому запросу
  const filteredProducts = products.filter((p) => 
    p.name.toLowerCase().includes(searchQuery) || 
    p.brand.toLowerCase().includes(searchQuery)
  );

  return (
    <>
      <h1 className="page-title">Каталог</h1>

      {/* Если есть поисковый запрос, показываем результаты */}
      {searchQuery && (
        <section style={{ marginBottom: '40px' }}>
          <h2 className="section-title">Результаты поиска: «{searchQuery}»</h2>
          
          {loading ? (
            <p>Загрузка...</p>
          ) : filteredProducts.length > 0 ? (
            <div className="products">
              {filteredProducts.map((p) => (
                <ProductCard key={p.id} id={p.id} name={p.name} price={p.price} brand={p.brand} image={p.image} category={p.category} />
              ))}
            </div>
          ) : (
            <p style={{ fontStyle: 'italic' }}>По вашему запросу ничего не найдено.</p>
          )}
        </section>
      )}

      {/* Стандартные колонки каталога */}
      {!searchQuery && (
        <div className="catalog-grid">
          {/* Колонка 1 — Категории */}
          <section className="catalog-block">
            <h2 className="section-title">Категории</h2>
            <div className="catalog-items">
              <Link to="/catalog/dresses" className="catalog-card">
                <img src="/images/categories/dress.png" alt="Платья" />
                <p>платья</p>
              </Link>
              <Link to="/catalog/shoes" className="catalog-card">
                <img src="/images/categories/shoes.png" alt="Обувь" />
                <p>обувь</p>
              </Link>
              <Link to="/catalog/bags" className="catalog-card">
                <img src="/images/categories/bag.png" alt="Аксессуары" />
                <p>аксессуары</p>
              </Link>
              <Link to="/catalog/lingerie" className="catalog-card">
                <img src="/images/categories/lingerie.png" alt="Бельё" />
                <p>бельё</p>
              </Link>
            </div>
          </section>

          {/* Колонка 2 — Коллекции */}
          <section className="catalog-block">
            <h2 className="section-title">Коллекции</h2>
            <div className="collections-grid">
              <Link to="/catalog/summer" className="collection-card">
                <img src="/images/collections/summer.png" alt="Summer" />
                <p>Summer</p>
              </Link>
              <Link to="/catalog/autumn" className="collection-card">
                <img src="/images/collections/autumn.png" alt="Autumn" />
                <p>Autumn</p>
              </Link>
              <Link to="/catalog/winter" className="collection-card">
                <img src="/images/collections/winter.png" alt="Winter" />
                <p>Winter</p>
              </Link>
              <Link to="/catalog/spring" className="collection-card">
                <img src="/images/collections/spring.png" alt="Spring" />
                <p>Spring</p>
              </Link>
            </div>
          </section>

          {/* Колонка 3 — Подбор по событию */}
          <section className="catalog-block">
            <h2 className="section-title">Подбор по событию</h2>
            <div className="events-list">
              <Link to="/catalog/birthday" className="event-card">
                <img src="/images/events/birthday.png" alt="День рождения" />
                <p>День рождения</p>
              </Link>
              <Link to="/catalog/photoshoot" className="event-card">
                <img src="/images/events/photoshoot.png" alt="Фотосессия" />
                <p>Фотосессия</p>
              </Link>
            </div>
          </section>
        </div>
      )}
    </>
  );
}