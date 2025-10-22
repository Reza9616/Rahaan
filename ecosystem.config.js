module.exports = {
  apps: [
    {
      name: "rahaan",                   // اسم اپ در PM2
      script: "npm",                    // فرمان اصلی برای اجرا
      args: "run start",                // آرگومان برای npm
      cwd: "C:\\RahaanWeb\\newRahaan\\newrahaan", // مسیر پوشه‌ی پروژه
      interpreter: "cmd.exe",           // مخصوص ویندوز تا npm درست کار کنه
      env: {
        NODE_ENV: "production",         // محیط اجرا
        PORT: 3000                      // پورتی که سایت بالا میاد
      },
      watch: false,                     // برای حالت production نیازی نیست
      autorestart: true,                // اگه ارور بده خودش ری‌استارت میشه
      max_memory_restart: "512M",       // ری‌استارت اگه حافظه بالا رفت
      error_file: "logs/rahaan-error.log", // مسیر لاگ خطاها
      out_file: "logs/rahaan-out.log",     // مسیر لاگ خروجی
      time: true                        // زمان رو کنار لاگ‌ها نشون میده
    }
  ]
};
