import * as React from 'react'
import { List, Avatar } from 'antd'
import { libs, Lib } from 'constants/'
import { isUrl } from 'utils'

const ListItem = List.Item
const ListMeta = List.Item.Meta

export function LibList() {
  return (
    <List
      itemLayout="horizontal"
      header={<h3>Libraries Used </h3>}
      bordered={false}
      dataSource={libs}
      renderItem={getRenderItem}
    />
  )
}

function getRenderItem(item: Lib) {
  return (
    <ListItem>
      <ListMeta
        avatar={getAvatar(item)}
        title={<a href={item.url}>{item.lib}</a>}
        description={item.desc}
      />
    </ListItem>
  )
}

function getAvatar(item: Lib) {
  return isUrl(item.icon) ? <Avatar src={item.icon} /> : <Avatar>{item.icon}</Avatar>
}