import React from 'react';
import {View} from 'react-native';
import { BASE_URL } from '@env'
import { ShopSidebar, ShopWrapper } from 'components'
import './index.styl'

export default( function Main () {
  const url = '/breadcrumb.jpg'

  const base = BASE_URL

  return pug`
    View.root
      ShopSidebar
      ShopWrapper
  `

})
