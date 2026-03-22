import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {
  title: "智具集 · AI工具交换平台",
  description: "发现 & 分享普通人也能用的AI工具。无需Git，一键上传你的Claude/通义/Coze小作品。",
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-CN" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
