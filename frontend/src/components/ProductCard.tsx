interface ProductCardProps {
  name: string;
  price: number;
  brand: string;
  image: string;
}

export default function ProductCard({ name, price, brand, image }: ProductCardProps) {
  return (
    <div className="card">
      <img src={image} alt={name} />
      <p className="brand">{brand}</p>
      <p className="name">{name}</p>
      <p className="price">{price.toLocaleString('ru-RU')} ₽</p>
    </div>
  );
}