# Аудит веб-приложения ÉLAN (Практика 79-80)

## 1. Таблица страниц для аудита

| Страница | Тип страницы | Как проверяем | Категории Lighthouse |
| :--- | :--- | :--- | :--- |
| `/` (Главная) | публичная | Окно инкогнито, 3 запуска | Все 4 |
| `/catalog` (Каталог) | публичная | Окно инкогнито, 3 запуска | Все 4 |
| `/designers` (Дизайнеры) | публичная | Окно инкогнито, 3 запуска | Все 4 |
| `/product/:id` (Товар) | публичная | Окно инкогнито, 3 запуска | Все 4 |
| `/login`, `/register` | закрыта (noindex) | Окно инкогнито, 3 запуска | Без SEO |
| `/cart`, `/profile` | закрыта (robots) | После входа, 1 запуск | Без SEO |

## 2. Результаты Lighthouse

### Главная страница (`/`)
- **Запуск 1:** Performance: **100**, Accessibility: **100**, Best Practices: **100**, SEO: **100**
- **Запуск 2:** Performance: **98**, Accessibility: **100**, Best Practices: **100**, SEO: **100**
- **Запуск 3:** Performance: **98**, Accessibility: **100**, Best Practices: **100**, SEO: **100**
- **Медиана:** Performance: **98**, Accessibility: **100**, Best Practices: **100**, SEO: **100**
- **Метрики:** FCP = 0.4s, LCP = 0.6s, TBT = 0ms, CLS = 0.091.

### Страница Каталога (`/catalog`)
- **Запуск 1:** Performance: **99**, Accessibility: **100**, Best Practices: **100**, SEO: **100**
- **Запуск 2:** Performance: **99**, Accessibility: **100**, Best Practices: **100**, SEO: **100**
- **Запуск 3:** Performance: **98**, Accessibility: **100**, Best Practices: **100**, SEO: **100**
- **Медиана:** Performance: **99**, Accessibility: **100**, Best Practices: **100**, SEO: **100**
- **Метрики:** FCP = 0.5s, LCP = 0.9s, TBT = 0ms, CLS = 0.019.

### Страница Дизайнеров (`/designers`)
- **Запуск 1 (до исправления):** Performance: **92**, LCP = 1.9s.
- **Запуск 2 (до исправления):** Performance: **91**, LCP = 1.9s.
- **Запуск 3 (до исправления):** Performance: **92**, LCP = 1.9s.
- **Медиана (до):** Performance: **92**.
- **Запуск 4 (после добавления `loading="lazy"`):** Performance: **98**, LCP = 0.6s.
- **Метрики (после):** FCP = 0.4s, LCP = 0.6s, TBT = 0ms, CLS = 0.091.

## 3. Живые метрики Core Web Vitals (вкладка Performance)
- **INP:** 91 ms (Хорошо)
- **CLS:** 0.01 (Хорошо)
- **LCP:** *не удалось измерить (пусто)*

## 4. Проверка метатегов, robots.txt и sitemap.xml
- ✅ `<title>` и `<meta name="description">` присутствуют в `<head>`.
- ✅ `<html lang="ru">` установлен.
- ✅ `robots.txt` открывается и содержит запреты для `/profile`, `/login` и т.д.
- ✅ `sitemap.xml` открывается и содержит ссылки на страницы.

## 5. Найденные проблемы и приоритеты

| Проблема | Приоритет | Решение |
| :--- | :--- | :--- |
| **LCP на странице /designers = 1.9s** | **Высокий** | Добавлен `loading="lazy"` для всех картинок. **Результат: LCP = 0.6s, Performance = 98.** |
| **Отсутствие адаптивной верстки** | **Средний** | Сверстать сайт для мобильных устройств (Google индексирует мобильные версии). |
| **Текст комментария в robots.txt в неправильной кодировке** | Низкий | Пересохранить файл в UTF-8 (убрать кириллицу из комментария). |
| **В sitemap.xml адреса https://example.com** | Низкий | Заменить на реальный домен при публикации. |

## 6. Исправления
- Для всех изображений на странице `/designers` добавлен атрибут `loading="lazy"`. Это улучшило LCP с 1.9s до 0.6s и подняло Performance с 92 до 98.

## 7. Скриншоты

### Главная страница
- `lighthouse-home-1.png` — 100/100/100/100 (Запуск 1).
- `lighthouse-home-2.png` — 98/100/100/100, LCP 0.6s (Запуск 2).
- `lighthouse-home-3.png` — 98/100/100/100, LCP 0.6s (Запуск 3).

### Каталог
- `lighthouse-catalog-1.png` — 99/100/100/100, LCP 0.9s.
- `lighthouse-catalog-2.png` — 99/100/100/100, LCP 0.9s.
- `lighthouse-catalog-3.png` — 98/100/100/100, LCP 0.7s.

### Дизайнеры (до исправления)
- `lighthouse-designers-before-1.png` — 92, LCP 1.8s.
- `lighthouse-designers-before-2.png` — 91, LCP 1.9s.
- `lighthouse-designers-before-3.png` — 92, LCP 1.9s.

### Дизайнеры (после исправления)
- `lighthouse-designers-after.png` — 98, LCP 0.6s.

### Дополнительно
- `core-web-vitals.png` — Живые метрики (INP 91ms, CLS 0.01).
- `html-meta.png` — Исходный код с метатегами.
- `robots-txt.png` — Файл robots.txt.
- `sitemap-xml.png` — Файл sitemap.xml.