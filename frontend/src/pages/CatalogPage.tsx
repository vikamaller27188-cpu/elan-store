import { Link } from 'react-router-dom';

export default function CatalogPage() {
  return (
    <>
      <h1 className="page-title">Каталог</h1>

      <div className="catalog-grid">
        {/* 1. Категории */}
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

        {/* 2. Коллекции */}
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

       {/* 3. Подбор по событию */}
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
    </>
  );
}