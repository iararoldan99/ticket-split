import dotenv from 'dotenv';
dotenv.config();

export const PORT = process.env.PORT || 5000;
export const MONGO_URI =
  process.env.MONGO_URI || "mongodb://localhost/ticket-split";
export const TOKEN_SECRET = process.env.JWT_SECRET || "secret";

export const FRONTEND_URL = process.env.FRONTEND_URL || "http://localhost:3000";
