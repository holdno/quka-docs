import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared";

/**
 * Shared layout configurations
 *
 * you can customise layouts individually from:
 * Home Layout: app/(home)/layout.tsx
 * Docs Layout: app/docs/layout.tsx
 */
export const baseOptions: BaseLayoutProps = {
  disableThemeSwitch: true,
  nav: {
    title: (
      <>
        <img
          className="w-[24px] h-[24px] rounded-full"
          src="/quka-avatar.jpg"
          alt="logo"
        />
        {process.env.siteName}
      </>
    ),
  },
  githubUrl: `${process.env.GITHUB_LINK}`,
  links: [
    {
      text: "文档",
      url: "/docs/info",
      active: "nested-url",
    },
  ],
};
