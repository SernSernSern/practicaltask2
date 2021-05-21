import React from 'react';
import {View, TouchableOpacity, Text, Picker} from 'react-native';
import { BASE_URL } from '@env'
import './index.styl'
import Productwrapper from './productwrapper'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { faGripLines } from '@fortawesome/free-solid-svg-icons'


const ShopWrapper = prop => {
  const url = '/breadcrumb.jpg'

  const base = BASE_URL

  return pug`
    View.view(styleName='div')
      View.view(styleName='shopbar')
        View.view(styleName='shopfoundselect')
          View.view(styleName='shopfound')
            Text.view(styleName='text') 23 
            Text.view(styleName='text') Product Found of 
            Text.view(styleName='text') 50 
          View.view(styleName='selector')
            Text.view(styleName='text') Sort By : 
            Picker
              Picker.Item(
                label="Default"
              )
              Picker.Item(
                label="A to Z"
              )
              Picker.Item(
                label="Z to A"
              )
              Picker.Item(
                label="In stock"
              )
        View.view(styleName='filtertab')
          View.view(styleName='shoptabnav')
            TouchableOpacity
              FontAwesomeIcon(
                icon=faGripLines
              )
            Text   
            TouchableOpacity
              FontAwesomeIcon(
                icon=faGripLines
              )
        
      View
        Productwrapper
  `

}


export default ShopWrapper;