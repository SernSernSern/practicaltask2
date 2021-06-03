import React from 'react'
import { observer } from 'startupjs'
import {ScrollView, View} from 'react-native'
import {Footer, Main, Header} from 'components'
import './index.styl'

export default observer(function () {

  return pug`
    ScrollView
      Header
      Main
      Footer           
  `
})
