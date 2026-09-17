import type { Metadata } from 'next';
import { ContactForm } from '@/components/contact/ContactForm';
import { CompanyInfo } from '@/components/contact/CompanyInfo';

export const metadata: Metadata = {
  title: '联系我们',
  description: '有任何问题或建议？欢迎通过表单、电话或邮件联系 VisionX 团队。',
  openGraph: {
    title: '联系 VisionX',
    description: '随时欢迎与我们取得联系。',
  },
};

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0">
          <div
            className="gradient-orb w-[500px] h-[500px] top-0 right-0"
            style={{ background: 'radial-gradient(circle, rgba(249,115,22,0.10) 0%, transparent 70%)' }}
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-accent-light text-sm font-medium tracking-widest uppercase">
            联系我们
          </span>
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold mt-4 mb-6 tracking-tight">
            与我们<span className="text-gradient">对话</span>
          </h1>
          <p className="text-muted-light text-lg md:text-xl max-w-2xl mx-auto">
            无论是产品咨询、技术支持还是商务合作，我们都期待收到你的消息。
          </p>
        </div>
      </section>

      <div className="section-divider" />

      {/* Contact Content */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            <ContactForm />
            <CompanyInfo />
          </div>
        </div>
      </section>
    </>
  );
}
