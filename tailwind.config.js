module.exports = {
  theme: {
    extend: {
      typography: (theme) => ({
        custom: {
          css: {
            '--tw-prose-body': '#fff',
            '--tw-prose-headings': '#fff',
            '--tw-prose-lead':'#fff',
            '--tw-prose-links': '#fff',
            '--tw-prose-bold': '#fff',
            '--tw-prose-counters': '#fff',
            '--tw-prose-bullets': '#fff',
            '--tw-prose-hr': '#fff',
            '--tw-prose-quotes': '#fff',
            '--tw-prose-quote-borders': '#fff',
            '--tw-prose-captions': '#fff',
            '--tw-prose-code': '#fff',
            '--tw-prose-pre-code': '#fff',
            '--tw-prose-pre-bg': '#fff',
            '--tw-prose-th-borders': '#fff',
            '--tw-prose-td-borders': '#fff',
          },
        },
      }),
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    // ...
  ],
}