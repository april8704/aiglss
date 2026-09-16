import type { Metadata } from 'next';
import { Timeline } from '@/components/about/Timeline';
import { TeamGrid } from '@/components/about/TeamGrid';
import { Partners } from '@/components/about/Partners';
import { SectionTitle } from '@/components/ui/SectionTitle';

export const metadata: Metadata = {
  title: '关于我们',
  description: 'VisionX 致力于打造下一代 AI 智能眼镜。了解我们的愿景、使命、发展历程和核心团队。',
  openGraph: {
    title: '关于 VisionX',
    description: '用技术和热情，创造人人可用的智能未来。',
  },
};

export default function AboutPage() {
  return (
    <>
      {/* Vision Hero */}
      <section className="relative pt-32 pb-24 md:pb-32 overflow-hidden">
        <div className="absolute inset-0">
          <div
            className="gradient-orb w-[600px] h-[600px] top-0 left-1/2 -translate-x-1/2"
            style={{ background: 'radial-gradient(circle, rgba(139,92,246,0.12) 0%, transparent 70%)' }}
          />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-accent-light text-sm font-medium tracking-widest uppercase">
            关于 VisionX
          </span>
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold mt-4 mb-8 tracking-tight">
            用技术重新定义
            <br />
            <span className="text-gradient">人与世界的连接</span>
          </h1>
          <p className="text-muted-light text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
            我们相信，增强现实技术不应只属于实验室和科幻电影。VisionX 的使命是将最前沿的
            AI 技术融入一副轻薄的眼镜中，让每个人都能在日常生活中享受智能科技带来的便利与惊喜。
          </p>
        </div>
      </section>

      <div className="section-divider" />

      {/* Mission & Vision */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16">
            <div className="glass-card rounded-2xl p-8 md:p-10">
              <span className="text-primary-light text-sm font-medium tracking-widest uppercase">愿景</span>
              <h3 className="font-display text-3xl font-bold mt-4 mb-4">让 AI 融入每个人的视野</h3>
              <p className="text-muted-light leading-relaxed">
                我们的愿景是创造一个人与数字世界无缝融合的未来。通过 AI 智能眼镜，让信息不再局限于
                手机屏幕，而是自然地叠加在你所看到的真实世界上。
              </p>
            </div>
            <div className="glass-card rounded-2xl p-8 md:p-10">
              <span className="text-accent-light text-sm font-medium tracking-widest uppercase">使命</span>
              <h3 className="font-display text-3xl font-bold mt-4 mb-4">科技普惠，智能无界</h3>
              <p className="text-muted-light leading-relaxed">
                打造人人买得起、用得好的 AI 智能眼镜。我们不断突破技术瓶颈、优化供应链，
                用匠心精神把每一款产品做到极致，让智能穿戴不再是少数人的特权。
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* Timeline */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            subtitle="发展历程"
            title="一步步走向未来"
            description="从一个想法到全球品牌，每一步都承载着我们的梦想与坚持。"
          />
        </div>
        <Timeline />
      </section>

      <div className="section-divider" />
      <TeamGrid />
      <div className="section-divider" />
      <Partners />
    </>
  );
}
