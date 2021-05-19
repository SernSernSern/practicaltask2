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
    View.view.div
      View.view.shopbar
        View.view.shopfoundselect
          View.view.shopfound
            Text.view.text 23 
            Text.view.text Product Found of 
            Text.view.text 50 
          View.view.selector
            Text.view.text Sort By : 
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
        View.view.filtertab
          View.view.shoptabnav
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