'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { colorVariants } from '@/lib/data';

export function ProductShowcase() {
  const [selectedColor, setSelectedColor] = useState(0);
  const [currentAngle, setCurrentAngle] = useState(0);
  const angles = ['正面', '45°侧面', '侧面', '背面'];

  return (
    <section className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Product viewer */}
          <div className="relative">
            <div className="sticky top-28">
              <AnimatePresence mode="wait">
                <motion.div
                  key={`${selectedColor}-${currentAngle}`}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className="aspect-[4/3] rounded-2xl border border-border-light bg-surface-light/30 flex items-center justify-center relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5" />
                  <div className="text-center p-8 relative z-10">
                    <div
                      className="w-48 h-48 mx-auto mb-4 rounded-2xl flex items-center justify-center"
                      style={{ background: `${colorVariants[selectedColor].color}22` }}
                    >
                      <svg width="140" height="70" viewBox="0 0 140 70" fill="none">
                        <path d="M15 35C15 18 27 5 48 5H58C64 5 69 10 69 16V25C69 31 64 36 58 36H48C27 36 15 35 15 35Z" stroke={colorVariants[selectedColor].color === '#c0c0c0' ? '#e0e0e0' : colorVariants[selectedColor].color} strokeWidth="2.5" fill="none" opacity="0.8"/>
                        <path d="M125 35C125 18 113 5 92 5H82C76 5 71 10 71 16V25C71 31 76 36 82 36H92C113 36 125 35 125 35Z" stroke={colorVariants[selectedColor].color === '#c0c0c0' ? '#e0e0e0' : colorVariants[selectedColor].color} strokeWidth="2.5" fill="none" opacity="0.8"/>
                        <line x1="69" y1="20" x2="71" y2="20" stroke={colorVariants[selectedColor].color === '#c0c0c0' ? '#e0e0e0' : colorVariants[selectedColor].color} strokeWidth="2"/>
                      </svg>
                    </div>
                    <p className="text-muted text-sm">{colorVariants[selectedColor].name} · {angles[currentAngle]}</p>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Angle selector */}
              <div className="flex gap-2 mt-4">
                {angles.map((angle, index) => (
                  <button
                    key={angle}
                    onClick={() => setCurrentAngle(index)}
                    className={`flex-1 py-2 rounded-lg text-xs font-medium transition-all duration-300 ${
                      currentAngle === index
                        ? 'bg-primary/20 text-primary-light border border-primary/30'
                        : 'bg-surface-light border border-border text-muted-light hover:text-foreground'
                    }`}
                  >
                    {angle}
                  </button>
                ))}
              </div>

              {/* Color selector */}
              <div className="mt-6">
                <p className="text-sm text-muted-light mb-3">
                  选择颜色：<span className="text-foreground font-medium">{colorVariants[selectedColor].name}</span>
                </p>
                <div className="flex gap-3">
                  {colorVariants.map((variant, index) => (
                    <button
                      key={variant.name}
                      onClick={() => setSelectedColor(index)}
                      className={`w-10 h-10 rounded-full border-2 transition-all duration-300 ${
                        selectedColor === index
                          ? 'border-primary scale-110 shadow-lg shadow-primary/20'
                          : 'border-border-light hover:border-muted'
                      }`}
                      style={{ backgroundColor: variant.color }}
                      aria-label={variant.name}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Product info */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-primary-light text-sm font-medium tracking-widest uppercase">VisionX One</span>
              <h1 className="font-display text-4xl md:text-5xl font-bold mt-4 mb-6">
                看见未来的
                <span className="text-gradient">每一面</span>
              </h1>
              <p className="text-muted-light text-lg leading-relaxed mb-8">
                VisionX One 是我们倾注三年心血打造的旗舰 AI 智能眼镜。它将最前沿的 AI 技术
                融入时尚轻薄的镜框中，让你在日常生活中轻松享受增强现实带来的便利。
              </p>

              <div className="flex items-baseline gap-4 mb-8 pb-8 border-b border-border">
                <span className="font-display text-4xl font-bold text-gradient">¥4,999</span>
                <span className="text-muted line-through text-lg">¥5,999</span>
                <span className="px-3 py-1 rounded-full bg-green-500/10 text-green-400 text-xs font-medium">
                  限时优惠
                </span>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3 text-sm text-muted-light">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-400" />
                  现货供应 · 下单后 2-3 个工作日发货
                </div>
                <div className="flex items-center gap-3 text-sm text-muted-light">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-400" />
                  支持 7 天无理由退换
                </div>
                <div className="flex items-center gap-3 text-sm text-muted-light">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-400" />
                  整机 2 年质保
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-8 py-4 rounded-full bg-gradient-to-r from-primary to-accent text-white font-medium cursor-pointer"
                >
                  立即购买
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-8 py-4 rounded-full border border-border-light text-foreground font-medium hover:border-primary/50 transition-colors duration-300 cursor-pointer"
                >
                  加入购物车
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
