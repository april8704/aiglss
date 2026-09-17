'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0">
        <div
          className="gradient-orb w-[600px] h-[600px] -top-[200px] -right-[100px]"
          style={{ background: 'radial-gradient(circle, rgba(59,130,246,0.3) 0%, transparent 70%)' }}
        />
        <div
          className="gradient-orb-reverse w-[500px] h-[500px] top-[60%] -left-[100px]"
          style={{ background: 'radial-gradient(circle, rgba(249,115,22,0.20) 0%, transparent 70%)' }}
        />
        <div
          className="gradient-orb-pulse w-[400px] h-[400px] top-[30%] left-[50%]"
          style={{ background: 'radial-gradient(circle, rgba(59,130,246,0.15) 0%, transparent 70%)' }}
        />
        {/* Grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border-light bg-surface-light/50 mb-8"
            >
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-sm text-muted-light">新一代 AI 智能眼镜已发布</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="font-display text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight leading-[1.05] mb-6"
            >
              重新定义
              <br />
              <span className="text-gradient">你看世界</span>
              <br />
              的方式
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-muted-light text-lg md:text-xl leading-relaxed mb-10 max-w-lg"
            >
              VisionX One —— 搭载前沿 AI 引擎，集实时翻译、AR 导航、语音助手于一身。
              仅重 30 克，12 小时超长续航，让智能无处不在。
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-wrap gap-4"
            >
              <Button variant="primary" size="lg" href="/products">
                探索产品
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <Button variant="secondary" size="lg">
                <Play className="w-4 h-4 mr-2" />
                观看演示
              </Button>
            </motion.div>
          </div>

          {/* Product Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative flex items-center justify-center"
          >
            <div className="relative w-full max-w-lg mx-auto">
              {/* Glow behind image */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 blur-3xl rounded-full scale-75" />
              {/* Product image placeholder */}
              <div className="relative aspect-square rounded-3xl overflow-hidden border border-border-light bg-surface-light/30 backdrop-blur-sm flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-48 h-48 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                    <svg width="120" height="60" viewBox="0 0 120 60" fill="none" className="text-primary-light">
                      <path d="M10 30C10 15 20 5 35 5H45C50 5 55 10 55 15V20C55 25 50 30 45 30H35C20 30 10 30 10 30Z" stroke="currentColor" strokeWidth="2" fill="none"/>
                      <path d="M110 30C110 15 100 5 85 5H75C70 5 65 10 65 15V20C65 25 70 30 75 30H85C100 30 110 30 110 30Z" stroke="currentColor" strokeWidth="2" fill="none"/>
                      <line x1="55" y1="17" x2="65" y2="17" stroke="currentColor" strokeWidth="2"/>
                      <circle cx="35" cy="17" r="8" stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.5"/>
                      <circle cx="85" cy="17" r="8" stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.5"/>
                    </svg>
                  </div>
                  <p className="text-muted text-sm">VisionX One · AI 智能眼镜</p>
                </div>
              </div>

              {/* Floating badges */}
              <motion.div
                animate={{ y: [-5, 5, -5] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-4 -right-4 glass-card rounded-xl px-4 py-3"
              >
                <div className="text-xs text-muted-light">AI 翻译</div>
                <div className="text-sm font-semibold text-primary-light">36 种语言</div>
              </motion.div>

              <motion.div
                animate={{ y: [5, -5, 5] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -bottom-4 -left-4 glass-card rounded-xl px-4 py-3"
              >
                <div className="text-xs text-muted-light">续航</div>
                <div className="text-sm font-semibold text-accent-light">12 小时</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
