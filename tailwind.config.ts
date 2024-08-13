import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
      padding: { xl: '20px' },
    },
    extend: {
      fontFamily: {
        pretendard: ['var(--font-pretendard)'],
      },
      colors: {
        blue0: '#DBEEFF',
        blue1: '#A8D5FF',
        blue2: '#75BDFF',
        blue3: '#42A4FF',
        blue4: '#118DFF',
        blue5: '#0072DB',
        blue6: '#0058A8',
        blue7: '#003D75',
        blue8: '#002242',
        blue9: '#00080F',
        orange0: '#FFF4F0',
        orange1: '#FED1BE',
        orange2: '#FDAE8B',
        orange3: '#FD8B59',
        orange4: '#FC6726',
        orange5: '#EC4A03',
        orange6: '#BA3A03',
        orange7: '#882B02',
        orange8: '#561B01',
        orange9: '#230B00',
        gray0: '#F9FAFA',
        gray1: '#ECEDEF',
        gray2: '#D0D3D7',
        gray3: '#C2C6CB',
        gray4: '#B4B9C0',
        gray5: '#A6ACB4',
        gray6: '#989FA9',
        gray7: '#8A929E',
        gray8: '#7D8591',
        gray9: '#707885',
        gray10: '#646C77',
        gray11: '#586069',
        gray12: '#4D535B',
        gray14: '#35393F',
        gray16: '#1E2124',
        gray18: '#070708',
        white: '#FFFFFF',
        main: '#212125',
        sub1: '#505050',
        sub2: '#767676',
        disabled: '#999999',
      },
    },
  },
  plugins: [],
};
export default config;
