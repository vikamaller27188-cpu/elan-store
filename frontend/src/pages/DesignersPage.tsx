import { Link } from 'react-router-dom';

export default function DesignersPage() {
  return (
    <>
      <h1 className="page-title">Дизайнеры</h1>
      
      <section className="designers-section">
        <h2 className="section-title">Список брендов</h2>

        <div className="designers-grid">
          <Link to="/designers/versace" className="designer-card">
            <img src="/images/designers/versace.png" alt="Versace" loading="lazy" />
          </Link>
          <Link to="/designers/ysl" className="designer-card">
            <img src="/images/designers/ysl.png" alt="Saint Laurent" loading="lazy" />
          </Link>
          <Link to="/designers/lv" className="designer-card">
            <img src="/images/designers/lv.png" alt="Louis Vuitton" loading="lazy" />
          </Link>
          <Link to="/designers/vivienne" className="designer-card">
            <img src="/images/designers/vivienne.png" alt="Vivienne Westwood" loading="lazy" />
          </Link>
          <Link to="/designers/chanel" className="designer-card">
            <img src="/images/designers/chanel.png" alt="Chanel" loading="lazy" />
          </Link>
          <Link to="/designers/jimmy" className="designer-card">
            <img src="/images/designers/jimmy.png" alt="Jimmy Choo" loading="lazy" />
          </Link>
          <Link to="/designers/miumiu" className="designer-card">
            <img src="/images/designers/miumiu.png" alt="Miu Miu" loading="lazy" />
          </Link>
          <Link to="/designers/ck" className="designer-card">
            <img src="/images/designers/ck.png" alt="Calvin Klein" loading="lazy" />
          </Link>
        </div>
      </section>
    </>
  );
}