'use client';

import { motion } from 'framer-motion';
import { SectionTitle } from '@/components/ui/SectionTitle';

const partners = Array.from({ length: 8 }, (_, i) => ({
  name: `合作伙伴 ${i + 1}`,
  id: i + 1,
}));

export function Partners() {
  return (
    <section className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          subtitle="合作伙伴"
          title="携手共创未来"
          description="我们与全球领先的科技企业和品牌建立了紧密的战略合作关系。"
        />

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          {partners.map((partner, index) => (
            <motion.div
              key={partner.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="aspect-[2/1] rounded-xl border border-border bg-surface-light/30 flex items-center justify-center hover:border-border-light hover:bg-surface-light/50 transition-all duration-300"
            >
              <span className="text-muted font-medium text-sm">{partner.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
