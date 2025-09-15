import { defineConfig } from 'vitepress'
import autoSidebar from './src/config/auto_sidebar.ts'; // 自动识别 .ts 文件
import { genSidebar } from './src/utils/gen_utils.mts';


// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "cg-vitepress",
  description: "A VitePress Site",
  base: '/cg-vitepress/', // 替换为你的仓库名，静态资源的引用路径会基于此路径。发布到github pages时需要
  // 手动添加 favicon
  head: [
    ['link', { rel: 'icon', type: 'image/x-icon', href: '/cg-vitepress/ccg.ico' }],
    // ['link', { rel: 'icon', type: 'image/svg+xml', href: '/ccg.svg' }],
    // ['link', { rel: 'icon', type: 'image/png', href: '/logo.png' }],
    // ['link', { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' }],
  ],
  srcDir: 'src',// 源码目录。相对于站点根目录 docs。默认src。
  srcExclude: ['**/README.md', '**/TODO.md'],
  outDir: '.vitepress/dist',// 项目的构建输出位置，相对于站点根目录docs。默认值为 .vitepress/dist
  assetsDir: 'assets',// 指定静态资源（如图片、字体等）存放的目录，相对于 outDir 选项。默认值为 assets
  cacheDir: '.vitepress/cache',
  themeConfig: {
    logo: '/logo-ccg.svg' ,// 站点图标，在srcDir中的public目录下
    siteTitle: 'themeConfig.siteTitle',// 站点标题
    // siteTitle: false,// 是否显示站点标题。false:只需要图标并且想要隐藏站点标题文本
    nav: [
      { text: 'themeConfig.nav Home', link: '/' },
      { text: 'themeConfig.nav Examples', link: '/markdown-examples' }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],
    sidebar: [
      {
        text: 'themeConfig.sidebar',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      },
      {
        text: '自动生成侧边栏', // 自动生成，按照src中md文件的顺序
        items: [ ...autoSidebar ] // 这样 items 就是可变的 SidebarItem[]
      },
      {
        text: '手动配置侧边栏bb',
        items: [ ...genSidebar('docs/src/bb', 'bb')]
      },
      {
        text: '手动配置侧边栏aa',
        items: [ ...genSidebar('docs/src/aa', 'aa')]
      }
    ],
    outlineTitle: 'theme.outlineTitle 本页目录',
    outline: [2, 3], // 显示 h2 和 h3 标题
    lastUpdatedText: '上次更新于',
    editLink: {
      pattern: '编辑此页',
      text: '在 GitHub 上编辑此页'
    },
    footer: {
      copyright: 'themeConfig.footer Copyright © 2025 chenchanggui'
    },
    
  },
})
