'use client';

import { motion } from 'framer-motion';
import { productSpecs } from '@/lib/data';
import { SectionTitle } from '@/components/ui/SectionTitle';

export function SpecsTable() {
  return (
    <section className="py-24 md:py-32 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          subtitle="详细参数"
          title="每一项参数，都经得起推敲"
        />

        <div className="mt-16 grid md:grid-cols-2 gap-6">
          {productSpecs.map((spec, groupIndex) => (
            <motion.div
              key={spec.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: groupIndex * 0.1 }}
              className="glass-card rounded-2xl overflow-hidden"
            >
              <div className="px-8 py-5 border-b border-border bg-gradient-to-r from-primary/5 to-transparent">
                <h3 className="font-display font-semibold text-lg">{spec.category}</h3>
              </div>
              <div className="divide-y divide-border/50">
                {spec.items.map((item) => (
                  <div key={item.label} className="px-8 py-4 flex justify-between items-center">
                    <span className="text-muted-light text-sm">{item.label}</span>
                    <span className="text-sm font-medium text-foreground">{item.value}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
