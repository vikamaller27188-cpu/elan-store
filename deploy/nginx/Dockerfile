FROM nginx:1.27-alpine

# Копируем наш конфиг внутрь образа
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Копируем собранный React (мы передадим его при сборке)