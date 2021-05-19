import React from 'react';
import {View} from 'react-native';
import { BASE_URL } from '@env'
import './index.styl'
import ShopSidebar from '../ShopSidebar'
import ShopWrapper from '../ShopWrapper'

const Main = prop => {
  const url = '/breadcrumb.jpg'

  const base = BASE_URL

  return pug`
    View.div
      ShopSidebar
      ShopWrapper
  `

}


export default Main;