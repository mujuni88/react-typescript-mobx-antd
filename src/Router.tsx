import * as React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import { App } from 'containers'
import { ThemeProvider } from 'styled-components'
import theme from './theme'

export default class Router extends React.Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Route path="/" component={App} />
        </BrowserRouter>
      </ThemeProvider>
    )
  }
}