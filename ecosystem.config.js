module.exports = {
  apps: [
    {
      name: "rahaan",
      script: "npm",
      args: "run start",
      cwd: "C:\\RahaanWeb\\newRahaan\\newrahaan",
      interpreter: "cmd.exe",
      env: {
        NODE_ENV: "production",      
        PORT: 3000       
      },
      watch: false,                    
      autorestart: true,  
      max_memory_restart: "512M", 
      error_file: "logs/rahaan-error.log",
      out_file: "logs/rahaan-out.log",
      time: true 
    }
  ]
};
