import { extendTheme, pigment } from '@stylefusion/vite-plugin';
import { defineConfig } from '@tanstack/start/config'
import { getPigmentCSSTheme } from '@raikou/system';

const { cssTheme, rawTheme } = getPigmentCSSTheme();

const theme = extendTheme({
  cssVarPrefix: 'raikou',
  getSelector: (colorScheme) =>
    colorScheme ? `[data-raikou-color-scheme='${colorScheme}']` : ':root',
  ...cssTheme,
});

// https://vitejs.dev/config/
export default defineConfig({
  vite: {
    plugins: [
      pigment({
        atomic: false,
        theme,
        rawTheme,
        transformLibraries: ['@raikou/core', '@raikou/system', '@raikou/emotion'],
      }),
    ],
    optimizeDeps: {
      include: [
        '@stylefusion/react', 
        '@raikou/core', 
        '@raikou/system', 
        '@raikou/emotion'
      ],
    },
    resolve: {
      alias: {
        'prop-types': 'prop-types/prop-types.js',
        'react-is': 'react-is/cjs/react-is.development.js',
      },
    }, 
    ssr: {
      noExternal: [
        '@stylefusion/react', 
        '@raikou/core', 
        '@raikou/system', 
        '@raikou/emotion'
      ],
    }
  }
});
