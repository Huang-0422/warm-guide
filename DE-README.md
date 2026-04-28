# 银龄就医指南 - 数据库说明文档

## 一、数据库平台
本项目后端采用 **Supabase 云数据库**，无需本地部署，前端通过公开 API 直接读取数据。

- 项目地址：https://app.supabase.com/project/ddurkjatbkykogkurcyu
- 公开访问 Key：`你的 Publishable Key`（替换成你自己的）

---

## 二、核心数据表设计

### 1. `emergency_contacts`（紧急联系人表）
| 字段名 | 类型 | 说明 |
| :--- | :--- | :--- |
| `id` | int8 | 主键，自增 |
| `name` | text | 联系人姓名 |
| `relation` | text | 与老人的关系 |
| `phone` | text | 联系电话 |
| `user_phone` | text | 关联老人手机号（可选） |

### 2. `reminders`（用药提醒表）
| 字段名 | 类型 | 说明 |
| :--- | :--- | :--- |
| `id` | int8 | 主键，自增 |
| `medicine_name` | text | 药品名称 |
| `reminder_time` | text | 提醒时间（如 08:00） |
| `dose` | text | 剂量（如 1片） |
| `active` | bool | 是否启用提醒（默认 true） |
| `user_phone` | text | 关联老人手机号（可选） |

### 3. `visits`（就诊记录表）
| 字段名 | 类型 | 说明 |
| :--- | :--- | :--- |
| `id` | int8 | 主键，自增 |
| `dept` | text | 就诊科室 |
| `visit_date` | date | 就诊日期 |
| `doctor` | text | 接诊医生 |
| `diagnosis` | text | 诊断结果 |
| `user_phone` | text | 关联老人手机号（可选） |

---

## 三、数据初始化方法
1.  运行项目根目录下 `assets/data/database.sql` 文件，可一键创建三张表并插入测试数据。
2.  所有表已开启 RLS 公开读取权限，前端页面可直接访问。

---

## 四、前端数据读取方式
前端通过 Supabase JS SDK 直接调用 API，示例代码：
```javascript
// 初始化客户端
const supabase = window.supabase.createClient(
 'https://ddurkjatbkykogkurcyu.supabase.co', // 替换这里
'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRkdXJramF0Ymt5a29na3VyY3l1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzYzMzEwNDksImV4cCI6MjA5MTkwNzA0OX0.pDFHzoRzoTyP3fcQIMwZuVpriSxjMPWNAbhYuImUnDs';                    // 替换这里

);

// 读取紧急联系人
async function getContacts() {
  const { data } = await supabase.from("emergency_contacts").select("*");
  console.log(data);
}