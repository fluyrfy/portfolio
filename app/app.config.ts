export default defineAppConfig({
  global: {
    picture: {
      dark: 'https://frankliao.pse.is/8hjscq',
      light: 'https://frankliao.pse.is/8hjscq',
      alt: 'My profile picture'
    },
    meetingLink: 'mailto:yufanliaocestlavie@gmail.com',
    email: 'yufanliaocestlavie@gmail.com',
    available: true
  },
  ui: {
    colors: {
      primary: 'blue',
      neutral: 'neutral'
    },
    pageHero: {
      slots: {
        container: 'py-18 sm:py-24 lg:py-32',
        title: 'mx-auto max-w-xl text-pretty text-3xl sm:text-4xl lg:text-5xl',
        description: 'mt-2 text-md mx-auto max-w-2xl text-pretty sm:text-md text-muted'
      }
    }
  },
  footer: {
    // credits: `Built with Nuxt UI • © ${new Date().getFullYear()}`,
    credits: `© ${new Date().getFullYear()} Frank Liao`,
    colorMode: false,
    links: [{
      'icon': 'i-simple-icons-github',
      'to': 'https://github.com/fluyrfy',
      'target': '_blank',
      'aria-label': 'GitHub'
    }, {
      'icon': 'i-simple-icons-linkedin',
      'to': 'https://www.linkedin.com/in/frank-liao-989034295',
      'target': '_blank',
      'aria-label': 'LinkedIn'
    }, {
      'icon': 'i-lucide-mail',
      'to': 'mailto:yufanliaocestlavie@gmail.com',
      'target': '_blank',
      'aria-label': 'Email'
    }]
  }
})
