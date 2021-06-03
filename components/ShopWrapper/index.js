import React from 'react';
import {View, TouchableOpacity, Text, Picker} from 'react-native';
import { BASE_URL } from '@env'
import ProductWrapper from './ProductWrapper'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { faGripLines } from '@fortawesome/free-solid-svg-icons'
import './index.styl'

export default( function ShopWrapper() {
  const url = '/breadcrumb.jpg'

  const base = BASE_URL

  return pug`
    View.root
      View.shopbar
        View.shopfoundselect
          View.shopfound
            Text.shopBarText.red 23 
            Text.shopBarText Product Found of 
            Text.shopBarText.red 50 
          View.selector
            Text.selectorText Sort By : 
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
        View.filtertab
          View.shoptabnav
            TouchableOpacity
              FontAwesomeIcon(
                icon=faGripLines
              )  
            TouchableOpacity.filterButton
              FontAwesomeIcon(
                icon=faGripLines
              )
      ProductWrapper
  `

})