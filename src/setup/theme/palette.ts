export const palette = {
  primary: {
    main : '#336699',
    light: '#85a3c2'
  },
  secondary: {
    main : '#997433',
    light: '#c2ac85'
  },
  accent: {
    main: '#994133'
  },
  neutral: {
    main: '#fff',
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
    accent: Palette['primary']
  }
  interface PaletteOptions {
    neutral?: PaletteOptions['primary']
    dark?: PaletteOptions['primary']
    primary?: PaletteOptions['primary']
    secondary?: PaletteOptions['primary']
    accent?: PaletteOptions['primary']
  }
}
declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides {
    neutral: true
    dark: true
  }
}
