import { useEffect, useState } from 'react';
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

export default function HomePage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProducts() {
      const { data, error } = await supabase.from('products').select('*');
      
      // Отладка: смотрим, что пришло из базы
      console.log('Данные из Supabase:', data);
      console.log('Ошибка:', error);
      
      if (error) {
        console.error('Ошибка загрузки:', error);
      } else {
        setProducts(data || []);
      }
      setLoading(false);
    }
    fetchProducts();
  }, []);

  if (loading) return <p>Загрузка товаров...</p>;

  return (
    <>
      <h1 className="page-title">Магазин дизайнерской одежды ÉLAN</h1>

      <section>
        <h2 className="section-title">Все товары</h2>
        <div className="products">
          {products.map((p) => (
            <ProductCard 
              key={p.id} 
              id={p.id} 
              name={p.name} 
              price={p.price} 
              brand={p.brand} 
              image={p.image} 
              category={p.category}
            />
          ))}
        </div>
      </section>
    </>
  );
}