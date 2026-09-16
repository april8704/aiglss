'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, Sparkles, Zap, Shield } from 'lucide-react';

export function CTASection() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setEmail('');
      }, 3000);
    }
  };

  const perks = [
    { icon: Sparkles, text: '优先体验新功能' },
    { icon: Zap, text: '专属折扣与优惠' },
    { icon: Shield, text: '隐私安全保障' },
  ];

  return (
    <section className="py-24 md:py-40 relative overflow-hidden">
      {/* Rich layered background */}
      <div className="absolute inset-0">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-background via-surface to-background" />
        {/* Central radial glow */}
        <div
          className="gradient-orb w-[900px] h-[900px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          style={{ background: 'radial-gradient(circle, rgba(59,130,246,0.15) 0%, rgba(139,92,246,0.08) 40%, transparent 70%)' }}
        />
        {/* Accent orbs */}
        <div
          className="gradient-orb-reverse w-[400px] h-[400px] top-[20%] left-[10%]"
          style={{ background: 'radial-gradient(circle, rgba(139,92,246,0.12) 0%, transparent 70%)' }}
        />
        <div
          className="gradient-orb w-[350px] h-[350px] bottom-[10%] right-[10%]"
          style={{ background: 'radial-gradient(circle, rgba(59,130,246,0.10) 0%, transparent 70%)' }}
        />
        {/* Subtle grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />
        {/* Top & bottom edge fades */}
        <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-background to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
      </div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Decorative top badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex justify-center mb-8"
        >
          <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-primary/20 bg-primary/5 text-primary-light text-sm font-medium">
            <Sparkles className="w-4 h-4" />
            加入 50,000+ 订阅者
          </span>
        </motion.div>

        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-center"
        >
          <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 leading-[1.1]">
            准备好体验
            <br />
            <span className="text-gradient-primary">未来</span>了吗？
          </h2>
          <p className="text-muted-light text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
            订阅我们的最新动态，第一时间获取产品发布、技术突破和专属优惠信息。
          </p>
        </motion.div>

        {/* Subscription card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-xl mx-auto"
        >
          <div className={`relative rounded-2xl p-[1px] transition-all duration-500 ${
            isFocused
              ? 'bg-gradient-to-r from-primary via-accent to-primary shadow-2xl shadow-primary/20'
              : 'bg-border-light'
          }`}>
            <div className="rounded-2xl bg-surface-light/90 backdrop-blur-xl p-6 md:p-8">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                    placeholder="输入你的邮箱地址"
                    required
                    className="flex-1 px-5 py-4 rounded-xl bg-background/80 border border-border text-foreground placeholder:text-muted focus:outline-none focus:border-primary/40 transition-all duration-300 text-sm"
                  />
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className="px-8 py-4 rounded-xl bg-gradient-to-r from-primary to-accent text-white font-semibold text-sm flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-shadow duration-300"
                  >
                    {isSubmitted ? (
                      <>
                        <CheckCircle className="w-4 h-4" />
                        已订阅
                      </>
                    ) : (
                      <>
                        免费订阅
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </motion.button>
                </div>
              </form>

              {/* Perks row */}
              <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 mt-5 pt-5 border-t border-border/50">
                {perks.map((perk) => {
                  const Icon = perk.icon;
                  return (
                    <span key={perk.text} className="flex items-center gap-1.5 text-xs text-muted-light">
                      <Icon className="w-3.5 h-3.5 text-primary-light/70" />
                      {perk.text}
                    </span>
                  );
                })}
              </div>
            </div>
          </div>

          <p className="text-center mt-5 text-xs text-muted">
            我们尊重你的隐私，不会发送垃圾邮件。随时可以取消订阅。
          </p>
        </motion.div>
      </div>
    </section>
  );
}
