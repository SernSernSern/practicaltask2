import React from 'react';
import {View, ImageBackground, Text} from 'react-native';
import { BASE_URL } from '@env'
import './index.styl'

const Header = prop => {
  const url = '/breadcrumb.jpg'

  const base = BASE_URL

  return pug`
    ImageBackground.header.image(
      source = {uri: base + url}
    )
      View.header.div
        View
          Text.header.text Shop
          Text.header.smaltext HOME / SHOP  
  `
}


export default Header;