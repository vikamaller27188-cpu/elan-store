# SEO-отчёт по проекту ÉLAN

## Замер «до» (before.png)

- SEO-балл: **91/100**
- Performance: 100
- Accessibility: 100
- Best Practices: 100

### Проваленная проверка
- Document does not have a meta description

## Что было исправлено

1. **Базовые метатеги** в `frontend/index.html`:
   - `<html lang="ru">` — было `lang="en"`
   - `<title>ÉLAN — магазин дизайнерской одежды</title>` — было `<title>frontend</title>`
   - Добавлен `<meta name="description" content="...">`
   - Добавлены Open Graph теги (`og:title`, `og:type`, `og:description`, `og:site_name`)

2. **Структура заголовков** в `frontend/src/App.tsx`:
   - Добавлен единственный `<h1>` — «Магазин дизайнерской одежды ÉLAN»
   - «Популярные товары» понижен до `<h2>` — это раздел, а не главный заголовок

3. **Создан `frontend/public/robots.txt`**:
   - Закрыты от индексации: `/profile`, `/login`, `/register`, `/cart`, `/admin`, `/api/`
   - Указана ссылка на `sitemap.xml`

4. **Создан `frontend/public/sitemap.xml`**:
   - Публичные страницы: `/`, `/catalog`, `/designers`, `/favorites`
   - Абсолютные адреса, даты последнего изменения, приоритеты

## Замер «после» (after.png)

- SEO-балл: **100/100**
- Все 9 проверок пройдены
- `robots.txt is valid` — 

## Что осталось как задача на будущее

- **Уникальные `title` и `description` для каждой страницы** — сейчас единые для всего SPA. Решается через `react-helmet-async` (или React 19 `<title>`/`<meta>` в компонентах). Требует перехода на полноценный роутинг с разделением на страницы.
- **Динамический `sitemap.xml`** — при появлении карточек товаров из БД sitemap нужно генерировать на бэкенде.
- **Метатег `noindex` на `/login`, `/profile`, `/cart`** — сейчас этих страниц нет, они закрыты только в `robots.txt`. При появлении отдельных страниц — добавить в них `<meta name="robots" content="noindex">`.
- **Заголовок `X-Robots-Tag` для API** — backend-API у проекта пока нет.