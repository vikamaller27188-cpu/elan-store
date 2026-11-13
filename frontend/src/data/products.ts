export interface Product {
  id: number;
  name: string;
  price: number;
  brand: string;
  image: string;
  description: string;
  category: 'clothing' | 'shoes' | 'accessories';
}

export const allProducts: Product[] = [
  { id: 1, name: 'Черное вискозное вечернее платье', price: 80000, brand: 'VERSACE COLLECTION', image: '/images/products/product1.png', description: 'Элегантное вечернее платье из вискозы.', category: 'clothing' },
  { id: 2, name: 'Черные босоножки из лакированной кожи', price: 70000, brand: 'SAINT LAURENT', image: '/images/products/product2.png', description: 'Босоножки на каблуке из лакированной кожи.', category: 'shoes' },
  { id: 3, name: 'Белая сумка Book Tote', price: 489000, brand: 'CHRISTIAN DIOR', image: '/images/products/product3.png', description: 'Сумка через плечо с вышивкой.', category: 'accessories' },
  { id: 4, name: 'Черные лакированные туфли', price: 65000, brand: 'SAINT LAURENT', image: '/images/products/product4.png', description: 'Классические туфли на каблуке.', category: 'shoes' },
  { id: 5, name: 'Кожаный корсет', price: 56000, brand: 'VERSACE', image: '/images/products/product5.png', description: 'Черный кожаный корсет.', category: 'clothing' },
  { id: 6, name: 'Желтая кожаная сумка', price: 40000, brand: 'MICHAEL KORS', image: '/images/products/product6.png', description: 'Желтая сумка с короткими ручками.', category: 'accessories' },
];