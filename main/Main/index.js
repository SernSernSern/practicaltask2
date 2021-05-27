import React from 'react';
import {View} from 'react-native';
import { BASE_URL } from '@env'
import ShopSidebar from '../ShopSidebar'
import ShopWrapper from '../ShopWrapper'
import './index.styl'

const Main = prop => {
  const url = '/breadcrumb.jpg'

  const base = BASE_URL

  return pug`
    View.root
      ShopSidebar
      ShopWrapper
  `

}


export default Main;