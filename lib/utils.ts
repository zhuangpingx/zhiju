import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
export function cn(...inputs: ClassValue[]) { return twMerge(clsx(inputs)); }
export function formatCount(n: number): string {
  if (n >= 10000) return (n / 10000).toFixed(1) + "万";
  if (n >= 1000) return (n / 1000).toFixed(1) + "k";
  return String(n);
}
export function timeAgo(dateStr: string): string {
  const diff = Date.now() - new Date(dateStr).getTime();
  const m = Math.floor(diff / 60000);
  if (m < 1) return "刚刚";
  if (m < 60) return m + "分钟前";
  const h = Math.floor(m / 60);
  if (h < 24) return h + "小时前";
  return Math.floor(h / 24) + "天前";
}
export const TYPE_COLOR: Record<string, string> = {
  "提示词": "#a78bfa", "网页工具": "#60a5fa",
  "Python脚本": "#34d399", "Coze/Dify工作流": "#fb923c", "其他": "#94a3b8",
};
export const TRIAL_LIMIT_FREE = 10;
export const TRIAL_LIMIT_LOGIN = 30;
