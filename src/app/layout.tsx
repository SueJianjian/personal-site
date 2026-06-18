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

const siteUrl = "https://www.xiaosuzi1987.cc.cd";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "浮云阁 | 企业官网与展示页制作",
    template: "%s | 浮云阁",
  },
  description:
    "浮云阁提供企业官网、产品展示页、服务介绍页和联系表单制作，适合预算不高、想尽快上线的客户。",
  applicationName: "浮云阁",
  keywords: [
    "企业官网制作",
    "展示页制作",
    "官网搭建",
    "网站定制",
    "浮云阁",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "浮云阁 | 企业官网与展示页制作",
    description:
      "适合预算不高、想尽快上线的企业、门店和工作室。支持企业官网、产品展示页、服务介绍页制作。",
    url: siteUrl,
    siteName: "浮云阁",
    locale: "zh_CN",
    type: "website",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "浮云阁官网预览图",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "浮云阁 | 企业官网与展示页制作",
    description:
      "企业官网、展示页、服务页制作，适合想尽快上线的客户。",
    images: ["/opengraph-image"],
  },
  icons: {
    icon: "/icon",
    shortcut: "/icon",
    apple: "/icon",
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
