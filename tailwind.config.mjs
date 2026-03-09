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
        'cn-text':      '#e4e4f0',
        'cn-muted':     '#6b6b8a',
        'cn-purple':    '#a855f7',
        'cn-purple-l':  '#c084fc',
        'cn-gold':      '#f59e0b',
        'cn-gold-l':    '#fbbf24',
        'cn-teal':      '#2dd4bf',
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
