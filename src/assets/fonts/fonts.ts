import localFont from 'next/font/local';

const Gilory_Italic = localFont({
  src: [
    { weight: '900', path: './Gilory/Gilroy-BlackItalic.woff2' },
    { weight: '800', path: './Gilory/Gilroy-HeavyItalic.woff2' },
    { weight: '700', path: './Gilory/Gilroy-ExtraboldItalic.woff2' },
    { weight: '600', path: './Gilory/Gilroy-BoldItalic.woff2' },
    { weight: '550', path: './Gilory/Gilroy-SemiboldItalic.woff2' },
    { weight: '500', path: './Gilory/Gilroy-MediumItalic.woff2' },
    { weight: '400', path: './Gilory/Gilroy-RegularItalic.woff2' },
    { weight: '300', path: './Gilory/Gilroy-LightItalic.woff2' },
    { weight: '200', path: './Gilory/Gilroy-ThinItalic.woff2' },
    { weight: '100', path: './Gilory/Gilroy-UltraLightItalic.woff2' },
  ],
});

const Gilory = localFont({
  src: [
    { weight: '900', path: './Gilory/Gilroy-Black.woff2' },
    { weight: '800', path: './Gilory/Gilroy-Heavy.woff2' },
    { weight: '700', path: './Gilory/Gilroy-Extrabold.woff2' },
    { weight: '600', path: './Gilory/Gilroy-Bold.woff2' },
    { weight: '550', path: './Gilory/Gilroy-Semibold.woff2' },
    { weight: '500', path: './Gilory/Gilroy-Medium.woff2' },
    { weight: '400', path: './Gilory/Gilroy-Regular.woff2' },
    { weight: '300', path: './Gilory/Gilroy-Light.woff2' },
    { weight: '200', path: './Gilory/Gilroy-Thin.woff2' },
    { weight: '100', path: './Gilory/Gilroy-UltraLight.woff2' },
  ],
});

const allFonts = [Gilory_Italic, Gilory];

export default allFonts;
