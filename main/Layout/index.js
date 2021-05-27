import React from 'react'
import { observer } from 'startupjs'
import {ScrollView, View} from 'react-native'
import Header from '../Header';
import Main from '../Main'
import Footer from '../Footer'
import './index.styl'



export default observer(function ({ children }) {

  return pug`
    ScrollView
      Header
      Main
      Footer           
  `
})
