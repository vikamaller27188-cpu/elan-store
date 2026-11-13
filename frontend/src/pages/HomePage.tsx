import ProductCard from '../components/ProductCard';

// Общий список ВСЕХ товаров проекта
export const allProducts = [
  // Товары с Главной
  { id: 1, name: 'Черное вискозное вечернее платье', price: 80000, brand: 'VERSACE COLLECTION', image: '/images/products/product1.png', category: 'clothing' },
  { id: 2, name: 'Черные босоножки из лакированной кожи', price: 70000, brand: 'SAINT LAURENT', image: '/images/products/product2.png', category: 'shoes' },
  { id: 3, name: 'Белая сумка Book Tote', price: 489000, brand: 'CHRISTIAN DIOR', image: '/images/products/product3.png', category: 'accessories' },
  { id: 4, name: 'Черные лакированные туфли', price: 65000, brand: 'SAINT LAURENT', image: '/images/products/product4.png', category: 'shoes' },
  { id: 5, name: 'Кожаный корсет', price: 56000, brand: 'VERSACE', image: '/images/products/product5.png', category: 'clothing' },
  { id: 6, name: 'Желтая кожаная сумка', price: 40000, brand: 'MICHAEL KORS', image: '/images/products/product6.png', category: 'accessories' },
  
  // Товары брендов (из папки designers-products)
  { id: 7, name: 'Золотой браслет с логотипом', price: 120000, brand: 'VERSACE', image: '/images/designers-products/versace-1.png', category: 'accessories' },
  { id: 8, name: 'Черная сумка на цепочке', price: 85000, brand: 'VERSACE', image: '/images/designers-products/versace-2.png', category: 'accessories' },
  { id: 9, name: 'Черный свитер с надписью', price: 70000, brand: 'SAINT LAURENT', image: '/images/designers-products/ysl-1.png', category: 'clothing' },
  { id: 10, name: 'Кожаная сумка с логотипом', price: 150000, brand: 'SAINT LAURENT', image: '/images/designers-products/ysl-2.png', category: 'accessories' },
  { id: 11, name: 'Бежевые туфли с монограммой', price: 350000, brand: 'LOUIS VUITTON', image: '/images/designers-products/lv-1.png', category: 'shoes' },
  { id: 12, name: 'Черные босоножки на каблуке', price: 45000, brand: 'LOUIS VUITTON', image: '/images/designers-products/lv-2.png', category: 'shoes' },
  { id: 13, name: 'Колье с подвеской', price: 110000, brand: 'VIVIENNE WESTWOOD', image: '/images/designers-products/vivienne-1.png', category: 'accessories' },
  { id: 14, name: 'Браслет с жемчугом', price: 40000, brand: 'VIVIENNE WESTWOOD', image: '/images/designers-products/vivienne-2.png', category: 'accessories' },
  { id: 15, name: 'Серьги с логотипом', price: 250000, brand: 'CHANEL', image: '/images/designers-products/chanel-1.png', category: 'accessories' },
  { id: 16, name: 'Черный кроп-топ', price: 180000, brand: 'CHANEL', image: '/images/designers-products/chanel-2.png', category: 'clothing' },
  { id: 17, name: 'Туфли с ремешками', price: 95000, brand: 'JIMMY CHOO', image: '/images/designers-products/jimmy-1.png', category: 'shoes' },
  { id: 18, name: 'Атласные туфли', price: 65000, brand: 'JIMMY CHOO', image: '/images/designers-products/jimmy-2.png', category: 'shoes' },
  { id: 19, name: 'Вязаный топ с воротником', price: 130000, brand: 'MIU MIU', image: '/images/designers-products/miumiu-1.png', category: 'clothing' },
  { id: 20, name: 'Кожаная сумка', price: 55000, brand: 'MIU MIU', image: '/images/designers-products/miumiu-2.png', category: 'accessories' },
  { id: 21, name: 'Черная сумка на цепочке', price: 45000, brand: 'CALVIN KLEIN', image: '/images/designers-products/ck-1.png', category: 'accessories' },
  { id: 22, name: 'Белые кроссовки', price: 110000, brand: 'CALVIN KLEIN', image: '/images/designers-products/ck-2.png', category: 'shoes' },
];

export default function HomePage() {
  return (
    <>
      <h1 className="page-title">Магазин дизайнерской одежды ÉLAN</h1>

      <section>
        <h2 className="section-title">Все товары</h2>
        <div className="products">
          {allProducts.map((p) => (
            <ProductCard 
              key={p.id} 
              id={p.id} 
              name={p.name} 
              price={p.price} 
              brand={p.brand} 
              image={p.image} 
              category={p.category} // Передаем категорию
            />
          ))}
        </div>
      </section>
    </>
  );
}