const { defaultTheme } = require('@vuepress/theme-default')

module.exports = {
  theme: defaultTheme({
    lang: 'ja',
    title: 'HiCoder web docs',
    description: '広島大学コンピュータサークルHiCoderの公開用web資料です。',
    contributors: true,
    contributorsText: '編集者',
    lastUpdated: true,
    head: [['link', { rel: 'icon', href: '/images/hicoder.ico' }]],
    navbar: [
      // Navbar: 右上に表示される
      {
        text: 'はじめに',
        link: '/guide/',
      },
      {
        text: '座学',
        link: '/lectures/',
      },
      {
        text: '実習',
        link: '/practical/',
      },
    ],
    sidebar: {
      // sidebar: あるパス以下で左に表示されるやつ
      '/guide/': [
        {
          text: "はじめに",
          children: ['/guide/README.md']
        }
      ],
      '/lectures/': [
        {
          text: '座学編',
          children: ['/lectures/README.md']
        }
      ],
      '/practical/': [
        {
          text: '実習編',
          children: ['/practical/README.md']
        }
      ],
    },
    logo: '/images/hicoder.png',
  }),
}
