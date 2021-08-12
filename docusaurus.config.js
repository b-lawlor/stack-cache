const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Stack Cache',
  tagline: 'Cache rules everything around me',
  url: 'https://brendanlawlor.github.io',
  baseUrl: '/stack-cache/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'brendanlawlor', // Usually your GitHub org/user name.
  projectName: 'stack-cache', // Usually your repo name.
  trailingSlash: false,
  themeConfig: {
    hideableSidebar: true,
    navbar: {
      title: 'Stack Cache',
      logo: {
        alt: 'Stack Cache Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'doc',
          docId: 'getting-started/intro',
          position: 'left',
          label: 'Docs',
        },
        {to: '/blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/brendanlawlor/stack-cache',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Getting Started',
              to: '/docs/',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Slack',
              href: 'https://sierra-ils.slack.com/ssb/redirect',
            },
            {
              label: 'ILS Underground',
              href: 'https://github.com/ils-underground',
            },
            {
              label: 'idea Lab',
              href: 'https://idealab.iii.com/main/User/Login#/login',
            },
            {
              label: 'IUG',
              href: 'https://www.innovativeusers.org/',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: '/blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/ils-underground/stack-cache',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Stack Cache Built with Docusaurus.`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/brendanlawlor/stack-cache/edit/main/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/brendanlawlor/stack-cache/edit/main',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
