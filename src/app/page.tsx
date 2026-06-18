import Image from "next/image";

type Service = {
  title: string;
  description: string[];
  icon: "design" | "mobile" | "form" | "cloud";
};

type Industry = {
  title: string;
  icon: "home" | "camera" | "team" | "cap" | "globe" | "factory" | "pin";
  tone: string;
};

type Step = {
  number: string;
  title: string;
  description: string[];
};

type CaseItem = {
  title: string;
  audience: string;
  summary: string;
  tags: string[];
  tone: string;
};

type ContactItem = {
  label: string;
  value: string;
  href?: string;
};

const siteContent = {
  brand: {
    title: "浮云阁",
    slogan: "企业官网 / 展示页制作",
  },
  hero: {
    title: ["专业定制官网", "让你的业务更有信任感"],
    lines: [
      "适合预算不高、想尽快上线的企业、门店和工作室。",
      "页面重点清晰，先把你的业务、服务和联系方式展示明白。",
      "有参考网站的话，直接发我，我可以先帮你估一个大概价格。",
    ],
    primaryCta: "查看方案",
    secondaryCta: "立即咨询",
  },
  summary: {
    title: "适合想尽快上线、先把官网做出来的客户",
    text: "如果你需要一个干净、专业、能展示业务并接住咨询的官网，这种方式会更适合。先把页面做出来上线，再根据实际需求逐步补案例、文章和细节内容。",
  },
  contact: {
    title: "直接联系我",
    lead: "想做企业官网、展示页或服务介绍页，可以直接加我微信、发邮件，或者把参考网站发给我。",
    email: "xiaosuzi1987@gmail.com",
    contacts: [
      { label: "微信", value: "suxiaojian0828" },
      { label: "电话", value: "18035638273", href: "tel:18035638273" },
      { label: "抖音", value: "29919058295" },
      {
        label: "邮箱",
        value: "xiaosuzi1987@gmail.com",
        href: "mailto:xiaosuzi1987@gmail.com",
      },
    ] satisfies ContactItem[],
    primary: "发邮件咨询",
    secondary: "查看方案",
    wechatTitle: "扫码加微信更直接",
    wechatText: "如果你已经有想法、文案或参考网站，直接加微信发我会更快。",
  },
  footer: [
    { title: "沟通直接", text: "需求明确后再开始做，避免反复修改。" },
    { title: "页面实用", text: "优先展示业务重点和联系方式，不堆花哨内容。" },
    { title: "方便上线", text: "适合先上线使用，再逐步完善文案和案例。" },
  ],
};

const services: Service[] = [
  {
    title: "公司官网",
    description: ["展示公司介绍、业务范围", "建立基础信任感"],
    icon: "design",
  },
  {
    title: "产品展示页",
    description: ["突出产品卖点", "适合单独介绍产品或业务"],
    icon: "mobile",
  },
  {
    title: "服务介绍页",
    description: ["把服务内容和流程讲清楚", "方便客户快速了解"],
    icon: "form",
  },
  {
    title: "联系表单",
    description: ["支持咨询收集", "兼顾手机端浏览和使用"],
    icon: "cloud",
  },
];

const industries: Industry[] = [
  { title: "小公司", icon: "home", tone: "from-stone-200 to-stone-400" },
  { title: "工作室", icon: "camera", tone: "from-zinc-500 to-zinc-800" },
  { title: "门店服务", icon: "pin", tone: "from-slate-300 to-slate-700" },
  { title: "培训机构", icon: "cap", tone: "from-cyan-700 to-slate-900" },
  { title: "工厂制造", icon: "factory", tone: "from-gray-300 to-gray-600" },
  { title: "外贸业务", icon: "globe", tone: "from-sky-500 to-blue-900" },
  { title: "咨询展示", icon: "team", tone: "from-stone-300 to-stone-700" },
];

const steps: Step[] = [
  { number: "01", title: "沟通需求", description: ["了解行业和用途", "确认页面方向"] },
  { number: "02", title: "整理方案", description: ["确定结构和重点", "确认展示逻辑"] },
  { number: "03", title: "页面制作", description: ["完成页面开发", "处理手机端适配"] },
  { number: "04", title: "测试调整", description: ["检查细节问题", "修改不合适的部分"] },
  { number: "05", title: "上线交付", description: ["部署上线", "后续可继续补充内容"] },
];

const cases: CaseItem[] = [
  {
    title: "企业展示型官网",
    audience: "适合：小公司、工厂、咨询类业务",
    summary:
      "重点把公司介绍、业务范围、服务优势、合作流程和联系方式展示清楚。适合客户先建立品牌形象，再逐步补案例和文章内容。",
    tags: ["首页 + 关于 + 服务 + 联系方式", "适合先上线", "建立基础信任"],
    tone: "from-[#e8f1ff] to-[#f8fbff]",
  },
  {
    title: "产品展示型页面",
    audience: "适合：外贸、单品展示、招商推广",
    summary:
      "围绕某个产品或业务单独做展示页，集中讲卖点、参数、适用场景和合作方式。方便发给客户查看，也适合后续配合推广使用。",
    tags: ["产品卖点展示", "适合单页转化", "手机端友好"],
    tone: "from-[#eef7ff] to-[#ffffff]",
  },
  {
    title: "服务介绍型页面",
    audience: "适合：门店、工作室、培训、本地服务",
    summary:
      "把服务项目、适合人群、价格范围、咨询方式整理成一页，客户一看就知道你做什么、怎么联系你，减少来回解释成本。",
    tags: ["服务说明清楚", "咨询入口明确", "适合接单展示"],
    tone: "from-[#edf4ff] to-[#f8fbff]",
  },
];

function SectionTitle({ title, id }: { title: string; id?: string }) {
  return (
    <div id={id} className="mb-10 text-center">
      <h2 className="text-3xl font-semibold tracking-tight text-[#161616] sm:text-5xl">
        {title}
      </h2>
      <div className="mx-auto mt-5 h-1 w-14 rounded-full bg-[#2d7dff]" />
    </div>
  );
}

function Icon({ type }: { type: Service["icon"] | Industry["icon"] }) {
  const common = "h-14 w-14 text-[#2d7dff]";
  const white = "h-10 w-10 text-white";

  switch (type) {
    case "design":
      return (
        <svg viewBox="0 0 64 64" className={common} fill="none" stroke="currentColor" strokeWidth="2.8">
          <rect x="10" y="14" width="28" height="36" rx="4" />
          <path d="M23 46h20a4 4 0 0 0 4-4V24" />
          <path d="M28 22 48 8a4 4 0 0 1 5 6L33 34l-9 2 2-9Z" />
        </svg>
      );
    case "mobile":
      return (
        <svg viewBox="0 0 64 64" className={common} fill="none" stroke="currentColor" strokeWidth="2.8">
          <rect x="19" y="8" width="26" height="48" rx="5" />
          <path d="M28 15h8" />
          <circle cx="32" cy="48" r="1.8" fill="currentColor" stroke="none" />
        </svg>
      );
    case "form":
      return (
        <svg viewBox="0 0 64 64" className={common} fill="none" stroke="currentColor" strokeWidth="2.8">
          <rect x="12" y="12" width="40" height="40" rx="4" />
          <path d="M22 24h20M22 32h20M22 40h12" />
          <circle cx="44" cy="40" r="5" />
          <path d="m48 44 6 6" />
        </svg>
      );
    case "cloud":
      return (
        <svg viewBox="0 0 64 64" className={common} fill="none" stroke="currentColor" strokeWidth="2.8">
          <path d="M22 48h22a10 10 0 0 0 1-20 14 14 0 0 0-27-4A10 10 0 0 0 22 48Z" />
          <path d="m32 24 0 18M24 34l8 8 8-8" />
        </svg>
      );
    case "home":
      return (
        <svg viewBox="0 0 64 64" className={white} fill="none" stroke="currentColor" strokeWidth="2.8">
          <path d="M12 30 32 14l20 16" />
          <path d="M18 28v22h28V28" />
          <path d="M27 50V36h10v14" />
        </svg>
      );
    case "camera":
      return (
        <svg viewBox="0 0 64 64" className={white} fill="none" stroke="currentColor" strokeWidth="2.8">
          <rect x="12" y="20" width="40" height="26" rx="4" />
          <path d="M22 20 26 14h12l4 6" />
          <circle cx="32" cy="33" r="8" />
        </svg>
      );
    case "team":
      return (
        <svg viewBox="0 0 64 64" className={white} fill="none" stroke="currentColor" strokeWidth="2.8">
          <circle cx="24" cy="26" r="7" />
          <circle cx="41" cy="28" r="6" />
          <path d="M12 48c2-7 8-11 15-11s13 4 15 11" />
          <path d="M37 48c1-4 4-7 8-8 4 1 7 4 8 8" />
        </svg>
      );
    case "cap":
      return (
        <svg viewBox="0 0 64 64" className={white} fill="none" stroke="currentColor" strokeWidth="2.8">
          <path d="M8 25 32 14l24 11-24 11Z" />
          <path d="M18 31v8c0 4 7 8 14 8s14-4 14-8v-8" />
          <path d="M56 26v12" />
        </svg>
      );
    case "globe":
      return (
        <svg viewBox="0 0 64 64" className={white} fill="none" stroke="currentColor" strokeWidth="2.8">
          <circle cx="32" cy="32" r="18" />
          <path d="M14 32h36M32 14a28 28 0 0 1 0 36M32 14a28 28 0 0 0 0 36" />
        </svg>
      );
    case "factory":
      return (
        <svg viewBox="0 0 64 64" className={white} fill="none" stroke="currentColor" strokeWidth="2.8">
          <path d="M10 50V28l14 8V28l14 8V18l16 10v22Z" />
          <path d="M18 50V38M30 50V42M42 50V36M52 50V40" />
        </svg>
      );
    case "pin":
      return (
        <svg viewBox="0 0 64 64" className={white} fill="none" stroke="currentColor" strokeWidth="2.8">
          <path d="M32 54s14-14 14-25a14 14 0 1 0-28 0c0 11 14 25 14 25Z" />
          <circle cx="32" cy="29" r="5" />
        </svg>
      );
  }
}

export default function Home() {
  return (
    <main className="overflow-x-hidden bg-white text-[#1a1a1a]">
      <section className="hero-section relative overflow-hidden">
        <div className="hero-blur hero-blur-left" />
        <div className="hero-blur hero-blur-right" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:120px_120px] opacity-20" />
        <div className="mx-auto max-w-7xl px-6 pb-14 pt-6 sm:px-10 lg:px-12 lg:pb-20">
          <header className="flex items-start justify-between gap-6 text-white">
            <div>
              <p className="text-3xl font-extrabold tracking-tight">{siteContent.brand.title}</p>
              <p className="mt-2 text-sm font-medium text-white/85">{siteContent.brand.slogan}</p>
            </div>
            <nav className="hidden items-center gap-10 pt-2 text-lg font-medium lg:flex">
              {["首页", "服务内容", "适合行业", "制作流程", "成交页展示", "联系我们"].map(
                (item, index) => (
                  <a
                    key={item}
                    href={
                      index === 0
                        ? "#"
                        : ["#services", "#industries", "#process", "#cases", "#contact"][
                            index - 1
                          ]
                    }
                    className={`relative transition hover:text-white/90 ${
                      index === 0 ? "text-white" : "text-white/90"
                    }`}
                  >
                    {item}
                    {index === 0 ? (
                      <span className="absolute left-1/2 top-[calc(100%+12px)] h-1 w-10 -translate-x-1/2 rounded-full bg-[#5ca2ff]" />
                    ) : null}
                  </a>
                ),
              )}
            </nav>
          </header>

          <div className="grid items-center gap-12 pt-14 lg:grid-cols-[0.95fr_1.05fr] lg:pt-20">
            <div className="max-w-2xl text-white">
              <h1 className="text-5xl font-black leading-[1.1] tracking-tight sm:text-6xl lg:text-7xl">
                {siteContent.hero.title[0]}
                <br />
                {siteContent.hero.title[1]}
              </h1>
              <div className="mt-10 space-y-4 text-xl leading-10 text-white/88">
                {siteContent.hero.lines.map((line) => (
                  <p key={line}>{line}</p>
                ))}
              </div>
              <div className="mt-12 flex flex-col gap-5 sm:flex-row">
                <a
                  className="inline-flex h-16 items-center justify-center gap-4 rounded-full bg-[linear-gradient(90deg,#1b76ff,#48a1ff)] px-10 text-xl font-semibold shadow-[0_18px_40px_rgba(34,115,255,0.3)] transition hover:translate-y-[-1px] hover:shadow-[0_24px_52px_rgba(34,115,255,0.36)]"
                  href="#cases"
                >
                  <span>{siteContent.hero.primaryCta}</span>
                  <span aria-hidden="true">→</span>
                </a>
                <a
                  className="inline-flex h-16 items-center justify-center gap-4 rounded-full bg-white px-10 text-xl font-semibold text-[#1b58d6] shadow-[0_16px_38px_rgba(17,43,97,0.24)] transition hover:translate-y-[-1px] hover:bg-[#f7fbff]"
                  href="#contact"
                >
                  <span>{siteContent.hero.secondaryCta}</span>
                  <span className="flex h-8 w-8 items-center justify-center rounded-full border border-[#d7e5ff] text-base font-semibold">
                    ⌁
                  </span>
                </a>
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-[760px]">
              <div className="laptop-shell mx-auto aspect-[1.25/1] w-full rounded-[2rem] border border-white/20 bg-[linear-gradient(180deg,rgba(11,38,95,0.82),rgba(16,62,140,0.78))] p-4 shadow-[0_30px_80px_rgba(4,18,52,0.45)] backdrop-blur-sm sm:p-5">
                <div className="overflow-hidden rounded-[1.5rem] border border-white/15 bg-[#f5f8ff] shadow-[inset_0_1px_0_rgba(255,255,255,0.24)]">
                  <div className="flex items-center justify-between bg-[#1658c5] px-5 py-3 text-sm font-semibold text-white">
                    <span>BRAND</span>
                    <div className="hidden gap-5 text-[11px] text-white/85 sm:flex">
                      <span>首页</span>
                      <span>关于我们</span>
                      <span>服务项目</span>
                      <span>案例展示</span>
                      <span>联系我们</span>
                    </div>
                  </div>
                  <div className="flex h-[240px] flex-col justify-center bg-[linear-gradient(135deg,rgba(9,35,86,0.96),rgba(19,79,160,0.72))] px-6 text-white sm:h-[290px] sm:px-10">
                    <p className="text-3xl font-bold sm:text-5xl">专注品质 · 用心服务</p>
                    <p className="mt-4 max-w-md text-sm text-white/80 sm:text-base">
                      把官网做成真正能展示业务、建立信任和承接咨询的门面。
                    </p>
                    <div className="mt-6">
                      <span className="inline-flex rounded-full bg-[#2f86ff] px-5 py-2 text-sm font-semibold">
                        了解更多
                      </span>
                    </div>
                  </div>
                  <div className="grid grid-cols-4 gap-3 bg-white px-4 py-6 sm:px-8">
                    {services.map((service) => (
                      <div
                        key={service.title}
                        className="rounded-2xl border border-[#eff3fb] bg-[#fbfdff] px-3 py-4 text-center shadow-[0_8px_18px_rgba(43,100,190,0.05)]"
                      >
                        <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-[#eef5ff] text-[#2d7dff]">
                          <Icon type={service.icon} />
                        </div>
                        <p className="text-xs font-semibold text-[#2f3137]">{service.title}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="laptop-base mx-auto h-5 w-[82%] rounded-b-[999px] bg-[linear-gradient(180deg,#e7ebf2,#b8c1d3)] shadow-[0_16px_28px_rgba(0,0,0,0.28)]" />

              <div className="phone-shell absolute bottom-[-4%] right-[-2%] w-[28%] min-w-[140px] rounded-[2rem] border-4 border-[#0b1220] bg-[#f8fbff] p-2 shadow-[0_24px_60px_rgba(9,20,57,0.38)]">
                <div className="mx-auto mb-2 h-4 w-16 rounded-full bg-[#0b1220]" />
                <div className="overflow-hidden rounded-[1.4rem] border border-[#e9eef8]">
                  <div className="bg-[#1658c5] px-4 py-3 text-sm font-bold text-white">BRAND</div>
                  <div className="bg-[linear-gradient(135deg,rgba(9,35,86,0.96),rgba(19,79,160,0.72))] px-4 py-6 text-white">
                    <p className="text-base font-bold">专注品质 · 用心服务</p>
                    <div className="mt-4 inline-flex rounded-full bg-[#2f86ff] px-3 py-1.5 text-xs font-semibold">
                      了解更多
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-2 bg-white p-3">
                    {services.map((service) => (
                      <div key={service.title} className="rounded-xl border border-[#eef2f8] p-2 text-center">
                        <div className="mx-auto flex h-8 w-8 items-center justify-center rounded-full bg-[#eef5ff] text-[#2d7dff]">
                          <Icon type={service.icon} />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-14 sm:px-10 lg:px-12">
        <div className="rounded-[2rem] border border-[#d8e5ff] bg-[linear-gradient(180deg,#f8fbff,#eef5ff)] px-6 py-8 shadow-[0_16px_50px_rgba(47,94,174,0.08)] sm:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#2d7dff]">适合对象</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[#172033] sm:text-4xl">
            {siteContent.summary.title}
          </h2>
          <p className="mt-4 max-w-4xl text-lg leading-8 text-[#566273]">
            {siteContent.summary.text}
          </p>
        </div>
      </section>

      <section id="services" className="mx-auto max-w-7xl px-6 py-18 sm:px-10 lg:px-12 lg:py-24">
        <SectionTitle title="可提供的服务" />
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {services.map((service) => (
            <article
              key={service.title}
              className="rounded-[1.8rem] border border-[#e8eff9] bg-white px-8 py-10 text-center shadow-[0_10px_40px_rgba(47,94,174,0.06)]"
            >
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-[1.4rem] bg-[#f4f9ff]">
                <Icon type={service.icon} />
              </div>
              <h3 className="mt-8 text-[2rem] font-semibold tracking-tight text-[#1e1f23]">
                {service.title}
              </h3>
              <div className="mt-5 space-y-2 text-lg leading-8 text-[#6b7280]">
                {service.description.map((line) => (
                  <p key={line}>{line}</p>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="industries" className="section-soft">
        <div className="mx-auto max-w-7xl px-6 py-18 sm:px-10 lg:px-12 lg:py-24">
          <SectionTitle title="适合行业" />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-7">
            {industries.map((industry) => (
              <article
                key={industry.title}
                className={`industry-card bg-gradient-to-br ${industry.tone}`}
              >
                <div className="industry-overlay" />
                <div className="relative z-10 flex h-full flex-col justify-between">
                  <div className="flex justify-end">
                    <Icon type={industry.icon} />
                  </div>
                  <h3 className="text-3xl font-semibold text-white drop-shadow-[0_4px_16px_rgba(0,0,0,0.28)]">
                    {industry.title}
                  </h3>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="process" className="mx-auto max-w-7xl px-6 py-18 sm:px-10 lg:px-12 lg:py-24">
        <SectionTitle title="制作流程" />
        <div className="relative mt-4 grid gap-10 md:grid-cols-5">
          <div className="process-line hidden md:block" />
          {steps.map((step) => (
            <article key={step.number} className="relative text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#2d7dff] text-2xl font-bold text-white shadow-[0_10px_25px_rgba(45,125,255,0.28)]">
                {step.number}
              </div>
              <h3 className="mt-8 text-[2rem] font-semibold tracking-tight text-[#1f2023]">
                {step.title}
              </h3>
              <div className="mt-4 space-y-2 text-lg leading-8 text-[#6b7280]">
                {step.description.map((line) => (
                  <p key={line}>{line}</p>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="cases" className="section-soft">
        <div className="mx-auto max-w-7xl px-6 py-18 sm:px-10 lg:px-12 lg:py-24">
          <SectionTitle title="成交页展示" />
          <div className="grid gap-6 lg:grid-cols-3">
            {cases.map((item) => (
              <article
                key={item.title}
                className={`rounded-[2rem] border border-[#dfe9fb] bg-gradient-to-br ${item.tone} p-8 shadow-[0_16px_50px_rgba(43,94,184,0.08)] transition hover:translate-y-[-4px] hover:shadow-[0_24px_64px_rgba(43,94,184,0.14)]`}
              >
                <div className="case-screen flex h-56 items-end rounded-[1.5rem] p-6 text-white">
                  <div>
                    <p className="text-sm uppercase tracking-[0.22em] text-white/70">
                      {item.audience}
                    </p>
                    <h3 className="mt-3 text-3xl font-semibold">{item.title}</h3>
                  </div>
                </div>
                <p className="mt-6 text-lg leading-8 text-[#5f6b7b]">{item.summary}</p>
                <div className="mt-6 flex flex-wrap gap-3">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-[#cfe0ff] bg-white px-4 py-2 text-sm font-medium text-[#2567d8]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-10 sm:px-10 lg:px-12">
        <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="grid gap-6 sm:grid-cols-2">
            {siteContent.contact.contacts.map((item) => (
              <a
                key={item.label}
                href={item.href ?? "#contact"}
                className="rounded-[1.5rem] border border-[#dbe8ff] bg-white px-6 py-6 shadow-[0_12px_36px_rgba(43,94,184,0.08)] transition hover:translate-y-[-2px]"
              >
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#2d7dff]">
                  {item.label}
                </p>
                <p className="mt-4 text-2xl font-semibold tracking-tight text-[#182233]">
                  {item.value}
                </p>
              </a>
            ))}
          </div>

          <div className="rounded-[1.8rem] border border-[#dbe8ff] bg-[linear-gradient(180deg,#ffffff,#f5f9ff)] p-6 shadow-[0_16px_40px_rgba(43,94,184,0.1)]">
            <p className="text-sm font-semibold uppercase tracking-[0.26em] text-[#2d7dff]">
              WeChat
            </p>
            <h3 className="mt-4 text-3xl font-semibold tracking-tight text-[#182233]">
              {siteContent.contact.wechatTitle}
            </h3>
            <p className="mt-4 text-lg leading-8 text-[#5d6b7e]">
              {siteContent.contact.wechatText}
            </p>
            <div className="mt-6 flex items-center gap-6">
              <div className="overflow-hidden rounded-[1.5rem] border border-[#dbe8ff] bg-white shadow-[0_12px_30px_rgba(43,94,184,0.08)]">
                <Image
                  src="/wechat-qr.jpg"
                  alt="浮云阁微信二维码"
                  width={220}
                  height={220}
                  className="h-56 w-56 object-cover"
                  priority
                />
              </div>
              <div className="space-y-3">
                <p className="text-sm uppercase tracking-[0.2em] text-[#6d7f95]">微信号</p>
                <p className="text-2xl font-semibold text-[#182233]">suxiaojian0828</p>
                <p className="text-base leading-7 text-[#607085]">
                  扫码添加微信，方便直接发需求、文案和参考网站。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-18 sm:px-10 lg:px-12 lg:pb-24">
        <div
          id="contact"
          className="rounded-[2rem] bg-[linear-gradient(90deg,#1b76ff,#2f90ff)] px-6 py-8 text-white shadow-[0_24px_70px_rgba(32,105,236,0.24)] sm:px-10 lg:px-14 lg:py-10"
        >
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex items-start gap-5">
              <div className="flex h-22 w-22 shrink-0 items-center justify-center rounded-full bg-white text-[#2a7cff] shadow-[0_10px_24px_rgba(255,255,255,0.24)]">
                <svg viewBox="0 0 64 64" className="h-11 w-11" fill="none" stroke="currentColor" strokeWidth="2.6">
                  <path d="M16 20h24a10 10 0 0 1 10 10v2a10 10 0 0 1-10 10H28l-10 8v-8h-2A10 10 0 0 1 6 32v-2a10 10 0 0 1 10-10Z" />
                  <circle cx="22" cy="31" r="2.5" fill="currentColor" stroke="none" />
                  <circle cx="32" cy="31" r="2.5" fill="currentColor" stroke="none" />
                  <circle cx="42" cy="31" r="2.5" fill="currentColor" stroke="none" />
                </svg>
              </div>
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-white/78">
                  Contact
                </p>
                <h3 className="mt-3 text-4xl font-semibold tracking-tight">
                  {siteContent.contact.title}
                </h3>
                <p className="mt-4 max-w-2xl text-xl leading-9 text-white/92">
                  {siteContent.contact.lead}
                </p>
                <p className="mt-4 text-lg text-white/88">
                  微信：suxiaojian0828 / 电话：18035638273 / 抖音：29919058295
                </p>
                <p className="mt-2 text-lg text-white/88">{siteContent.contact.email}</p>
              </div>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row">
              <a
                href={`mailto:${siteContent.contact.email}`}
                className="inline-flex h-16 items-center justify-center gap-3 rounded-2xl bg-white px-9 text-xl font-semibold text-[#2a74ee] transition hover:bg-[#f3f7ff]"
              >
                <span>⌁</span>
                <span>{siteContent.contact.primary}</span>
              </a>
              <a
                href="#cases"
                className="inline-flex h-16 items-center justify-center gap-3 rounded-2xl border border-white/60 px-9 text-xl font-semibold text-white transition hover:bg-white/10"
              >
                <span>⇪</span>
                <span>{siteContent.contact.secondary}</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-[#061a42] text-white">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 py-10 text-center sm:px-10 md:grid-cols-3 lg:px-12">
          {siteContent.footer.map((item) => (
            <div key={item.title}>
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full border border-white/18 bg-white/6">
                <span className="text-xl text-white/88">◌</span>
              </div>
              <p className="text-2xl font-semibold">{item.title}</p>
              <p className="mt-3 text-lg text-white/72">{item.text}</p>
            </div>
          ))}
        </div>
      </footer>
    </main>
  );
}
