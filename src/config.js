import { config } from "dotenv";

config();

export default {
    port: process.env.PORT || 3000,
    server: process.env.SERVER || "",
    database: process.env.DATABASE || "",
    user: process.env.USER || "",
    password: process.env.PASSWORD || "",
    pool: {
    max: process.env.MAX || 10,
    min: process.env.MIN || 0,
    idleTimeoutMillis: process.env.IDLETIMEOUTMILLIS || 30000,
  },
  options: {
    encrypt: process.env.ENCRYPT || null,
    trustServerCertificate: process.env.TRUSTSERVERCERTIFICATE || null,
  }
};