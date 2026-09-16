import type { Metadata } from 'next';
import { ProductShowcase } from '@/components/products/ProductShowcase';
import { SpecsTable } from '@/components/products/SpecsTable';
import { CTASection } from '@/components/home/CTASection';

export const metadata: Metadata = {
  title: '产品 - VisionX One',
  description: 'VisionX One AI 智能眼镜，搭载高通骁龙 AR2 Gen 2 芯片，Micro OLED 全彩显示屏，30g 极致轻量，12 小时超长续航。',
  openGraph: {
    title: 'VisionX One - AI 智能眼镜',
    description: '看见未来的每一面。搭载前沿 AI 引擎的旗舰智能眼镜。',
  },
};

export default function ProductsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0">
          <div
            className="gradient-orb w-[500px] h-[500px] -top-[100px] right-0"
            style={{ background: 'radial-gradient(circle, rgba(59,130,246,0.15) 0%, transparent 70%)' }}
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-primary-light text-sm font-medium tracking-widest uppercase">
            旗舰产品
          </span>
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold mt-4 mb-6 tracking-tight">
            VisionX <span className="text-gradient">One</span>
          </h1>
          <p className="text-muted-light text-lg md:text-xl max-w-2xl mx-auto">
            融合最前沿的 AI 技术与精湛工艺，VisionX One 是我们对智能眼镜未来的回答。
          </p>
        </div>
      </section>

      <div className="section-divider" />
      <ProductShowcase />
      <SpecsTable />
      <div className="section-divider" />

      {/* Buy CTA */}
      <section className="py-24 md:py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
            现在就拥有 <span className="text-gradient">VisionX One</span>
          </h2>
          <p className="text-muted-light text-lg mb-10 max-w-2xl mx-auto">
            限时首发优惠 ¥4,999 起，支持 7 天无理由退换，整机 2 年质保。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#"
              className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-gradient-to-r from-primary to-accent text-white font-medium hover:shadow-lg hover:shadow-primary/25 transition-all duration-300"
            >
              立即购买
            </a>
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 rounded-full border border-border-light text-foreground font-medium hover:border-primary/50 transition-all duration-300"
            >
              联系销售
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
