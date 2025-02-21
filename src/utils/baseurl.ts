import { env } from "process";

export const  baseUrl = env.NEXT_PUBLIC_BASE_URL ?? "http://localhost:5050/dashboard/api/";
export const  storageUrl = process.env.NEXT_PUBLIC_STORAGE_URL ?? "http://localhost:5050/";