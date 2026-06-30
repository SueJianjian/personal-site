# 晋城浮云阁工作室官网

这是一个基于 `Next.js 16` 和 `Tailwind CSS 4` 的单页官网项目，用来展示“晋城浮云阁工作室”的企业官网 / 展示页制作服务。

## 本地运行

```bash
npm install
npm run dev
```

浏览器打开 `http://localhost:3000`。

## 已完成内容

- 首页首屏展示
- 服务内容区块
- 适合行业区块
- 制作流程区块
- 案例展示区块
- 联系方式和底部 CTA

## 主要文件

- `src/app/page.tsx`：页面结构和主要文案
- `src/app/globals.css`：全局样式和首页视觉效果
- `src/app/layout.tsx`：页面元信息

## 当前联系信息

- 邮箱：`jcfuyunge@163.com`
- 微信：`JCFuYunGe`
- 电话：`18035638273`
- 抖音：`66466905135`

## 修改方式

如果要改文案、品牌名、联系方式，优先修改 `src/app/page.tsx` 顶部的内容配置。

如果要改视觉样式、颜色、阴影、设备展示效果，修改 `src/app/globals.css`。

## 部署到 Vercel

最简单的部署流程：

1. 把项目推到 GitHub
2. 打开 [Vercel](https://vercel.com)
3. 导入这个 GitHub 仓库
4. Framework Preset 选择 `Next.js`
5. 点击 `Deploy`

部署完成后，Vercel 会自动给你一个可访问的网址。

如果后面买了域名，可以在 Vercel 项目里绑定自定义域名。
