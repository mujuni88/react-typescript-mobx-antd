import * as React from 'react'
import { Menu } from 'antd'
import { NavLink } from 'react-router-dom'
import { withRouter, RouteComponentProps } from 'react-router'

const MenuItem = Menu.Item

class NavigationMenu extends React.Component<RouteComponentProps<{}>> {
  render() {
    const { location } = this.props

    return (
      <Menu
        theme="dark"
        mode="horizontal"
        style={{ lineHeight: '64px' }}
        defaultSelectedKeys={['/']}
        selectedKeys={[location.pathname]}
      >
        <MenuItem key="/">
          <NavLink to="/">Home</NavLink>
        </MenuItem>
        <MenuItem key="/nav1">
          <NavLink to="/nav1">Nav 1</NavLink>
        </MenuItem>
        <MenuItem key="/nav2">
          <NavLink to="/nav2">Nav 2</NavLink>
        </MenuItem>
      </Menu>
    )
  }
}

export const NavMenu = withRouter(NavigationMenu)