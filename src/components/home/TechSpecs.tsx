'use client';

import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { techStats, techFeatures } from '@/lib/data';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { AnimatedCounter } from '@/components/ui/AnimatedCounter';

export function TechSpecs() {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0">
        <div
          className="gradient-orb w-[500px] h-[500px] top-1/2 left-0 -translate-y-1/2"
          style={{ background: 'radial-gradient(circle, rgba(59,130,246,0.08) 0%, transparent 70%)' }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          subtitle="技术实力"
          title="前沿科技，极致体验"
          description="每一个细节都经过精心打磨，为你带来前所未有的智能穿戴体验。"
        />

        {/* Stats */}
        <div className="mt-16 md:mt-20 grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {techStats.map((stat) => (
            <AnimatedCounter
              key={stat.label}
              value={stat.value}
              suffix={stat.suffix}
              label={stat.label}
            />
          ))}
        </div>

        {/* Feature List + Image */}
        <div className="mt-20 md:mt-28 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Product Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10 blur-3xl rounded-full" />
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-border-light bg-surface-light/30 flex items-center justify-center">
              <div className="text-center p-8">
                <div className="w-64 h-40 mx-auto rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                  <svg width="200" height="80" viewBox="0 0 200 80" fill="none" className="text-primary-light opacity-60">
                    <path d="M20 40C20 20 35 5 60 5H80C87 5 93 11 93 18V30C93 37 87 43 80 43H60C35 43 20 40 20 40Z" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                    <path d="M180 40C180 20 165 5 140 5H120C113 5 107 11 107 18V30C107 37 113 43 120 43H140C165 43 180 40 180 40Z" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                    <line x1="93" y1="24" x2="107" y2="24" stroke="currentColor" strokeWidth="1.5"/>
                    <text x="100" y="70" textAnchor="middle" fill="currentColor" fontSize="10" opacity="0.5">VisionX One · 侧面视图</text>
                  </svg>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Feature List */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="font-display text-3xl md:text-4xl font-bold mb-4">
              为未来而生的
              <span className="text-gradient">硬核配置</span>
            </h3>
            <p className="text-muted-light mb-8 leading-relaxed">
              VisionX One 搭载顶级硬件平台，每个组件都经过严格筛选与优化，
              确保在极致轻薄的机身中释放强悍性能。
            </p>
            <ul className="space-y-4">
              {techFeatures.map((feature, index) => (
                <motion.li
                  key={feature}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.06 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <Check className="w-3.5 h-3.5 text-primary-light" />
                  </div>
                  <span className="text-sm md:text-base text-muted-light">{feature}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
