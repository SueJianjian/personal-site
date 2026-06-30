import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://www.jcfuyunge.cc.cd";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "晋城浮云阁工作室 | 企业官网与展示页制作",
    template: "%s | 晋城浮云阁工作室",
  },
  description:
    "晋城浮云阁工作室提供企业官网、产品展示页、服务介绍页和联系表单制作，适合预算不高、想尽快上线的客户。",
  applicationName: "晋城浮云阁工作室",
  keywords: ["企业官网制作", "展示页制作", "官网搭建", "网站定制", "晋城浮云阁工作室"],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "晋城浮云阁工作室 | 企业官网与展示页制作",
    description:
      "适合预算不高、想尽快上线的企业、门店和工作室。支持企业官网、产品展示页、服务介绍页制作。",
    url: siteUrl,
    siteName: "晋城浮云阁工作室",
    locale: "zh_CN",
    type: "website",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "晋城浮云阁工作室官网预览图",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "晋城浮云阁工作室 | 企业官网与展示页制作",
    description: "企业官网、展示页、服务页制作，适合想尽快上线的客户。",
    images: ["/opengraph-image"],
  },
  icons: {
    icon: [
      { url: "/icon.png?v=2", type: "image/png", sizes: "512x512" },
    ],
    shortcut: "/icon.png?v=2",
    apple: "/apple-icon.png?v=2",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="zh-CN"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
