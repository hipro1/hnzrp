import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';

/**
 * Shared layout configurations
 *
 * you can configure layouts individually from:
 * Home Layout: app/(home)/layout.tsx
 * Docs Layout: app/docs/layout.tsx
 */
export const baseOptions: BaseLayoutProps = {
  nav: {
    title: 'HNZRP',
  },
  links: [
    {
      text: 'Home',
      url: '/',
      active: 'nested-url',
    },
    {
      text: 'Docs',
      url: '/docs',
      active: 'nested-url',
    },
    {
      text: 'Melonly Panel',
      url: 'https://melonly.xyz/panel/7159159696966815744',
      active: 'nested-url',
    },
    {
      text: 'HNZRP Whitelisted Group',
      url: 'https://www.roblox.com/groups/7252897/HNZRP-Whitelisted-group#!/about',
      active: 'nested-url',
    },
    {
      text: 'Credits',
      url: '/docs/credits',
      active: 'nested-url',
    },
  ],
};
