/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'cn-bg':        '#07070f',
        'cn-surface':   '#0d0d1a',
        'cn-surface-2': '#12122a',
        'cn-border':    '#1e1e3a',
        'cn-text':      '#785ef0',  // IBM Indigo 50 — body text (purple)
        'cn-muted':     '#6b6b8a',
        'cn-purple':    '#785ef0',  // IBM Indigo 50
        'cn-purple-l':  '#dc267f',  // IBM Magenta 50 — hover / accent
        'cn-gold':      '#ffb000',  // IBM Gold 20
        'cn-gold-l':    '#fe6100',  // IBM Orange 40
        'cn-teal':      '#648fff',  // IBM Ultramarine 40 — blue accent
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'system-ui', 'sans-serif'],
        body:    ['system-ui', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        mono:    ['"JetBrains Mono"', '"Fira Code"', 'monospace'],
      },
      typography: (theme) => ({
        cn: {
          css: {
            '--tw-prose-body':        theme('colors.cn-text'),
            '--tw-prose-headings':    theme('colors.cn-text'),
            '--tw-prose-links':       theme('colors.cn-purple-l'),
            '--tw-prose-bold':        theme('colors.cn-text'),
            '--tw-prose-code':        theme('colors.cn-gold-l'),
            '--tw-prose-quotes':      theme('colors.cn-muted'),
            '--tw-prose-quote-borders': theme('colors.cn-border'),
            '--tw-prose-captions':    theme('colors.cn-muted'),
            '--tw-prose-pre-bg':      theme('colors.cn-surface'),
            '--tw-prose-hr':          theme('colors.cn-border'),
          },
        },
      }),
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
