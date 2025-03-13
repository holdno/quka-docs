"use client";

import {
  useEffect,
  useState,
  Fragment,
  type ReactElement,
  type HTMLAttributes,
  type ReactNode,
  type HTMLProps,
} from "react";
import { TerminalIcon, Send } from "lucide-react";
import Link from "next/link";
import scrollIntoView from "scroll-into-view-if-needed";
import { cn } from "@/lib/cn";
import { Button, buttonVariants } from "@/components/ui/button";
import Image from "next/image";
import MainImg from "./main.png";
import { cva } from "class-variance-authority";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

export function ChatExampleAnimation() {
  const timer = 500;
  const [input, setInput] = useState("");
  const inputLength = input.trim().length;

  const [isSelect, setIsSelect] = useState(false);
  useEffect(() => {
    if (isSelect) {
      return;
    }

    const a = setTimeout(() => {
      setIsSelect(true);
    }, timer);
    return () => {
      clearTimeout(a);
    };
  }, [isSelect]);

  const [messages, setMessages] = useState([
    {
      role: "user",
      content: "帮我看下我上次报名的家具展会是什么时候开始？",
    },
    {
      role: "agent",
      content:
        "根据您的记忆信息，您报名的【XX家博会厦门站】将于2月28日在厦门国际会展中心开展。您的参会码为：XXXX-XXXX-XXXX。",
    },
  ]);

  return (
    <>
      <div
        className="relative"
        onMouseEnter={() => {
          if (isSelect) {
            setIsSelect(false);
          }
        }}
      >
        <Card>
          <CardContent>
            <div className="space-y-4">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={cn(
                    "flex w-max max-w-[75%] flex-col gap-2 rounded-lg px-3 py-2 text-sm",
                    message.role === "user"
                      ? "ml-auto bg-primary text-primary-foreground"
                      : "bg-muted"
                  )}
                >
                  {message.content}
                </div>
              ))}
            </div>
          </CardContent>
          <CardFooter className="w-full flex flex-col gap-2">
            <div className="w-full">
              <form
                onSubmit={(event) => {
                  event.preventDefault();
                  if (inputLength === 0) return;
                  setMessages([
                    ...messages,
                    {
                      role: "user",
                      content: input,
                    },
                  ]);
                  setInput("");
                }}
                className="flex w-full items-center space-x-2"
              >
                <Input
                  id="message"
                  placeholder="Type your message..."
                  className="flex-1"
                  autoComplete="off"
                  value={input}
                  onChange={(event) => setInput(event.target.value)}
                />
                <Button
                  type="submit"
                  size="icon"
                  disabled={inputLength === 0}
                >
                  <Send />
                  <span className="sr-only">Send</span>
                </Button>
              </form>
            </div>
            <div className="w-full ">
              <div className="flex justify-end items-center space-x-2 pr-10">
                <Label>使用记忆</Label>
                <Switch checked={isSelect} />
              </div>
            </div>
          </CardFooter>
        </Card>
      </div>
    </>
  );
}

export function CreateAppAnimation() {
  const installCmd = process.env.siteName + " 可以用来存储记忆碎片";
  const tickTime = 100;
  const timeCommandEnter = installCmd.length;
  const timeCommandRun = timeCommandEnter + 3;
  const timeCommandEnd = timeCommandRun + 3;
  const timeWindowOpen = timeCommandEnd + 1;
  const timeEnd = timeWindowOpen + 1;
  const [tick, setTick] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      setTick((prev) => {
        if (prev >= timeEnd) {
          return prev;
        }
        return prev + 1;
      });
    }, tickTime);

    return () => {
      clearInterval(timer);
    };
  }, [timeEnd]);

  const lines: ReactElement[] = [];

  lines.push(
    <span key="command_type">
      {installCmd.substring(0, tick)}
      {tick < timeCommandEnter && (
        <div className="inline-block h-3 w-1 animate-pulse bg-white" />
      )}
    </span>
  );

  if (tick >= timeCommandEnter) {
    lines.push(<span key="space"> </span>);
  }

  if (tick > timeCommandRun)
    lines.push(
      <Fragment key="command_response">
        <span className="font-bold">【XX家博会厦门站】</span>
        <span></span>
        {tick > timeCommandRun + 1 && (
          <>
            <span className="font-bold">
              {" "}
              您已成功预约2月28-3月2日在厦门国际会展中心参观门票。
            </span>
            <span className="font-bold"> 参会码为: XXXX-XXXX-XXXX。</span>
            <span> </span>
            <span className="font-bold"> 举办地址：厦门会展中心</span>

            <span className="font-bold"> 停车位充足</span>
          </>
        )}
      </Fragment>
    );

  return (
    <div
      className="relative"
      onMouseEnter={() => {
        if (tick >= timeEnd) {
          setTick(0);
        }
      }}
    >
      {tick > timeWindowOpen && (
        <LaunchAppWindow className="absolute bottom-5 right-4 z-10 animate-in fade-in slide-in-from-top-10" />
      )}
      <pre className="overflow-hidden rounded-xl border text-xs">
        <div className="flex flex-row items-center gap-2 border-b px-4 py-2">
          <TerminalIcon className="size-4" />{" "}
          <span className="font-bold">创建新记忆</span>
          <div className="grow" />
          <div className="size-2 rounded-full bg-red-400" />
        </div>
        <div className="min-h-[200px] bg-gradient-to-b from-fd-secondary [mask-image:linear-gradient(to_bottom,white,transparent)]">
          <code className="grid p-4">{lines}</code>
        </div>
      </pre>
    </div>
  );
}

function LaunchAppWindow(
  props: HTMLAttributes<HTMLDivElement>
): React.ReactElement {
  return (
    <div
      {...props}
      className={cn(
        "overflow-hidden rounded-md border bg-fd-background shadow-xl",
        props.className
      )}
    >
      <div className="relative flex h-6 flex-row items-center border-b bg-fd-muted px-4 text-xs text-fd-muted-foreground">
        <p className="absolute inset-x-0 text-center">操作提醒</p>
      </div>
      <div className="p-4 text-sm">记忆保存成功</div>
    </div>
  );
}

export function WhyInteractive(props: {
  codeblockTheme: ReactNode;
  codeblockSearchRouter: ReactNode;
  codeblockInteractive: ReactNode;
  typeTable: ReactNode;
  codeblockMdx: ReactNode;
}) {
  const [autoActive, setAutoActive] = useState(true);
  const [active, setActive] = useState(0);
  const duration = 1000 * 8;
  const items = [
    "Full-text Search",
    "Design System & Tailwind CSS",
    "Generate from TypeScript & OpenAPI",
    "Interactive Examples",
    "Automation & Server",
    "Flexible",
  ];

  useEffect(() => {
    if (!autoActive) return;
    const timer = setTimeout(() => {
      setActive((prev) => (prev + 1) % items.length);
    }, duration);

    return () => {
      clearTimeout(timer);
    };
  }, [active, autoActive, duration, items.length]);

  return (
    <div
      id="why-interactive"
      className="flex flex-col gap-6 md:flex-row"
    >
      <div className="flex flex-col mt-1.5 border h-fit">
        {items.map((item, i) => (
          <button
            key={item}
            ref={(element) => {
              if (!element || i !== active) return;

              scrollIntoView(element, {
                behavior: "smooth",
                boundary: document.getElementById("why-interactive"),
              });
            }}
            type="button"
            className={cn(
              "inline-flex flex-col text-nowrap py-1.5 text-start text-sm text-fd-muted-foreground font-medium px-2",
              i === active
                ? "text-fd-primary-foreground bg-fd-primary"
                : "hover:text-fd-accent-foreground/80"
            )}
            onClick={() => {
              if (active === i) setAutoActive((prev) => !prev);
              else {
                setAutoActive(false);
                setActive(i);
              }
            }}
          >
            {item}
            {i === active && autoActive ? (
              <div
                className="animate-[why-interactive-x] bg-fd-primary-foreground h-1"
                style={{
                  animationDuration: `${duration.toString()}ms`,
                  animationTimingFunction: "linear",
                  animationFillMode: "forwards",
                }}
              />
            ) : null}
          </button>
        ))}
      </div>
      <style>
        {`
        @keyframes why-interactive-x {
          from {
            width: 0px;
          }
          
          to {
            width: 100%;
          }
        }`}
      </style>

      <div className="flex-1">
        {active === 0 ? (
          <WhyPanel>
            <h3 className="mb-4 text-lg font-semibold">
              Implementing search is difficult, we made it simple.
            </h3>
            <p>
              Fumadocs offers native support for Orama and Algolia Search, it is
              as easy as plugging a route handler.
            </p>
            {props.codeblockSearchRouter}
            <p className="mb-4 text-fd-muted-foreground">
              In addition, you can plug your own search modal to allow full
              control over the search UI.
            </p>
            <div className="flex flex-row items-center gap-1.5">
              <Link
                href="/docs/headless/search"
                className={cn(buttonVariants({ variant: "outline" }))}
              >
                Check the docs
              </Link>
              <Link
                href="/docs/ui/search"
                className={cn(buttonVariants({ variant: "ghost" }))}
              >
                Customise UI?
              </Link>
            </div>
          </WhyPanel>
        ) : null}

        {active === 1 ? (
          <WhyPanel>
            <h3 className="mb-4 text-lg font-semibold">Tailwind CSS Plugin</h3>
            <p>
              Share the same design system cross the docs and your app with
              Tailwind CSS. Works great with <b>Shadcn UI</b>.
            </p>
            {props.codeblockTheme}
            <Link
              href="/docs/ui/theme"
              className={cn(buttonVariants({ variant: "outline" }))}
            >
              See Themes
            </Link>
          </WhyPanel>
        ) : null}

        {active === 2 ? (
          <WhyPanel>
            <h3 className="mb-4 text-lg font-semibold">
              From the source of truth, never repeat yourself again.
            </h3>
            <p>
              Fumadocs has a smart Type Table component that renders the
              properties of interface/type automatically, powered by the
              TypeScript Compiler API.
            </p>
            {props.typeTable}
            <p>
              We also have a built-in OpenAPI playground and docs generator.
            </p>

            <div className="mt-4 flex flex-row items-center gap-1.5">
              <Link
                href="/docs/ui/components/auto-type-table"
                className={cn(buttonVariants({ variant: "outline" }))}
              >
                Type Table
              </Link>
              <Link
                href="/docs/ui/openapi"
                className={cn(buttonVariants({ variant: "ghost" }))}
              >
                OpenAPI Integration
              </Link>
            </div>
          </WhyPanel>
        ) : null}
        {active === 3 ? (
          <WhyPanel>
            <h3 className="mb-4 text-lg font-semibold">
              Interactive docs with React.
            </h3>
            <p>
              Fumadocs offers many useful components, from File Tree, Tabs, to
              Zoomable Image.
            </p>
            {props.codeblockInteractive}
            <Link
              href="/docs/ui/components"
              className={cn(buttonVariants({ variant: "outline" }))}
            >
              View Components
            </Link>
          </WhyPanel>
        ) : null}
        {active === 4 ? (
          <WhyPanel>
            <h3 className="mb-4 text-lg font-semibold">
              Connect your content and server.
            </h3>

            <p>
              React Server Component made it very easy to automate docs. Use
              server data, server components, and even client components in MDX
              documents.
            </p>

            {props.codeblockMdx}
          </WhyPanel>
        ) : null}
        {active === 5 ? (
          <WhyPanel>
            <h3 className="mb-4 text-lg font-semibold">
              Your own content source, search solution, everything.
            </h3>
            <p>
              Fumadocs is designed to be flexible, working with any content
              sources, offering powerful utilities.
              <br />
              <br />
              With our remark plugins, you can parse documents into search
              indexes, and integrate with different search solutions seamlessly.
            </p>

            <Link
              href="/docs/headless/mdx/structure"
              className={cn(
                buttonVariants({ className: "mt-4", variant: "outline" })
              )}
            >
              See MDX Plugins
            </Link>
          </WhyPanel>
        ) : null}
      </div>
    </div>
  );
}

function WhyPanel(props: HTMLProps<HTMLDivElement>) {
  return (
    <div
      {...props}
      className={cn(
        "duration-700 animate-in fade-in slide-in-from-left-4 text-sm",
        props.className
      )}
    >
      {props.children}
    </div>
  );
}

const previewButtonVariants = cva(
  "w-20 h-9 text-sm font-medium transition-colors rounded-full",
  {
    variants: {
      active: {
        true: "text-fd-primary-foreground",
        false: "text-fd-muted-foreground",
      },
    },
  }
);
export function PreviewImages() {
  const [active, setActive] = useState(0);

  return (
    <div className="mt-12 -mb-40 min-w-[800px] lg:-mb-18 xl:min-w-[1100px] xl:-mx-24">
      <div className="absolute flex flex-row left-1/2 -translate-1/2 bottom-4 z-[2] p-1 rounded-full bg-fd-card border shadow-xl dark:shadow-fd-background">
        <div
          role="none"
          className="absolute bg-fd-primary rounded-full w-20 h-9 transition-transform z-[-1]"
          style={{
            transform: `translateX(calc(var(--spacing) * 20 * ${active}))`,
          }}
        />
        <button
          className={cn(previewButtonVariants({ active: active === 0 }))}
          onClick={() => setActive(0)}
        >
          Memory
        </button>
        {/* <button
          className={cn(previewButtonVariants({ active: active === 1 }))}
          onClick={() => setActive(1)}
        >
          OpenAPI
        </button> */}
      </div>
      <Image
        src={MainImg}
        alt="preview"
        priority
        className={cn(
          "w-full rounded-lg select-none duration-1000 animate-in fade-in slide-in-from-bottom-12 [mask-image:linear-gradient(to_bottom,white_70%,transparent_90%)]",
          active !== 0 && "hidden"
        )}
      />
      {active === 1 && (
        <Image
          src={MainImg}
          alt="preview"
          priority
          className={cn(
            "w-full rounded-lg select-none duration-1000 animate-in fade-in slide-in-from-bottom-12 [mask-image:linear-gradient(to_bottom,white_70%,transparent_90%)]",
            active !== 1 && "hidden"
          )}
        />
      )}
    </div>
  );
}
