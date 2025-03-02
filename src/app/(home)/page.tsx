import { cva } from "class-variance-authority";
import { Heart, type LucideIcon, MousePointer, Terminal } from "lucide-react";
import {
  BatteryChargingIcon,
  CpuIcon,
  FileEditIcon,
  FileTextIcon,
  KeyboardIcon,
  LayoutIcon,
  LibraryIcon,
  PaperclipIcon,
  PersonStandingIcon,
  RocketIcon,
  SearchIcon,
  TimerIcon,
  ChevronsLeftRightEllipsis,
} from "lucide-react";
import { File, Files, Folder } from "fumadocs-ui/components/files";
import Link from "next/link";
import type { HTMLAttributes, ReactNode } from "react";
import Image from "next/image";
import { cn } from "@/lib/cn";
import { buttonVariants } from "@/components/ui/button";
import { CodeBlock } from "@/components/code-block";
import { UwuHero } from "@/app/(home)/uwu";
import SourceImage from "@/public/source.png";
import ContributorCounter from "@/components/contributor-count";
import { Calendar } from "@/components/ui/calendar";
import {
  CreateAppAnimation,
  PreviewImages,
  WhyInteractive,
} from "./page.client";
import {
  VercelLogo,
  NetlifyLogo,
  DiscordLogo,
  XiaohongshuLogo,
  GithubLogo,
  DeepseekLogo,
  OpenAILogo,
  QwenIcon,
  OllamaLogo,
  JinaLogo,
} from "@/components/icons";
import ArchImg from "./arch.png";
import { TypeTable } from "fumadocs-ui/components/type-table";
import { ChatExampleAnimation } from "./page.client";
// import { owner, repo } from "@/lib/github";

const badgeVariants = cva(
  "inline-flex size-7 items-center justify-center rounded-full bg-fd-primary font-medium text-fd-primary-foreground"
);

export default function Page() {
  const gridColor =
    "color-mix(in oklab, var(--color-fd-primary) 10%, transparent)";

  return (
    <>
      <div
        className="absolute inset-x-0 top-[360px] h-[250px] max-md:hidden"
        style={{
          background: `repeating-linear-gradient(to right, ${gridColor}, ${gridColor} 1px,transparent 1px,transparent 50px), repeating-linear-gradient(to bottom, ${gridColor}, ${gridColor} 1px,transparent 1px,transparent 50px)`,
        }}
      />
      <main className="container relative max-w-[1100px] px-2 py-4 z-[2] lg:py-8">
        <div
          style={{
            background:
              "repeating-linear-gradient(to bottom, transparent, color-mix(in oklab, var(--color-fd-primary) 1%, transparent) 500px, transparent 1000px)",
          }}
        >
          <div className="relative">
            <Hero />
            <UwuHero />
          </div>
          <Feedback />
          <Introduction />
          <Architecture />
          <div
            className="relative overflow-hidden border-x border-t px-8 py-16 sm:py-24"
            style={{
              backgroundImage:
                "radial-gradient(circle at center, var(--color-fd-secondary), var(--color-fd-background) 40%)",
            }}
          >
            <h2 className="text-center text-2xl font-semibold sm:text-3xl">
              用户友好
              <br />
              从用户思维出发，做您最贴心的助手
            </h2>
          </div>
          <Features />

          {/* <Contributing /> */}
          <End />
        </div>
      </main>
    </>
  );
}

function Architecture() {
  return (
    <div className="flex flex-col gap-4 border-x border-t px-8 py-16 md:py-24 lg:flex-row md:px-12">
      <div className="shrink-0 flex-1 text-start">
        <p className="px-2 py-1 text-sm font-mono bg-fd-primary text-fd-primary-foreground font-bold w-fit mb-4">
          数据加密
        </p>
        <h2 className="text-xl font-semibold mb-4 sm:text-2xl">
          隐私安全优先原则
        </h2>
        <p className="text-fd-muted-foreground mb-6">
          平台中所有与用户相关的数据，都会进行加密存储，确保用户数据的安全性。记忆中支持数据脱敏语法，与AI交互过程中抹去私密信息但不丢失上下文。
          <br />
          <br />
          通过私有化部署支持基于Ollama的本地模型访问。
        </p>
        <div className="flex flex-row items-center font-mono -mx-4">
          <a
            href="https://github.com/fuma-nama/fumadocs-basehub"
            rel="noreferrer noopener"
            target="_blank"
            className={cn(buttonVariants({ variant: "link" }))}
          >
            使用云服务
          </a>
          <a
            href="https://github.com/fuma-nama/fumadocs-sanity"
            rel="noreferrer noopener"
            target="_blank"
            className={cn(buttonVariants({ variant: "link" }))}
          >
            本地部署
          </a>
        </div>
      </div>
      <Image
        src={ArchImg}
        alt="Architecture"
        className="md:-mt-20 ms-auto w-full max-w-[450px] invert dark:invert-0"
      />
    </div>
  );
}

async function Why() {
  return (
    <div className="relative overflow-hidden border-x border-t px-8 py-12 md:py-16 md:min-h-[500px]">
      <WhyInteractive
        typeTable={
          <TypeTable
            type={{
              name: {
                type: "string",
                description: "The name of player",
                default: "hello",
              },
              code: {
                type: "string",
                description: (
                  <CodeBlock
                    lang="ts"
                    code='console.log("Hello World")'
                  />
                ),
              },
            }}
          />
        }
        codeblockSearchRouter={
          <CodeBlock
            lang="ts"
            code={`import { source } from '@/lib/source';
import { createFromSource } from 'fumadocs-core/search/server';
 
export const { GET } = createFromSource(source);`}
          />
        }
        codeblockTheme={
          <CodeBlock
            lang="css"
            code={`@import 'tailwindcss';
@import 'fumadocs-ui/css/neutral.css';
@import 'fumadocs-ui/css/preset.css';

@source '../node_modules/fumadocs-ui/dist/**/*.js';`}
          />
        }
        codeblockInteractive={
          <CodeBlock
            lang="tsx"
            code={`import { File, Folder, Files } from 'fumadocs-ui/components/files';
 
<Files>
  <Folder name="app" defaultOpen>
    <File name="layout.tsx" />
    <File name="page.tsx" />
    <File name="global.css" />
  </Folder>
  <File name="package.json" />
</Files>`}
          />
        }
        codeblockMdx={
          <CodeBlock
            lang="tsx"
            code={`import { db } from '@/server/db';

export function ProductTable() {
  const products = db.getProducts()
    
  return (
    <ul>
      {products.map(product => <li key={product.key}>{product.name}</li>)}
    </ul>
  );
}

## Products

<ProductTable />`}
          />
        }
      />
    </div>
  );
}

function End() {
  return (
    <div className="grid grid-cols-1 border-b border-r md:grid-cols-2 lg:grid-cols-3">
      <div className="relative flex flex-col gap-8 overflow-hidden border-l border-t p-8">
        <h2 className="text-3xl font-extrabold font-mono uppercase text-fd-muted-foreground/50">
          构建第二大脑
        </h2>
        <ul className="mt-2 flex flex-col gap-6">
          <li>
            <span className="flex flex-row items-center gap-2 font-medium">
              <BatteryChargingIcon className="size-5" />
              近乎无限量的记忆
            </span>
            <span className="mt-2 text-sm text-fd-muted-foreground">
              低成本高价值的人工智能助理
            </span>
          </li>
          <li>
            <span className="flex flex-row items-center gap-2 font-medium">
              <TimerIcon className="size-5" />
              24小时待命
            </span>
            <span className="mt-2 text-sm text-fd-muted-foreground">
              全天24小时待命，随叫随到
            </span>
          </li>
          <li>
            <span className="flex flex-row items-center gap-2 font-medium">
              <GithubLogo className="size-5" />
              开源版本
            </span>
            <span className="mt-2 text-sm text-fd-muted-foreground">
              免费的开源版本，Apache 2.0 协议
            </span>
          </li>
        </ul>
        <div className="flex flex-row flex-wrap gap-2 border-t pt-4">
          <Link
            href="/docs"
            className={cn(buttonVariants())}
          >
            浏览文档
          </Link>
          <a
            href="https://githubbox.com/fuma-nama/fumadocs-ui-template"
            rel="noreferrer noopener"
            className={cn(
              buttonVariants({
                variant: "outline",
              })
            )}
          >
            Open in CodeSandbox
          </a>
        </div>
      </div>
      <Integration className="border-t lg:col-span-2" />
    </div>
  );
}

const linkItemVariants = cva("transition-colors hover:bg-fd-muted");

function Integration({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>): React.ReactElement {
  return (
    <div
      className={cn(
        "relative grid grid-cols-2 *:border-l *:border-t *:p-6 lg:grid-cols-3",
        className
      )}
      {...props}
    >
      <div className="col-span-full flex items-center">
        <span className="text-sm  font-medium">
          我们将在以下社区与用户相见，期待大家的宝贵意见。同时我们的基础功能代码保持开源，系统更透明。
        </span>
      </div>
      <Link
        href="/docs/ui/openapi"
        className={cn(linkItemVariants())}
      >
        <XiaohongshuLogo className="mb-3 size-12" />
        <p className="text-lg font-medium">小红书</p>
        <p className="text-sm text-fd-muted-foreground">@QkaAI，中国用户社群</p>
      </Link>
      <Link
        href="/docs/mdx"
        className={cn(linkItemVariants())}
      >
        <DiscordLogo className="mb-3 size-12" />
        <p className="text-lg font-medium">Discord</p>
        <p className="text-sm text-fd-muted-foreground">国际用户社群</p>
      </Link>
      <Link
        href="/docs/headless/content-collections"
        className={cn(linkItemVariants(), "col-span-2 lg:col-span-1")}
      >
        <GithubLogo className="mb-3 size-12" />
        <p className="text-lg font-medium">Github</p>
        <p className="text-sm text-fd-muted-foreground">开发者社区</p>
      </Link>

      <div className="relative col-span-full h-[200px] overflow-hidden bg-gradient-to-b from-fd-primary/10">
        <div
          className="mx-auto size-[500px] rounded-full"
          style={{
            backgroundImage:
              "radial-gradient(circle at 0% 100%, transparent 60%, var(--color-fd-primary))",
          }}
        />
      </div>
    </div>
  );
}

const searchItemVariants = cva(
  "flex flex-row items-center gap-2 rounded-md p-2 text-sm text-fd-popover-foreground"
);

function Search(): React.ReactElement {
  return (
    <div className="mt-6 rounded-lg bg-gradient-to-b from-fd-border p-px">
      <div className="flex select-none flex-col rounded-[inherit] bg-gradient-to-b from-fd-popover">
        <div className="inline-flex items-center gap-2 px-4 py-2 text-sm text-fd-muted-foreground">
          <SearchIcon className="size-4" />
          Search...
        </div>
        <div className="border-t p-2">
          {[
            "Getting Started",
            "Components",
            "MDX Content",
            "User Guide",
            "Javascript SDK",
          ].map((v, i) => (
            <div
              key={v}
              className={cn(
                searchItemVariants({
                  className: i === 0 ? "bg-fd-accent" : "",
                })
              )}
            >
              <FileTextIcon className="size-4 text-fd-muted-foreground" />
              {v}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function Highlights(): React.ReactElement {
  return (
    <div className="grid grid-cols-1 border-r md:grid-cols-2 lg:grid-cols-3">
      <div className="col-span-full flex flex-row items-start justify-center border-l border-t p-8 pb-2 text-center">
        <h2 className="bg-fd-primary text-fd-primary-foreground px-1 text-2xl font-semibold">
          Highlights
        </h2>
        <MousePointer className="-ml-1 mt-8" />
      </div>
      <Highlight
        icon={RocketIcon}
        heading="Light and Fast."
      >
        Powerful documentation site with Next.js App Router.
      </Highlight>
      <Highlight
        icon={TimerIcon}
        heading="Performance."
      >
        Less client components, less Javascript, optimized images.
      </Highlight>
      <Highlight
        icon={LayoutIcon}
        heading="Accessibility & UX first."
      >
        Focus on user experience and accessibility.
      </Highlight>
      <Highlight
        icon={SearchIcon}
        heading="Syntax Highlighting."
      >
        Beautiful syntax highlighter, powered by{" "}
        <a
          href="https://shiki.style"
          rel="noreferrer noopener"
        >
          Shiki
        </a>
        .
      </Highlight>
      <Highlight
        icon={KeyboardIcon}
        heading="Automation."
      >
        Useful remark/rehype plugins. Typescript Twoslash, OpenAPI docs
        generation, and more.
      </Highlight>
      <Highlight
        icon={PersonStandingIcon}
        heading="Personalized."
      >
        Advanced options for customising your theme in a comfortable way.
      </Highlight>
    </div>
  );
}

function Highlight({
  icon: Icon,
  heading,
  children,
}: {
  icon: LucideIcon;
  heading: ReactNode;
  children: ReactNode;
}): React.ReactElement {
  return (
    <div className="border-l border-t px-6 py-12">
      <div className="mb-4 flex flex-row items-center gap-2 text-fd-muted-foreground">
        <Icon className="size-4" />
        <h2 className="text-sm font-medium">{heading}</h2>
      </div>
      <span className="font-medium">{children}</span>
    </div>
  );
}

function Hero() {
  return (
    <div className="relative z-[2] flex flex-col border-x border-t bg-fd-card/80 px-6 pt-12 max-md:text-center md:px-12 md:pt-16 [.uwu_&]:hidden max-lg:overflow-hidden">
      <h1 className="mb-8 text-4xl font-medium md:hidden">构建个人第二大脑</h1>
      <h1 className="mb-8 max-w-[600px] text-4xl font-medium max-md:hidden">
        一个开箱即用，轻量且强大的记忆体构建平台。
      </h1>
      <p className="mb-8 text-fd-muted-foreground md:max-w-[80%] md:text-xl">
        开源的 LLM
        记忆体应用，提供了一种极简的方式来构建个人的第二“大脑”。基于记忆的AI聊天，叠加多种智能体为您的生活减负提效。
      </p>
      <div className="inline-flex items-center gap-3 max-md:mx-auto">
        <Link
          href="/docs/ui"
          className={cn(
            buttonVariants({ size: "lg", className: "rounded-full" })
          )}
        >
          快速开始
        </Link>
        <a
          href="https://githubbox.com/fuma-nama/fumadocs-ui-template"
          target="_blank"
          rel="noreferrer noopener"
          className={cn(
            buttonVariants({
              size: "lg",
              variant: "outline",
              className: "rounded-full bg-fd-background",
            })
          )}
        >
          Github
        </a>
      </div>
      <PreviewImages />
    </div>
  );
}

function Feedback() {
  return (
    <div className="relative flex flex-col items-center overflow-hidden border-x border-t px-6 py-8 md:py-16">
      <div
        className="absolute inset-x-0 bottom-0 z-[-1] h-24 opacity-30 duration-1000 animate-in fade-in"
        style={{
          maskImage: "linear-gradient(to bottom,transparent,white)",
          backgroundImage:
            "linear-gradient(to right, #4ebfff, transparent, #e92a67)",
        }}
      />
      <p className="text-center font-medium text-fd-muted-foreground">
        欢迎用户提供使用案例
      </p>

      <div className="mt-6 rounded-xl border bg-gradient-to-b from-secondary p-4 shadow-lg">
        <p className="text-sm font-medium">
          {`"A gorgeous documentation framework that composes beautifully into the
          App Router."`}
        </p>
        <div className="mt-4 flex flex-row items-center gap-2">
          <Image
            src="https://avatars.githubusercontent.com/u/35677084"
            alt="avatar"
            width="32"
            height="32"
            className="size-8 rounded-full"
          />
          <div>
            <a
              href="https://shew.dev"
              rel="noreferrer noopener"
              className="text-sm font-medium"
            >
              Anthony Shew
            </a>
            <p className="text-xs text-fd-muted-foreground">
              Turbo DX at Vercel
            </p>
          </div>
          <Link
            href="/showcase"
            className={cn(
              buttonVariants({ variant: "outline", className: "ml-auto" })
            )}
          >
            Showcase
          </Link>
        </div>
      </div>
    </div>
  );
}

function Introduction(): React.ReactElement {
  return (
    <div className="grid grid-cols-1 border-r md:grid-cols-2">
      <div className="flex flex-col gap-2 border-l border-t px-6 py-12 md:py-16">
        <h3 className="text-xl font-semibold">记忆存储</h3>
        <p className="mb-8 text-fd-muted-foreground">
          您可以将您的记忆永久保存，不再丢失。
        </p>
        <CreateAppAnimation />
      </div>
      <div className="flex flex-col gap-2 border-l border-t px-6 py-12 md:py-16">
        {/* <div className={cn(badgeVariants())}>2</div> */}
        <h3 className="text-xl font-semibold">与记忆交互</h3>
        <p className="text-fd-muted-foreground">通过AI与您的记忆进行交互。</p>
        <div className="relative flex flex-col">
          <ChatExampleAnimation />
        </div>
      </div>
      <div className="col-span-full flex flex-col items-center gap-2 border-l border-t px-6 py-16 text-center">
        <h3 className="text-2xl font-semibold">多供应商支持</h3>
        <p className="text-fd-muted-foreground">
          多供应商支持，选择更多，系统更强大。
        </p>

        <div className="mt-4 flex flex-row flex-wrap items-center gap-8">
          <DeepseekLogo className="size-14" />
          <QwenIcon className="size-14" />
          <OllamaLogo className="size-14" />
          <OpenAILogo className="size-14" />
          <JinaLogo className="size-14" />
        </div>
      </div>
    </div>
  );
}

function Features() {
  return (
    <div className="grid grid-cols-1 border-r md:grid-cols-2">
      <Feature
        icon={PaperclipIcon}
        subheading="日志记录"
        heading="每日生活与工作的草稿纸"
        description={
          <>
            <span className="font-medium text-fd-foreground">
              提供近31天的日志记录功能:{" "}
            </span>
            <span>
              草稿纸功能，智能提取Todo List，可通过 工作助理 Agent
              总结每日、周、月生活与工作中的点点滴滴。
            </span>
          </>
        }
        className="overflow-hidden"
        style={{
          backgroundImage:
            "radial-gradient(circle at 60% 50%,var(--color-fd-secondary),var(--color-fd-background) 80%)",
        }}
      >
        <div className="flex justify-center mt-4 w-full h-full">
          <Calendar />
        </div>
      </Feature>

      <Feature
        icon={CpuIcon}
        subheading="多样的智能体"
        heading="逐步迭代的智能体 AI Agent"
        description="多样的智能体，解决生活中方方面面的需求。"
      >
        <div className="mt-8 flex flex-col gap-4">
          <Link
            href="/docs/ui"
            className="rounded-xl bg-gradient-to-br from-transparent via-fd-primary p-px shadow-lg shadow-fd-primary/20"
          >
            <div className="rounded-[inherit] bg-fd-background bg-gradient-to-br from-transparent via-fd-primary/10 p-4 transition-colors hover:bg-fd-muted">
              <LayoutIcon />
              <h3 className="font-semibold">工作助理</h3>
              <p className="text-sm text-fd-muted-foreground">
                可以通过阅读用户的日记，帮助用户总结工作待办项与工作进度。
              </p>
            </div>
          </Link>
          <Link
            href="/docs/headless"
            className="rounded-xl border bg-fd-background p-4 shadow-lg transition-colors hover:bg-fd-muted"
          >
            <LibraryIcon />
            <h3 className="font-semibold">管家</h3>
            <p className="text-sm text-fd-muted-foreground">
              家庭助理，可以帮您记录任何与清单相关的内容。
            </p>
          </Link>
        </div>
      </Feature>
      <Feature
        icon={Terminal}
        subheading="Fumadocs CLI"
        heading="The Shadcn UI for docs"
        description="Fumadocs CLI creates interactive components for your docs, offering a rich experience to your users."
      >
        <CodeBlock
          code="npx fumadocs add accordion"
          lang="bash"
          wrapper={{
            title: "Terminal",
            allowCopy: false,
            className: "backdrop-blur-sm",
          }}
        />
      </Feature>
      <Feature
        icon={ChevronsLeftRightEllipsis}
        subheading="开放API"
        heading="方便用户与任意终端集成"
        description="提供全方位API，方便用户在不同设备不同应用中管理记忆。"
      >
        <div className="mt-6 rounded-lg bg-gradient-to-b from-fd-border p-px">
          <div className="flex select-none flex-col rounded-[inherit] bg-gradient-to-b from-fd-popover">
            <div className="inline-flex items-center gap-2 px-4 py-2 text-sm text-fd-muted-foreground">
              <ChevronsLeftRightEllipsis className="size-4" />
              Api Docs
            </div>
            <div className="border-t p-2">
              {[
                "List Knowledges",
                "Put Knowledge",
                "Update Knowledge",
                "Put File Task",
                "List User Spaces",
              ].map((v, i) => (
                <div
                  key={v}
                  className={cn(
                    searchItemVariants({
                      className: i === 0 ? "bg-fd-accent" : "",
                    })
                  )}
                >
                  <FileTextIcon className="size-4 text-fd-muted-foreground" />
                  {v}
                </div>
              ))}
            </div>
          </div>
        </div>
      </Feature>
    </div>
  );
}

function Feature({
  className,
  icon: Icon,
  heading,
  subheading,
  description,
  ...props
}: HTMLAttributes<HTMLDivElement> & {
  icon: LucideIcon;
  subheading: ReactNode;
  heading: ReactNode;
  description: ReactNode;
}): React.ReactElement {
  return (
    <div
      className={cn("border-l border-t px-6 py-12 md:py-16", className)}
      {...props}
    >
      <div className="mb-4 inline-flex items-center gap-2 text-sm font-medium text-fd-muted-foreground">
        <Icon className="size-4" />
        <p>{subheading}</p>
      </div>
      <h2 className="mb-2 text-lg font-semibold">{heading}</h2>
      <p className="text-fd-muted-foreground">{description}</p>

      {props.children}
    </div>
  );
}
