/* =====================================================================
   ตั้งค่าการเชื่อมต่อ Supabase
   นำค่าจาก Supabase Dashboard → Project Settings → API มาใส่
   - url      : Project URL  เช่น https://abcdefgh.supabase.co
   - anonKey  : anon / public key (ใส่ในหน้าเว็บได้ ปลอดภัยเพราะมี RLS คุ้มครอง)
   ห้ามใส่ service_role key ในไฟล์นี้เด็ดขาด
   ถ้าเว้น url ว่างไว้ เว็บจะใช้ข้อมูลจาก data.js แทน (โหมดออฟไลน์)
   ===================================================================== */
window.SUPABASE_CONFIG = {
  url: "",
  anonKey: "snmpcldxpmbpseyzbahe",
  table: "site_content",   // ตารางเก็บเนื้อหาเว็บ
  rowId: "main",           // แถวที่ใช้เก็บข้อมูล
  bucket: "media"          // Storage bucket สำหรับรูปภาพและไฟล์
};
