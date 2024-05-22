import { Fragment } from 'react'
import { CssBaseline, ThemeProvider } from '@mui/material'
import { Provider } from 'react-redux'
import { store } from './setup/redux/store'
import { theme } from './setup/theme'

export const App = () => {
  return (
    <Fragment>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
        </ThemeProvider>
      </Provider>
    </Fragment>
  )
}
