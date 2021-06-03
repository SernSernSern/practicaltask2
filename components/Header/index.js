import React from 'react';
import {View, ImageBackground, Text} from 'react-native';
import { BASE_URL } from '@env'
import './index.styl'

export default( function Header (){
  const url = '/breadcrumb.jpg'

  const base = BASE_URL

  return pug`
    ImageBackground.root(
      source = {uri: base + url}
    )
      View.head
        Text.title Shop
        Text.description HOME / SHOP  
  `
})

