import { Fragment } from 'react'
import { CssBaseline, ThemeProvider } from '@mui/material'
import { Provider } from 'react-redux'
import { store } from 'setup/store'
import { theme } from 'setup/theme'
import { Root } from 'scenes'

export const App = () => {
  return (
    <Fragment>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Root />
        </ThemeProvider>
      </Provider>
    </Fragment>
  )
}
