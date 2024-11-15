// middleware.js

import { NextResponse } from 'next/server';

// Пример логики для маршрута
export async function middleware(req) {
  // Пример добавления логики для обработки пути
  if (req.nextUrl.pathname.startsWith('/restricted')) {
    // Проверка, например, на наличие авторизации
    const isAuthenticated = req.cookies.get('auth_token');

    if (!isAuthenticated) {
      return NextResponse.redirect(new URL('/login', req.url));
    }
  }

  return NextResponse.next(); // Пропускаем запрос дальше
}

export const config = {
  matcher: ['/restricted/*', '/api/*'], // Применение middleware для конкретных маршрутов
};
