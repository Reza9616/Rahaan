// lib/db.ts
import * as sql from "mssql";
console.log("DB_SERVER:", process.env.DB_SERVER);
console.log("DB_USER:", process.env.DB_USER);
console.log("DB_NAME:", process.env.DB_NAME);
const config: sql.config = {
  user: process.env.DB_USER!,
  password: process.env.DB_PASSWORD!,
  server: String(process.env.DB_SERVER!),
  database: process.env.DB_NAME!,
  options: {
    encrypt: false,
    trustServerCertificate: true,
  },
  pool: {
    max: 10,
    min: 0,
    idleTimeoutMillis: 30000,
  },
};

let pool: sql.ConnectionPool | null = null;

export async function getDB(): Promise<sql.ConnectionPool> {
  if (pool) return pool;
  try {
    pool = await sql.connect(config);
    console.log("✅ Connected to SQL Server");
    return pool;
  } catch (error) {
    console.error("❌ SQL Server connection error:", error);
    throw error;
  }
}
