import type { Metadata } from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'VisionX - AI 智能眼镜 | 重新定义你看世界的方式',
    template: '%s | VisionX',
  },
  description: 'VisionX 是新一代 AI 智能眼镜品牌，搭载实时翻译、AR 导航、语音助手等前沿功能。仅重 30g，12 小时续航，让智能融入生活。',
  keywords: ['AI 智能眼镜', 'AR 眼镜', '增强现实', '智能穿戴', 'VisionX'],
  openGraph: {
    title: 'VisionX - AI 智能眼镜',
    description: '重新定义你看世界的方式。搭载前沿 AI 引擎的智能眼镜。',
    type: 'website',
    locale: 'zh_CN',
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="zh-CN" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="min-h-screen flex flex-col antialiased">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
