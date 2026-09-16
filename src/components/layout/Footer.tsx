'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Glasses, Globe, Rss, ArrowUpRight, Mail } from 'lucide-react';
import { footerLinks } from '@/lib/data';

export function Footer() {
  return (
    <footer className="relative overflow-hidden">
      {/* Decorative top border - animated gradient line */}
      <div className="h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

      {/* Subtle background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute w-[600px] h-[300px] -bottom-[150px] left-1/2 -translate-x-1/2"
          style={{ background: 'radial-gradient(ellipse, rgba(59,130,246,0.06) 0%, transparent 70%)' }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer */}
        <div className="py-16 md:py-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-4">
            <Link href="/" className="inline-flex items-center gap-2.5 mb-6 group">
              <div className="relative">
                <Glasses className="w-9 h-9 text-primary group-hover:text-accent transition-colors duration-500" />
                <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              <span className="font-display text-2xl font-bold tracking-tight">
                Vision<span className="text-gradient">X</span>
              </span>
            </Link>
            <p className="text-muted-light leading-relaxed mb-8 max-w-xs text-sm">
              VisionX 致力于打造下一代 AI 智能眼镜，让增强现实技术融入每个人的日常生活。
            </p>

            {/* Social links - more refined */}
            <div className="flex gap-3">
              {[
                { icon: Globe, label: '微博', href: '#' },
                { icon: Rss, label: '博客', href: '#' },
                { icon: Mail, label: '邮箱', href: 'mailto:contact@visionx.com' },
              ].map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    className="group/icon w-10 h-10 rounded-xl border border-border-light bg-surface-light/50 flex items-center justify-center text-muted hover:text-primary-light hover:border-primary/30 hover:bg-primary/5 transition-all duration-300"
                    aria-label={social.label}
                  >
                    <Icon className="w-4 h-4 transition-transform duration-300 group-hover/icon:scale-110" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Links Columns - staggered */}
          {Object.values(footerLinks).map((section, sectionIndex) => (
            <div key={section.title} className="lg:col-span-2">
              <h3 className="font-display font-semibold text-xs uppercase tracking-[0.2em] mb-6 text-foreground/70">
                {section.title}
              </h3>
              <ul className="space-y-3.5">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="group/link inline-flex items-center gap-1 text-muted-light hover:text-foreground transition-colors duration-300 text-sm"
                    >
                      {link.label}
                      <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-0.5 translate-x-[-2px] group-hover/link:opacity-50 group-hover/link:translate-y-0 group-hover/link:translate-x-0 transition-all duration-300" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Newsletter mini-form in footer */}
          <div className="lg:col-span-2">
            <h3 className="font-display font-semibold text-xs uppercase tracking-[0.2em] mb-6 text-foreground/70">
              保持联系
            </h3>
            <p className="text-muted text-xs leading-relaxed mb-4">
              订阅邮件，获取最新产品资讯。
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="邮箱地址"
                className="flex-1 min-w-0 px-3 py-2.5 rounded-l-lg bg-background/80 border border-border-light border-r-0 text-foreground placeholder:text-muted text-xs focus:outline-none focus:border-primary/40 transition-colors duration-300"
              />
              <button className="px-3 py-2.5 rounded-r-lg bg-primary/20 border border-primary/30 text-primary-light hover:bg-primary/30 transition-colors duration-300 cursor-pointer">
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar - refined */}
        <div className="border-t border-border/50 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-muted text-xs">
            <span>© {new Date().getFullYear()} VisionX.</span>
            <span className="hidden md:inline text-border-light">·</span>
            <span className="hidden md:inline">保留所有权利</span>
            <span className="hidden md:inline text-border-light">·</span>
            <span className="hidden md:inline">用 ❤️ 打造于深圳</span>
          </div>
          <div className="flex gap-6 text-xs text-muted">
            <a href="#" className="hover:text-muted-light transition-colors duration-300">隐私政策</a>
            <a href="#" className="hover:text-muted-light transition-colors duration-300">用户协议</a>
            <a href="#" className="hover:text-muted-light transition-colors duration-300">Cookie 设置</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
