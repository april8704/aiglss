import { NextRequest, NextResponse } from 'next/server';

type RouteContext = {
  params: Promise<{ width: string; height: string }>;
};

export async function GET(request: NextRequest, context: RouteContext) {
  const { width: widthStr, height: heightStr } = await context.params;
  const width = parseInt(widthStr, 10) || 400;
  const height = parseInt(heightStr, 10) || 300;

  const svg = `
    <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:#0a0a12;stop-opacity:1" />
          <stop offset="100%" style="stop-color:#12121e;stop-opacity:1" />
        </linearGradient>
      </defs>
      <rect width="${width}" height="${height}" fill="url(#bg)" />
      <text x="50%" y="50%" font-family="Inter, sans-serif" font-size="14"
        fill="#6b7280" text-anchor="middle" dominant-baseline="middle">
        ${width} × ${height}
      </text>
    </svg>
  `;

  return new NextResponse(svg.trim(), {
    headers: {
      'Content-Type': 'image/svg+xml',
      'Cache-Control': 'public, max-age=31536000, immutable',
    },
  });
}
