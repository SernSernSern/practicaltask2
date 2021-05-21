import React from 'react';
import {View, ImageBackground, Text} from 'react-native';
import { BASE_URL } from '@env'
import './index.styl'

const Header = prop => {
  const url = '/breadcrumb.jpg'

  const base = BASE_URL

  return pug`
    ImageBackground.header(styleName='image')(
      source = {uri: base + url}
    )
      View.header(styleName='div')
        View
          Text.header(styleName='text') Shop
          Text.header(styleName='smaltext') HOME / SHOP  
  `
}


export default Header;