# 🏕 Camping Workshop Web App

เว็บแอปสำหรับค้นหาและแสดงที่ตั้งแคมป์ สร้างด้วย Next.js + Tailwind CSS + Prisma + Clerk Auth

---

## 🚀 Features

- Next.js 15 (App Router)
- React 18 / 19 (ดูหมายเหตุด้านล่าง)
- Tailwind CSS
- Prisma + PostgreSQL
- Clerk Authentication
- react-leaflet (แผนที่)
- SSR + Suspense + Dynamic Routing

---

## 📦 การติดตั้ง

### 1. โคลนโปรเจกต์


```bash
git clone https://github.com/your-username/camping-workshop.git
cd camping-workshop

npm install
npm install react-leaflet@4.2.1 --legacy-peer-deps
npm install react@latest react-dom@latest

npx shadcn@latest init -d
npx shadcn@latest add button

npm install prisma --save-dev
npm install @prisma/client
npx prisma init
npx prisma db push
npx prisma studio
npm install @supabase/supabase-js --legacy-peer-deps

npm run dev
