'use client';

import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const contactInfo = [
  {
    icon: MapPin,
    title: '公司地址',
    details: ['深圳市南山区科技园', '创新大厦 A 栋 28 层'],
  },
  {
    icon: Phone,
    title: '联系电话',
    details: ['400-888-6688', '+86 755-8888-6688'],
  },
  {
    icon: Mail,
    title: '电子邮箱',
    details: ['contact@visionx.com', 'support@visionx.com'],
  },
  {
    icon: Clock,
    title: '营业时间',
    details: ['周一至周五：9:00 - 18:00', '周末与节假日：休息'],
  },
];

export function CompanyInfo() {
  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h3 className="font-display text-2xl font-bold mb-4">联系方式</h3>
        <p className="text-muted-light leading-relaxed mb-8">
          欢迎通过以下方式联系我们，无论是产品咨询、商务合作还是技术支持，
          我们的团队随时为你服务。
        </p>
      </motion.div>

      <div className="space-y-6">
        {contactInfo.map((info, index) => {
          const Icon = info.icon;
          return (
            <motion.div
              key={info.title}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="flex gap-4"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Icon className="w-5 h-5 text-primary-light" />
              </div>
              <div>
                <h4 className="font-medium text-sm mb-1">{info.title}</h4>
                {info.details.map((detail) => (
                  <p key={detail} className="text-muted-light text-sm">{detail}</p>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Map placeholder */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="mt-8 aspect-[4/3] rounded-2xl border border-border bg-surface-light/30 flex items-center justify-center"
      >
        <div className="text-center">
          <MapPin className="w-8 h-8 text-muted mx-auto mb-2" />
          <p className="text-muted text-sm">地图加载区域</p>
        </div>
      </motion.div>
    </div>
  );
}
