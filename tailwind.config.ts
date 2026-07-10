import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'page': '#faf9f8',
        'banner-mint': '#a7f3c9',
        'nav-green': '#0c492f',
        'heading-name': '#0b251a',
        'heading-dark': '#463c3c',
        'body': '#5b5b5b',
        'intro-accent': '#ee8269',
        'intro-body': '#463c3c',
        'link-coral': '#b35e44',
        'tag-bg': '#ffddbe',
        'footer-text': '#104d21',
        'card-border': '#e6e6e6',
        'card-bytesize': '#abe2da',
        'card-ocf': '#ffb88a',
        'card-nook': '#ffddeb',
        'caption-green': '#70d09a',
        'team-blue': '#5ab1d1',
        'team-pink': '#d8429c',
      },
      fontFamily: {
        hanken: ['var(--font-hanken)'],
        josefin: ['var(--font-josefin)'],
      },
    },
  },
  plugins: [],
};

export default config;
