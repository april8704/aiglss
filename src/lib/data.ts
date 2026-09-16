import {
  Languages,
  Navigation,
  Mic,
  HeartPulse,
  Camera,
  Wifi,
  Battery,
  Cpu,
  Eye,
  Glasses,
  Zap,
  Shield,
} from 'lucide-react';
import type { ElementType } from 'react';

// ========================
// 导航数据
// ========================
export const navLinks = [
  { label: '首页', href: '/' },
  { label: '产品', href: '/products' },
  { label: '关于我们', href: '/about' },
  { label: '新闻动态', href: '/news' },
  { label: '联系我们', href: '/contact' },
];

// ========================
// 首页 - 产品特性
// ========================
export interface Feature {
  icon: ElementType;
  title: string;
  description: string;
}

export const features: Feature[] = [
  {
    icon: Languages,
    title: 'AI 实时翻译',
    description: '支持 36 种语言实时翻译，对话内容直接投射在镜片上，打破语言障碍，让沟通无界限。',
  },
  {
    icon: Navigation,
    title: '智能导航',
    description: 'AR 实景导航叠加在真实世界上，箭头指引方向，再也不用低头看手机地图。',
  },
  {
    icon: Mic,
    title: '语音助手',
    description: '内置 AI 语音助手，支持自然语言交互，一句话完成搜索、备忘、日程管理等操作。',
  },
  {
    icon: HeartPulse,
    title: '健康监测',
    description: '实时监测心率、血氧、紫外线指数，关注你的健康数据，异常时及时预警。',
  },
];

// ========================
// 首页 - 技术参数
// ========================
export interface TechStat {
  value: number;
  suffix: string;
  label: string;
}

export const techStats: TechStat[] = [
  { value: 12, suffix: '小时', label: '超长续航' },
  { value: 30, suffix: 'g', label: '极致轻量' },
  { value: 0.5, suffix: '秒', label: '响应速度' },
  { value: 36, suffix: '种', label: '翻译语言' },
];

export const techFeatures: string[] = [
  '高通骁龙 AR2 Gen 2 芯片',
  'Micro OLED 全彩显示屏',
  '6 麦克风阵列 · 降噪通话',
  'Wi-Fi 7 + 蓝牙 5.4',
  '磁吸无线快充',
  'IP54 防尘防水',
  '钛合金镜腿 · 可调节鼻托',
  '处方镜片兼容',
];

// ========================
// 首页 - 用户评价
// ========================
export interface Testimonial {
  name: string;
  role: string;
  content: string;
  rating: number;
  avatar: string;
}

export const testimonials: Testimonial[] = [
  {
    name: '张明远',
    role: '商务顾问',
    content: '出国谈判时实时翻译功能救了我无数次，对方说的每句话都清晰呈现在镜片上，沟通效率提升了300%。',
    rating: 5,
    avatar: '/api/placeholder/80/80',
  },
  {
    name: '李思涵',
    role: '自由摄影师',
    content: '30克的重量让我几乎感觉不到它的存在，AR导航在陌生城市拍摄时特别实用，再也不会迷路了。',
    rating: 5,
    avatar: '/api/placeholder/80/80',
  },
  {
    name: '王子轩',
    role: '软件工程师',
    content: '语音助手的识别准确率让我惊喜，骑车时说一句就能回消息、查天气，非常安全方便。',
    rating: 4,
    avatar: '/api/placeholder/80/80',
  },
  {
    name: '陈雨萱',
    role: '健身教练',
    content: '运动时实时显示心率和运动数据，不用再看手表，健康监测功能比我想象中好用太多了。',
    rating: 5,
    avatar: '/api/placeholder/80/80',
  },
  {
    name: '刘浩然',
    role: '大学教授',
    content: '在国际学术会议上使用实时翻译，能同步看到演讲者的发言翻译，学术交流变得轻松多了。',
    rating: 5,
    avatar: '/api/placeholder/80/80',
  },
];

// ========================
// 产品页 - 规格参数
// ========================
export interface ProductSpec {
  category: string;
  items: { label: string; value: string }[];
}

export const productSpecs: ProductSpec[] = [
  {
    category: '显示',
    items: [
      { label: '显示技术', value: 'Micro OLED' },
      { label: '分辨率', value: '1920 × 1080 / 单眼' },
      { label: '亮度', value: '2000 nits 峰值亮度' },
      { label: '视场角', value: '52°' },
    ],
  },
  {
    category: '处理器 & 存储',
    items: [
      { label: '芯片', value: '高通骁龙 AR2 Gen 2' },
      { label: '运行内存', value: '12GB LPDDR5X' },
      { label: '存储空间', value: '128GB UFS 4.0' },
      { label: 'AI 算力', value: '15 TOPS NPU' },
    ],
  },
  {
    category: '电池 & 充电',
    items: [
      { label: '电池容量', value: '800mAh · 分布式电池' },
      { label: '续航时间', value: '12 小时日常使用' },
      { label: '充电方式', value: '磁吸无线快充' },
      { label: '充电时间', value: '45 分钟 0-100%' },
    ],
  },
  {
    category: '连接 & 传感器',
    items: [
      { label: '无线连接', value: 'Wi-Fi 7 / 蓝牙 5.4' },
      { label: '定位', value: 'GPS / 北斗 / GLONASS' },
      { label: '摄像头', value: '1200 万像素超广角' },
      { label: '传感器', value: 'IMU / 环境光 / 接近 / PPG' },
    ],
  },
];

export interface ColorVariant {
  name: string;
  color: string;
  image: string;
}

export const colorVariants: ColorVariant[] = [
  { name: '星际黑', color: '#1a1a2e', image: '/api/placeholder/600/400' },
  { name: '月岩灰', color: '#4a4a5a', image: '/api/placeholder/600/400' },
  { name: '极光蓝', color: '#1e40af', image: '/api/placeholder/600/400' },
  { name: '钛金银', color: '#c0c0c0', image: '/api/placeholder/600/400' },
];

// ========================
// 关于我们 - 时间线
// ========================
export interface TimelineEvent {
  year: string;
  title: string;
  description: string;
}

export const timelineEvents: TimelineEvent[] = [
  {
    year: '2022',
    title: '公司成立',
    description: '怀揣着让 AI 融入日常生活的愿景，VisionX 在深圳正式成立。汇聚来自顶尖科技公司的核心团队，踏上了智能可穿戴的创业征程。',
  },
  {
    year: '2023',
    title: '首款原型机',
    description: '经过一年的潜心研发，首款 AI 智能眼镜原型机问世。在 CES 展会上首次亮相即获得 Best Innovation Award，引发行业关注。',
  },
  {
    year: '2024',
    title: 'A 轮融资',
    description: '完成 A 轮融资，获得红杉资本领投的 1 亿元投资。同年团队扩展至 200 人，在北京、上海设立研发中心。',
  },
  {
    year: '2025',
    title: '产品正式发布',
    description: 'VisionX One 正式发布，首月销量突破 10 万台。与全球 50+ 知名品牌达成合作，用户好评如潮。',
  },
  {
    year: '2026',
    title: '全球市场拓展',
    description: '业务拓展至东南亚、欧洲和北美市场。第二代产品 VisionX Pro 研发进入冲刺阶段，即将开启智能眼镜新纪元。',
  },
];

// ========================
// 关于我们 - 核心团队
// ========================
export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  avatar: string;
}

export const teamMembers: TeamMember[] = [
  {
    name: '林奕辰',
    role: '创始人 & CEO',
    bio: '前 Google AR 部门技术总监，斯坦福大学计算机科学博士，拥有 15 年 AR/VR 行业经验。',
    avatar: '/api/placeholder/200/200',
  },
  {
    name: '赵思远',
    role: 'CTO',
    bio: '前华为智能穿戴首席架构师，清华大学电子工程硕士，主导多款千万级出货量产品研发。',
    avatar: '/api/placeholder/200/200',
  },
  {
    name: '苏晓彤',
    role: '设计副总裁',
    bio: '前 Apple 工业设计师，RISD 工业设计硕士。主导 VisionX 全系列产品的外观与交互设计。',
    avatar: '/api/placeholder/200/200',
  },
  {
    name: '黄嘉伟',
    role: 'AI 研究负责人',
    bio: '前 DeepMind 高级研究员，北京大学人工智能博士，专注自然语言处理与计算机视觉。',
    avatar: '/api/placeholder/200/200',
  },
  {
    name: '吴雨桐',
    role: '市场副总裁',
    bio: '前字节跳动海外市场总监，拥有 10 年全球化品牌运营经验，主导 VisionX 全球市场战略。',
    avatar: '/api/placeholder/200/200',
  },
  {
    name: '陈昊轩',
    role: '供应链副总裁',
    bio: '前富士康高级副总裁，20 年消费电子供应链管理经验，确保产品品质与交付。',
    avatar: '/api/placeholder/200/200',
  },
];

// ========================
// 新闻数据
// ========================
export interface NewsArticle {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  coverImage: string;
  readTime: string;
}

export const newsArticles: NewsArticle[] = [
  {
    id: '1',
    slug: 'visionx-one-global-launch',
    title: 'VisionX One 全球发布：重新定义智能眼镜',
    excerpt: '历经三年研发，VisionX One 正式面向全球市场发布。搭载最新 AI 引擎，融合实时翻译、AR 导航等突破性功能。',
    category: '产品发布',
    date: '2025-12-15',
    coverImage: '/api/placeholder/800/450',
    readTime: '5 分钟',
  },
  {
    id: '2',
    slug: 'series-a-funding',
    title: '完成 A 轮 1 亿元融资，红杉资本领投',
    excerpt: 'VisionX 宣布完成 1 亿元 A 轮融资，由红杉资本领投，IDG 资本跟投，资金将用于产品研发和全球化拓展。',
    category: '公司动态',
    date: '2024-06-20',
    coverImage: '/api/placeholder/800/450',
    readTime: '3 分钟',
  },
  {
    id: '3',
    slug: 'ai-translation-breakthrough',
    title: 'AI 实时翻译技术突破：延迟降至 0.3 秒',
    excerpt: '我们的 AI 实时翻译引擎实现重大突破，翻译延迟从 1.2 秒降至 0.3 秒，准确率提升至 98.5%，支持语言增加至 36 种。',
    category: '技术创新',
    date: '2025-09-10',
    coverImage: '/api/placeholder/800/450',
    readTime: '7 分钟',
  },
  {
    id: '4',
    slug: 'ces-2024-award',
    title: '荣获 CES 2024 最佳创新奖',
    excerpt: 'VisionX 原型机在 CES 2024 上首次亮相即获得 Best Innovation Award，获得来自全球媒体和行业专家的高度评价。',
    category: '荣誉奖项',
    date: '2024-01-12',
    coverImage: '/api/placeholder/800/450',
    readTime: '4 分钟',
  },
  {
    id: '5',
    slug: 'global-expansion-2026',
    title: '2026 全球化战略：走向欧美与东南亚',
    excerpt: 'VisionX 公布 2026 年全球化战略规划，计划在东京、新加坡和柏林设立海外办公室，目标覆盖 30 个国家和地区。',
    category: '公司动态',
    date: '2026-03-01',
    coverImage: '/api/placeholder/800/450',
    readTime: '6 分钟',
  },
];

// ========================
// 联系页 - 主题选项
// ========================
export const contactSubjects = [
  '产品咨询',
  '售后服务',
  '商务合作',
  '媒体采访',
  '投资关系',
  '其他',
];

// ========================
// 页脚数据
// ========================
export const footerLinks = {
  product: {
    title: '产品',
    links: [
      { label: 'VisionX One', href: '/products' },
      { label: '配件商城', href: '#' },
      { label: '企业版', href: '#' },
      { label: '开发者平台', href: '#' },
    ],
  },
  support: {
    title: '支持',
    links: [
      { label: '帮助中心', href: '#' },
      { label: '保修政策', href: '#' },
      { label: '维修服务', href: '#' },
      { label: '用户社区', href: '#' },
    ],
  },
  company: {
    title: '公司',
    links: [
      { label: '关于我们', href: '/about' },
      { label: '新闻动态', href: '/news' },
      { label: '加入我们', href: '#' },
      { label: '联系我们', href: '/contact' },
    ],
  },
};
