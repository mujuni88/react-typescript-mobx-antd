import * as React from 'react'
import { Layout, Row } from 'antd'
import { LibList, NavMenu, Box, Text } from 'components'
import { Route } from 'react-router-dom'

import './App.css'

const logo = require('./logo.svg')
const { Header, Content, Footer } = Layout

export class App extends React.Component {
  render() {
    return (
      <Layout className="layout" style={{ minHeight: '100vh' }}>
        <Header>
          <Row type="flex" align="middle">
            <img src={logo} className="App-logo" alt="logo" />
            <NavMenu />
          </Row>
        </Header>
        <Content style={{ padding: '0 50px' }}>
          <Box width={[ 1 ]} mt={3}>
            <Route
              exact={true}
              path="/"
              component={() => (
                <Page bg="#fff">
                  <LibList />
                </Page>
              )}
            />
            <Route
              path="/nav1"
              component={() => (
                <Page bg="#FF8A65">
                  <Text color="#fff" align="center">
                    NAV 1
                  </Text>
                </Page>
              )}
            />
            <Route
              path="/nav2"
              component={() => (
                <Page bg="#FF5722">
                  <Text color="#fff" align="center">
                    NAV 2
                  </Text>
                </Page>
              )}
            />
          </Box>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Created by Joe Buza</Footer>
      </Layout>
    )
  }
}

// tslint:disable
function Page({ children, ...rest }) { 
  return (
    <Row type="flex" align="middle" justify="center">
      <Box bg="blue" w={[ 1 / 2 ]} p={[ 4 ]} {...rest}>
        {children}
      </Box>
    </Row>
  )
}
