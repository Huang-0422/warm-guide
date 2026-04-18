# 银龄就医指南 - 适老化智慧医疗辅助系统

> **计算机设计大赛 · 软件应用与开发类 · Web应用开发**

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Platform](https://img.shields.io/badge/platform-Web%20%7C%20Mobile-orange.svg)
![WCAG](https://img.shields.io/badge/WCAG-2.1%20AA-success.svg)
![Database](https://img.shields.io/badge/database-Supabase-brightgreen.svg)

---

## 📋 项目简介

**银龄就医指南**是一款专为65岁以上老年人设计的就医辅助Web应用。针对老年人就医过程中面临的 **“挂号难、流程繁、易迷路、紧急慌、记不住”** 五大痛点，提供**智能导诊、就医流程、院内导航、紧急联络、健康档案**五大核心功能，帮助老年人实现 **“从容就医、安心就诊”**。

本项目严格遵循 **WCAG 2.1 无障碍设计标准**，在视觉、交互、内容三个层面进行全面适老化改造，并接入 **Supabase 云数据库**实现数据多端同步，是真正“老年人能用、好用、爱用”的数字产品。

---

## 🎯 核心功能

### 1️⃣ 智能导诊 · 按图索骥
- **人体部位交互**：点击人体图上的部位（头、胸、腹、四肢），系统自动推荐对应科室
- **常见症状快捷入口**：提供高频症状标签，一键查询
- **科室说明**：展示科室诊疗范围，帮助老年人理解

### 2️⃣ 就医流程 · 步步为营
- **五步时间线**：从出门准备到取药回家，完整覆盖就医全流程
- **语音播报**：点击步骤或全局播报按钮，自动朗读流程指引（Web Speech API）
- **必备清单**：可勾选的出门物品清单，状态自动保存

### 3️⃣ 院内导航 · 一键引路
- **科室地图**：门诊楼1-3层平面图，科室位置一目了然
- **实时定位模拟**：支持手动设置当前位置，模拟导航体验
- **路线规划**：自动计算最优路径，显示距离和步行时间
- **语音指引**：一键播报导航路线，不识字也能用

### 4️⃣ 紧急联络 · 一键守护
- **联系人管理**：支持添加、删除、设为首选联系人
- **一键紧急呼叫**：优先拨打首选联系人，支持依次呼叫
- **数据持久化**：联系人信息云端同步，换手机不丢失

### 5️⃣ 健康档案 · 云端同步
- **就诊记录**：记录每次就诊的科室、日期、医生、诊断结果
- **用药提醒**：设置药品名称、服用时间、剂量
- **云端存储**：基于 Supabase 云数据库，数据多设备实时同步
- **离线可用**：网络异常时自动降级到本地存储

### 6️⃣ 适老化特色功能
- **动态天气健康提醒**：接入高德天气API，根据天气生成个性化健康建议
- **时间问候**：根据时间显示个性化健康问候语
- **触觉反馈**：关键操作触发设备震动（Vibration API）
- **大号弹窗**：重要信息使用大字弹窗，防止误操作
- **浏览器通知**：用药提醒支持系统通知（Notification API）

---

## 🏗️ 技术架构
SilverCare-Guide/
├── index.html # 首页入口（5功能卡片+动态天气）
├── README.md # 项目文档
├── assets/ # 静态资源
│ ├── css/
│ │ └── style.css # 全局适老化样式
│ ├── js/
│ │ ├── app.js # 核心交互逻辑
│ │ └── database.js # Supabase 数据库配置
│ └── images/ # 图片资源（预留）
└── pages/ # 功能子页面
├── guide.html # 智能导诊（人体图选科室）
├── process.html # 就医流程（语音播报+清单）
├── navigation.html # 院内导航（楼层地图+路线）
├── emergency.html # 紧急联系人（管理+呼叫）
└── records.html # 健康档案（就诊记录+云端同步）

### 技术栈

| 类别 | 技术 | 用途 |
|------|------|------|
| 前端框架 | 原生 HTML5 / CSS3 / JavaScript (ES6+) | 轻量、高兼容性 |
| 云数据库 | Supabase | 数据存储、实时同步 |
| 语音交互 | Web Speech API | 流程播报、导航指引 |
| 触觉反馈 | Vibration API | 操作确认反馈 |
| 系统通知 | Notification API | 用药提醒推送 |
| 本地存储 | Web Storage API | 离线数据备份 |
| 天气服务 | 高德天气 API | 动态健康提醒 |
| 响应式设计 | Viewport + Flex/Grid | 多端适配 |
| 无障碍标准 | WCAG 2.1 AA 级 | 适老化设计规范 |

---

## 💡 适老化设计亮点

### 视觉适老
| 设计要点 | 具体实现 | 标准依据 |
|----------|----------|----------|
| 高对比度 | 文字与背景对比度 ≥ 4.5:1 | WCAG 1.4.3 |
| 大字号 | 正文最小 18px，标题 28-36px | WCAG 1.4.4 |
| 大圆角 | 卡片圆角 24-48px，柔和视觉 | 适老化设计指南 |
| 暖色调 | 米白、浅蓝、浅绿等护眼配色 | 色彩心理学 |
| 大按钮 | 可点击区域最小 44×44px | iOS HIG / WCAG 2.5.5 |

### 交互适老
| 设计要点 | 具体实现 |
|----------|----------|
| 单击为主 | 杜绝双击操作，所有功能单击触发 |
| 触觉反馈 | 关键操作触发设备震动确认 |
| 防误触 | 重要操作二次确认弹窗 |
| 操作反馈 | 点击有缩放/变色效果，明确告知已触发 |
| 语音辅助 | 支持流程/导航语音播报，降低阅读负担 |

### 内容适老
| 设计要点 | 具体实现 |
|----------|----------|
| 口语化表达 | 避免专业术语，使用老年人易懂语言 |
| 分步指引 | 复杂流程拆解为简单步骤 |
| 图标辅助 | 每个功能配大号 Emoji 图标 |
| 即时提示 | 操作成功/失败都有明确反馈 |

---

## 🔧 运行说明

### 环境要求
- 现代浏览器（Chrome 70+ / Edge 80+ / Safari 12+）
- 建议使用移动设备或移动端模拟器获得最佳体验
- 云端功能需要网络连接

### 快速开始
1. 下载或克隆项目到本地
2. 使用 VS Code 打开项目文件夹
3. 右键 `index.html` → **"Open with Live Server"**
4. 或执行命令：`python -m http.server 8080`
5. 浏览器访问 `http://localhost:8080`

> **注意**：请勿直接双击 HTML 文件打开（会出现 `file://` 协议限制），必须使用 HTTP 服务器。

### Supabase 数据库配置（可选）
1. 注册 [Supabase](https://supabase.com) 账号
2. 创建新项目，选择 Tokyo 区域
3. 在 SQL Editor 中执行建表语句（见下文）
4. 复制 Project URL 和 anon key
5. 替换 `pages/records.html` 和 `assets/js/database.js` 中的配置

**建表 SQL：**
```sql
-- 就诊记录表
CREATE TABLE visits (
  id BIGSERIAL PRIMARY KEY,
  user_phone TEXT,
  dept TEXT NOT NULL,
  visit_date DATE NOT NULL,
  doctor TEXT,
  diagnosis TEXT,
  created_at TIMESTAMP DEFAULT NOW()
);

-- 用药提醒表
CREATE TABLE reminders (
  id BIGSERIAL PRIMARY KEY,
  user_phone TEXT,
  medicine_name TEXT NOT NULL,
  reminder_time TEXT NOT NULL,
  dose TEXT,
  active BOOLEAN DEFAULT true,
  created_at TIMESTAMP DEFAULT NOW()
);

-- 开启行级安全
ALTER TABLE visits ENABLE ROW LEVEL SECURITY;
ALTER TABLE reminders ENABLE ROW LEVEL SECURITY;

-- 创建访问策略
CREATE POLICY "允许所有操作" ON visits FOR ALL USING (true);
CREATE POLICY "允许所有操作" ON reminders FOR ALL USING (true);