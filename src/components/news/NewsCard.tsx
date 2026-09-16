'use client';

import { motion } from 'framer-motion';
import { Clock, ArrowUpRight } from 'lucide-react';
import type { NewsArticle } from '@/lib/data';

interface NewsCardProps {
  article: NewsArticle;
  index: number;
}

export function NewsCard({ article, index }: NewsCardProps) {
  const categoryColors: Record<string, string> = {
    '产品发布': 'bg-blue-500/10 text-blue-400',
    '公司动态': 'bg-purple-500/10 text-purple-400',
    '技术创新': 'bg-green-500/10 text-green-400',
    '荣誉奖项': 'bg-yellow-500/10 text-yellow-400',
  };

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group cursor-pointer"
    >
      <div className="glass-card rounded-2xl overflow-hidden h-full flex flex-col">
        {/* Cover image */}
        <div className="relative aspect-[16/9] overflow-hidden bg-gradient-to-br from-primary/10 to-accent/10">
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-muted text-sm">文章封面图</span>
          </div>
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
          <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-y-2 group-hover:translate-y-0">
            <ArrowUpRight className="w-4 h-4 text-white" />
          </div>
        </div>

        {/* Content */}
        <div className="p-6 flex flex-col flex-1">
          <div className="flex items-center gap-3 mb-4">
            <span className={`px-3 py-1 rounded-full text-xs font-medium ${categoryColors[article.category] || 'bg-muted/10 text-muted-light'}`}>
              {article.category}
            </span>
          </div>

          <h3 className="font-display text-lg font-semibold mb-3 group-hover:text-primary-light transition-colors duration-300 line-clamp-2">
            {article.title}
          </h3>

          <p className="text-muted-light text-sm leading-relaxed mb-6 flex-1 line-clamp-3">
            {article.excerpt}
          </p>

          <div className="flex items-center justify-between text-xs text-muted">
            <span>{article.date}</span>
            <span className="flex items-center gap-1">
              <Clock className="w-3 h-3" />
              {article.readTime}
            </span>
          </div>
        </div>
      </div>
    </motion.article>
  );
}
