# ============================================
# Этап 1: Сборка приложения
# ============================================
FROM node:20-alpine AS build

WORKDIR /app

# Копируем файлы зависимостей
COPY package*.json ./

# Устанавливаем зависимости
RUN npm install --legacy-peer-deps




# Копируем весь остальной код
COPY . .

ARG VITE_SUPABASE_URL
ARG VITE_SUPABASE_ANON_KEY
ENV VITE_SUPABASE_URL=$VITE_SUPABASE_URL
ENV VITE_SUPABASE_ANON_KEY=$VITE_SUPABASE_ANON_KEY

# Собираем production-версию
RUN npm run build

# ============================================
# Этап 2: Раздача готовых файлов через Nginx
# ============================================
FROM nginx:alpine

# Копируем собранные файлы из первого этапа
COPY --from=build /app/dist /usr/share/nginx/html

# Открываем порт 80
EXPOSE 80

# Запускаем Nginx
CMD ["nginx", "-g", "daemon off;"]