// middleware.js

import { NextResponse } from 'next/server';

export async function middleware(req) {
  // Прокси-запрос к внешнему API
  if (req.nextUrl.pathname.startsWith('/api/projects')) {
    const response = await fetch('https://alexandr.pw/wp-json/wp/v2/projects');
    const data = await response.json();

    // Возвращаем ответ
    return NextResponse.json(data);
  }
  
  return NextResponse.next();
}

export const config = {
  matcher: '/api/projects', // Определяет маршруты, которые обрабатываются этим middleware
};
