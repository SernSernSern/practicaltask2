import React from 'react'
import { observer, emit, useValue, useLocal } from 'startupjs'
import {ScrollView, View} from 'react-native'
import APP from '../../app.json'
import './index.styl'
import Header from '../Header';
import Main from '../Main'
import Footer from '../Footer'



export default observer(function ({ children }) {

  return pug`
    ScrollView.body
      View.wrapper
        Header
        Main
        Footer
            
  `
})
