import { defineConfig } from 'vitepress';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'HNZRP',
  description: 'discord.gg/hnzrp',
  head: [['link', { rel: 'icon', href: '/logo.png' }]],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/logo.png',
    nav: [
      { text: 'Home', link: '/' },
      {
        text: 'Melonly Panel',
        link: 'https://melonly.xyz/panel/7159159696966815744',
      },
      {
        text: 'HNZRP Whitelisted Group',
        link: 'https://www.roblox.com/groups/7252897/HNZRP-Whitelisted-group#!/about',
      },
      {
        text: 'Credits',
        link: '/credits',
      },
    ],

    sidebar: [
      {
        text: 'Getting Started',
        items: [
          { text: 'Welcome', link: '/welcome' },
          { text: 'Rank Descriptions', link: '/rank-descriptions' },
          { text: 'LOA/RA Guidelines', link: '/loa-guidelines' },
          { text: 'Shift & Payment Info', link: '/shift-payment-info' },
          { text: 'Off-duty Commands', link: '/offduty-commands' },
        ],
      },
      {
        text: 'Guides',
        items: [
          { text: 'General Messages', link: '/guides/general' },
          { text: 'H Messages', link: '/guides/h-messages' },
          { text: 'STS Guide', link: '/guides/sts-guide' },
        ],
      },
      {
        text: 'Formatting',
        items: [
          {
            text: 'Rank Identifiers',
            link: '/formatting/rank-indentifiers',
          },
          {
            text: 'Formatting with callsigns',
            link: '/formatting/discord-nickname',
          },
        ],
      },
      {
        text: 'Punishments',
        items: [
          { text: 'Member Punishment Key', link: '/punishments/member' },
          { text: 'Staff Punishment Key', link: '/punishments/staff' },
        ],
      },
    ],

    footer: {
      copyright:
        '&copy; Copyright 2024-present - TempNinjaMan & Aqxorus - All rights reserved.',
    },
    // https://simpleicons.org
    socialLinks: [
      { icon: 'github', link: 'https://github.com/hipro1' },
      { icon: 'discord', link: 'https://discord.com/users/693965900805570633' },
    ],
  },
});
