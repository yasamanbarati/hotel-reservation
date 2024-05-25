export const palette = {
  primary: {
    main : '#901D63',
    light: '#f4e8ef',
  },
  secondary: {
    main : '#1d9077',
    light: '#a5d3c9'
  },
  info: {
    main: '#906d1d'
  },
  neutral: {
    main: '#fff',
    dark:'#e6e6e6',
    contrastText: '#444444',
  },
  dark: {
    main: '#444444',
    contrastText: '#fff',
  },
}

declare module '@mui/material/styles' {
  interface Palette {
    neutral: Palette['primary']
    dark: Palette['primary']
    primary: Palette['primary']
    secondary: Palette['primary']
    info: Palette['primary']
  }
  interface PaletteOptions {
    neutral?: PaletteOptions['primary']
    dark?: PaletteOptions['primary']
    primary?: PaletteOptions['primary']
    secondary?: PaletteOptions['primary']
    info?: PaletteOptions['primary']
  }
}
declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides {
    neutral: true
    dark: true
  }
}
