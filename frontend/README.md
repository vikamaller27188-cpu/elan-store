# ÉLAN — Магазин дизайнерской одежды

Веб-приложение для продажи дизайнерской одежды от локальных брендов. Проект реализован на React + TypeScript + Vite с интеграцией базы данных Supabase и контейнеризацией через Docker.

## Технологический стек
Frontend: React 19, TypeScript, Vite. Стили: CSS (кастомные, без фреймворков). Роутинг: React Router DOM v7. База данных: Supabase (PostgreSQL). Авторизация: Supabase Auth. Хранение изображений: Supabase Storage. Карты: Yandex Maps API (@pbe/react-yandex-maps). Контейнеризация: Docker, Nginx. CI/CD: GitHub Actions. SSL: mkcert (локальный HTTPS).

## Структура проекта
frontend/
├── public/ — Статические файлы (картинки, robots.txt, sitemap.xml)
│   └── images/ — Все изображения проекта (products, designers-products, categories, collections, designers, events, icons, avatar.png, bg.jpg, logo.png)
├── src/
│   ├── components/ — Header.tsx, ProductCard.tsx, DeliveryMap.tsx
│   ├── context/ — AuthContext.tsx, CartContext.tsx
│   ├── lib/ — supabaseClient.ts
│   ├── pages/ — HomePage, CatalogPage, DesignersPage, DesignerPage, ProductPage, CartPage, CheckoutPage, FavoritesPage, ProfilePage, LoginPage, RegisterPage, OrdersPage, TrackingPage, ReturnsPage, PaymentsPage, ReviewsPage
│   ├── App.tsx — Роутинг приложения
│   ├── main.tsx — Точка входа (обёртки провайдеров)
│   └── styles.css — Все стили проекта
├── Dockerfile — Инструкция для сборки Docker-образа
├── .dockerignore — Файлы, исключаемые из Docker-образа
├── .env.local — Переменные окружения (не в Git!)
├── package.json — Зависимости
├── tsconfig.json — Настройки TypeScript
└── vite.config.ts — Настройки Vite

## Запуск проекта

1. Установка зависимостей. Перейдите в папку frontend и выполните: npm install --legacy-peer-deps. Флаг --legacy-peer-deps обязателен, так как библиотека Яндекс.Карт не поддерживает React 19.

2. Настройка переменных окружения. Создайте файл .env.local в папке frontend и добавьте две строки: VITE_SUPABASE_URL=https://ваш-проект.supabase.co и VITE_SUPABASE_ANON_KEY=ваш_anon_ключ. Ключи берите из Supabase: Project Settings → API Keys → Publishable key.

3. Запуск в режиме разработки. Выполните: npm run dev. Откройте http://localhost:5173.

4. Сборка для продакшена. Выполните: npm run build. Готовые файлы будут в папке dist/.

## База данных Supabase

Таблицы:
products — Товары (название, цена, бренд, картинка, категория).
profiles — Профили пользователей (ФИО, телефон, адрес).
orders — Заказы (пользователь, сумма, статус, адрес).
order_items — Позиции заказов (товар, размер, количество).

Row Level Security (RLS):
Для всех таблиц включена защита на уровне строк. products — публичное чтение (anon). profiles — пользователь видит только свой профиль. orders и order_items — пользователь видит только свои заказы.

Авторизация:
Для входа/регистрации используется Supabase Auth (email + пароль). Подтверждение email отключено в настройках Supabase (Authentication → Sign In / Providers → Email → Confirm email = OFF).

## Docker
Сборка образа: docker build -t elan-frontend .
Запуск контейнера: docker run -d -p 8080:80 --name elan-frontend elan-frontend

## SEO
Проект оптимизирован для поисковых систем: html lang="ru", title, meta name="description", Open Graph теги, robots.txt в public/, sitemap.xml в public/, уникальные h1 на страницах, loading="lazy" для изображений (улучшает LCP).

## Деплой
Проект развёрнут локально через Docker Compose + Nginx + HTTPS (mkcert) по адресу https://elan.localhost. Для публикации на реальном сервере нужно: арендовать VPS (Linux), купить домен и настроить DNS, получить SSL-сертификат через Let's Encrypt (Certbot), настроить CI/CD через GitHub Actions для автоматического деплоя.

## Лицензия
Учебный проект. Все права защищены.