import ProductCard from '../components/ProductCard';

interface Product {
  id: number;
  name: string;
  price: number;
  brand: string;
  image: string;
}

const products: Product[] = [
  {
    id: 1,
    name: 'Черное вискозное вечернее платье',
    price: 80000,
    brand: 'VERSACE COLLECTION',
    image: '/images/products/product1.png',
  },
  {
    id: 2,
    name: 'Черные босоножки из лакированной кожи',
    price: 70000,
    brand: 'SAINT LAURENT',
    image: '/images/products/product2.png',
  },
  {
    id: 3,
    name: 'Белая сумка Book Tote',
    price: 489000,
    brand: 'CHRISTIAN DIOR',
    image: '/images/products/product3.png',
  },
  {
    id: 4,
    name: 'Черные лакированные туфли',
    price: 65000,
    brand: 'SAINT LAURENT',
    image: '/images/products/product4.png',
  },
];

export default function HomePage() {
  return (
    <>
      <h1 className="page-title">Магазин дизайнерской одежды ÉLAN</h1>

      <section>
        <h2 className="section-title">Популярные товары</h2>

        <div className="products">
          {products.map((p) => (
            <ProductCard
              key={p.id}
              name={p.name}
              price={p.price}
              brand={p.brand}
              image={p.image}
            />
          ))}
        </div>
      </section>
    </>
  );
}