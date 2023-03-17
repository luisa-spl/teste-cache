/* eslint-disable @typescript-eslint/naming-convention */
import { extendTheme } from '@chakra-ui/react';
import { rem } from 'polished';

import { ModalStyle as Modal } from './modalStyle';

export const theme = extendTheme({
  colors: {
    brand: {
      primary: {
        darkest: '#660A3B',
        dark: '#990052',
        pure: '#E5007B',
        pure01: '#e5007b1a',
        light: '#FF2499',
        lightest: '#FF4DAC',
      },
      secondary: {
        darkest: '#19272E',
        pure: '#122F3D',
        medium: '#004263',
        light: '#0A70A4',
        lightest: '#1F91CC',
      },
    },
    neutral: {
      gray: {
        darkest: '#2B2D30',
        dark: '#3A3B40',
        medium: '#6F7377',
        medium04: '#6f737766',
        medium06: '#6f737799',
        light: '#D8DBE0',
        lightest: '#F2F4F7',
      },
      black: '#202020',
      white: '#FFFFFF',
    },
    semantic: {
      danger: {
        dark: '#CC0000',
        medium: '#F21B1B',
        light: '#FF4242',
      },
      warning: {
        dark: '#C79C02',
        medium: '#EEC226',
        light: '#FFD84F',
      },
      success: {
        dark: '#006335',
        medium: '#0D8A4F',
        light: '#2AB071',
      },
      information: {
        dark: '#045787',
        medium: '#2A85B9',
        light: '#55AEE0',
      },
    },
    skeleton: {
      startColor: '#D8DBE0',
      endColor: '#ecebeb',
    },
    gradient: {
      primary: {
        to: '#C9046F',
        from: '#19272E',
      },
    },
  },
  fontSizes: {
    xxl: '3rem',
    xl: '2.5rem',
    lg: '2rem',
    md: '1.5rem',
    sm: '1.25rem',
    xs: '1rem',
    xxs: '0.875rem',
    xxxs: '0.75rem',
    xxxxs: '0.625rem',
  },
  fontWeights: {
    extrabold: 800,
    bold: 700,
    semibold: 600,
    regular: 400,
  },
  shadows: {
    level1: '0px 4px 10px rgba(32, 32, 32, 0.06);',
    level2: '0px 4px 6px rgba(32, 32, 32, 0.24);',
    level3: '0px 4px 16px rgba(32, 32, 32, 0.4);',
  },
  lineHeights: {
    none: '100%',
    xs: '115%',
    sm: '120%',
    md: '133%',
    lg: '150%',
    xl: '170%',
    xxl: '200%',
  },
  letterSpacings: {
    none: '0%',
    far: '5%',
  },
  space: {
    nano: '0.25rem',
    xxxs: '0.5rem',
    xxs: '0.75rem',
    '3xxs': '2.25rem',
    xs: '1rem',
    sm: '1.5rem',
    md: '2rem',
    lg: '2.5rem',
    xl: '4rem',
    squish: {
      xxxs: '0.25rem 0.5rem',
      xxs: '0.375rem 0.75rem',
      xs: '0.5rem 1rem',
      sm: '0.75rem 1.5rem',
      md: '1rem 2rem',
      lg: '1.25rem 2.5rem',
      xl: '2rem 4rem',
    },
    inset: {
      nano: '0.25rem 0.25rem',
      xxxs: '0.5rem 0.5rem',
      xxs: '0.75rem 0.75rem',
      xs: '1rem 1rem',
      sm: '1.5rem 1.5rem',
      md: '2rem 2rem',
      lg: '2.5rem 2.5rem',
      xl: '4rem 4rem ',
    },
  },
  opacity: {
    semiopaque: 0.6,
    intense: 0.4,
    light: 0.1,
    semitransparent: 0.06,
  },
  radii: {
    // Border radius
    none: '0px',
    sm: '6px',
    md: '12px',
    lg: '24px',
    pill: '500px',
    circle: '50%',
  },
  borders: {
    sm: 'solid 1px',
    md: 'solid 1.5px',
    lg: 'solid 2px',
    xl: 'solid 4px',
  },
  // Atualmente, breakpoints em px geram loops infinitos,
  // então precisamos usar em ou rem (fonte: https://github.com/chakra-ui/chakra-ui/issues/4301)
  breakpoints: {
    xs: rem('280px'),
    sm: rem('320px'),
    intermediate: rem('650px'),
    md: rem('1280px'),
    lg: rem('1366px'),
    xl: rem('1440px'),
    xxl: rem('1920px'),
  },
  fonts: {
    heading: 'Montserrat, Verdana, sans-serif',
  },
  textStyles: {
    display: {
      fontSize: 'xxl',
      fontWeight: 'extrabold',
      lineHeight: 'xs',
    },
    heading1: {
      fontSize: 'xl',
      fontWeight: 'extrabold',
      lineHeight: 'sm',
    },
    heading2: {
      fontSize: 'lg',
      fontWeight: 'extrabold',
      lineHeight: 'sm',
    },
    body1: {
      fontSize: 'md',
      fontWeight: 'extrabold',
      lineHeight: 'sm',
    },
    body2: {
      fontSize: 'sm',
      fontWeight: 'semibold',
      lineHeight: 'md',
    },
    body3: {
      fontSize: 'xxs',
      fontWeight: 'semibold',
      lineHeight: 'lg',
    },
    body4: {
      fontSize: 'xxs',
      fontWeight: 'regular',
      lineHeight: 'lg',
    },
    paragraph1: {
      fontSize: 'xs',
      fontWeight: 'semibold',
      lineHeight: 'lg',
    },
    paragraph2: {
      fontSize: 'xs',
      fontWeight: 'regular',
      lineHeight: 'lg',
    },
    smalltext1: {
      fontSize: 'xxxs',
      fontWeight: 'semibold',
      lineHeight: 'sm',
    },
    smalltext2: {
      fontSize: 'xxxs',
      fontWeight: 'regular',
      lineHeight: 'sm',
    },
    microtext1: {
      fontSize: 'xxxxs',
      fontWeight: 'semibold',
      lineHeight: 'none',
      letterSpacing: 'far',
    },
    microtext1caps: {
      fontSize: 'xxxxs',
      fontWeight: 'semibold',
      lineHeight: 'none',
      letterSpacing: 'far',
      textTransform: 'uppercase',
    },
    microtext2: {
      fontSize: 'xxxxs',
      fontWeight: 'regular',
      lineHeight: 'none',
      letterSpacing: 'far',
    },
    microtext2caps: {
      fontSize: 'xxxxs',
      fontWeight: 'regular',
      lineHeight: 'none',
      letterSpacing: 'far',
      textTransform: 'uppercase',
    },
    button: {
      fontSize: 'xxs',
      fontWeight: 'semibold',
      lineHeight: 'none',
    },
    linkLg: {
      fontSize: 'xxs',
      fontWeight: 'regular',
      lineHeight: 'none',
    },
    linkSm: {
      fontSize: 'xxxs',
      fontWeight: 'regular',
      lineHeight: 'none',
    },
  },
  styles: {
    global: {
      '*': {
        margin: 0,
        padding: 0,
        boxSizing: 'border-box',
      },
      'button, input': {
        fontFamily: 'Montserrat, Verdana, sans-serif',
      },
      'a, button': {
        cursor: 'pointer',
      },
    },
  },
  components: {
    Modal,
    Checkbox: {
      parts: ['container'],
      baseStyle: {
        container: {
          '.chakra-checkbox__control': {
            borderRadius: '3px',
            color: 'neutral.gray.dark',
            border: '1.5px solid',
            borderColor: '#2B2D30',
          },
          '.chakra-checkbox__label': {
            fontColor: 'neutral.gray.darkest',
            textStyle: 'smalltext2',
          },
          // TODO: lidar com :hover:disabled
          _hover: {
            '.chakra-checkbox__control': {
              position: 'relative',
              '::after': {
                content: '""',
                top: '0.15rem',
                left: '0.15rem',
                right: '0.15rem',
                bottom: '0.15rem',
                bgColor: 'brand.primary.pure',
                position: 'absolute',
                zIndex: -1,
              },
            },
          },
          _disabled: {
            borderColor: 'neutral.gray.medium',
            opacity: 0.6,
            span: { border: 'md', borderColor: 'neutral.gray.medium', opacity: 0.6 },
            '.chakra-checkbox__label': {
              color: 'neutral.gray.medium',
              opacity: 0.6,
            },
          },
          _focusWithin: {
            '& .chakra-checkbox__control': {
              border: '1.5px solid',
              borderColor: '#2B2D30',
              outlineWidth: '2px',
              outlineStyle: 'solid',
              outlineColor: 'brand.primary.pure',
            },
          },
          _checked: {
            '.chakra-checkbox__control': {
              color: 'neutral.white',
              boxShadow: 'none',
              borderColor: 'transparent',
              bgColor: 'brand.primary.pure',
              outline: 'none',
            },
          },
        },
      },
    },
  },
});
