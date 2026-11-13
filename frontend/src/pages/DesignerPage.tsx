import { useParams, Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';

export default function DesignerPage() {
  const { id } = useParams();

  const brandsData: Record<string, any> = {
    versace: {
      name: 'VERSACE',
      description: 'Итальянский дом моды, основанный Джанни Версаче в 1978 году. Бренд известен своими яркими принтами, смелыми решениями и роскошью. Символ бренда — голова Медузы, олицетворяющая силу и красоту.',
      products: [
        { id: 1, name: 'Золотой браслет с логотипом', price: 120000, image: '/images/designers-products/versace-1.png' },
        { id: 2, name: 'Черная сумка на цепочке', price: 85000, image: '/images/designers-products/versace-2.png' },
      ],
    },
    ysl: {
      name: 'SAINT LAURENT',
      description: 'Французский дом моды, основанный Ивом Сен-Лораном в 1961 году. Бренд стал символом элегантности и парижского шика.',
      products: [
        { id: 3, name: 'Черный свитер с надписью', price: 70000, image: '/images/designers-products/ysl-1.png' },
        { id: 4, name: 'Кожаная сумка с логотипом', price: 150000, image: '/images/designers-products/ysl-2.png' },
      ],
    },
    lv: {
      name: 'LOUIS VUITTON',
      description: 'Французский дом моды, основанный в 1854 году. Начинался как мастерская по изготовлению дорожных чемоданов, а сегодня это один из самых узнаваемых люксовых брендов в мире.',
      products: [
        { id: 5, name: 'Бежевые туфли с монограммой', price: 350000, image: '/images/designers-products/lv-1.png' },
        { id: 6, name: 'Черные босоножки на каблуке', price: 45000, image: '/images/designers-products/lv-2.png' },
      ],
    },
    vivienne: {
      name: 'VIVIENNE WESTWOOD',
      description: 'Британский бренд, основанный Вивьен Вествуд. Известен своим бунтарским духом, панк-эстетикой и нестандартным подходом к моде.',
      products: [
        { id: 7, name: 'Колье с подвеской', price: 110000, image: '/images/designers-products/vivienne-1.png' },
        { id: 8, name: 'Браслет с жемчугом', price: 40000, image: '/images/designers-products/vivienne-2.png' },
      ],
    },
    chanel: {
      name: 'CHANEL',
      description: 'Французский дом моды, основанный Коко Шанель в 1910 году. Шанель произвела революцию в женской моде, предложив удобную и элегантную одежду.',
      products: [
        { id: 9, name: 'Серьги с логотипом', price: 250000, image: '/images/designers-products/chanel-1.png' },
        { id: 10, name: 'Черный кроп-топ', price: 180000, image: '/images/designers-products/chanel-2.png' },
      ],
    },
    jimmy: {
      name: 'JIMMY CHOO',
      description: 'Британский бренд обуви и аксессуаров, основанный Джимми Чу. Славится элегантными туфлями, которые выбирают звезды на красные дорожки.',
      products: [
        { id: 11, name: 'Туфли с ремешками', price: 95000, image: '/images/designers-products/jimmy-1.png' },
        { id: 12, name: 'Атласные туфли', price: 65000, image: '/images/designers-products/jimmy-2.png' },
      ],
    },
    miumiu: {
      name: 'MIU MIU',
      description: 'Итальянский бренд, основанный Миуччей Прадой. Молодежная и игривая линейка Prada, сочетающая в себе женственность и современный дизайн.',
      products: [
        { id: 13, name: 'Вязаный топ с воротником', price: 130000, image: '/images/designers-products/miumiu-1.png' },
        { id: 14, name: 'Кожаная сумка', price: 55000, image: '/images/designers-products/miumiu-2.png' },
      ],
    },
    ck: {
      name: 'CALVIN KLEIN',
      description: 'Американский дом моды, основанный Кельвином Кляйном. Известен своим минимализмом, чистыми линиями и культовым нижним бельем.',
      products: [
        { id: 15, name: 'Черная сумка на цепочке', price: 45000, image: '/images/designers-products/ck-1.png' },
        { id: 16, name: 'Белые кроссовки', price: 110000, image: '/images/designers-products/ck-2.png' },
      ],
    },
    default: {
      name: 'Бренд',
      description: 'Информация о бренде скоро появится.',
      products: [],
    },
  };

  const brand = brandsData[id || ''] || brandsData.default;

  return (
    <>
      <Link to="/designers" className="back-link">← Назад к дизайнерам</Link>
      
      <h1 className="page-title">{brand.name}</h1>
      
      <section className="brand-info">
        <p>{brand.description}</p>
      </section>

      <section className="brand-products">
        <h2 className="section-title">Товары бренда</h2>
        
        {brand.products.length > 0 ? (
          <div className="products">
            {brand.products.map((p: any) => (
              <ProductCard
                key={p.id}
                name={p.name}
                price={p.price}
                brand={brand.name}
                image={p.image}
              />
            ))}
          </div>
        ) : (
          <p style={{ fontStyle: 'italic' }}>Товары этого бренда скоро появятся.</p>
        )}
      </section>
    </>
  );
}