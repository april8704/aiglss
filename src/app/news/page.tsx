import type { Metadata } from 'next';
import { NewsGrid } from '@/components/news/NewsGrid';

export const metadata: Metadata = {
  title: '新闻动态',
  description: '了解 VisionX 的最新产品发布、技术突破、公司动态和行业资讯。',
  openGraph: {
    title: 'VisionX 新闻动态',
    description: '获取 VisionX 最新资讯。',
  },
};

export default function NewsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0">
          <div
            className="gradient-orb w-[500px] h-[500px] -top-[100px] -left-[100px]"
            style={{ background: 'radial-gradient(circle, rgba(59,130,246,0.12) 0%, transparent 70%)' }}
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-primary-light text-sm font-medium tracking-widest uppercase">
            新闻 & 博客
          </span>
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold mt-4 mb-6 tracking-tight">
            新闻<span className="text-gradient">动态</span>
          </h1>
          <p className="text-muted-light text-lg md:text-xl max-w-2xl mx-auto">
            探索 VisionX 的最新动态，了解我们的产品进展、技术创新和品牌故事。
          </p>
        </div>
      </section>

      <div className="section-divider" />
      <NewsGrid />
    </>
  );
}
