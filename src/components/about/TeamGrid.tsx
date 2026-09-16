'use client';

import { motion } from 'framer-motion';
import { teamMembers } from '@/lib/data';
import { SectionTitle } from '@/components/ui/SectionTitle';

export function TeamGrid() {
  return (
    <section className="py-24 md:py-32 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          subtitle="核心团队"
          title="梦想的缔造者"
          description="来自全球顶尖科技公司的精英团队，用技术和热情创造未来。"
        />

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="glass-card rounded-2xl p-8 text-center group"
            >
              <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-br from-primary/30 to-accent/30 flex items-center justify-center text-2xl font-display font-bold group-hover:from-primary/50 group-hover:to-accent/50 transition-all duration-300">
                {member.name.charAt(0)}
              </div>
              <h3 className="font-display text-lg font-semibold mb-1">{member.name}</h3>
              <p className="text-primary-light text-sm font-medium mb-4">{member.role}</p>
              <p className="text-muted-light text-sm leading-relaxed">{member.bio}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
