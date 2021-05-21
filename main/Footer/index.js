import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faDeaf } from "@fortawesome/free-solid-svg-icons"
import { BASE_URL } from '@env'
import './index.styl'

const Footer = prop => {

  const url = '/logo.png'
  const base = BASE_URL

  return pug`
    View.footer(styleName='area')
      View.footer(styleName='container')
        View.footer(styleName='column')
          View
            View.footer(styleName='widget')
              Text.footer(styleName='text') 20 Years Experience
              View.footer(styleName='row')
                TouchableOpacity.footer(styleName='button')
                  FontAwesomeIcon(
                    icon=faDeaf
                    size=17
                  )  
                TouchableOpacity.footer(styleName='button')
                  FontAwesomeIcon(
                    icon=faDeaf
                    size=17
                  )  
                TouchableOpacity.footer(styleName='button')
                  FontAwesomeIcon(
                    icon=faDeaf
                    size=17
                  )  
                TouchableOpacity.footer(styleName='button')
                  FontAwesomeIcon(
                    icon=faDeaf
                    size=17
                  )  
        View.footer(styleName='column')
          View
            View
              View.footer(styleName='logo')
                View
                  Image.footer(styleName='image')(
                    source={uri: base + url}
                  )
              View.footer(styleName='nav')
                Text.footer(styleName='text footpadding') home
                Text.footer(styleName='text footpadding') about us
                Text.footer(styleName='text footpadding') shop
                Text.footer(styleName='text footpadding') blog
                Text.footer(styleName='text footpadding') pages 
              Text.footer(styleName='text center') Copyright © neha 2018 . All Right Reserved.
        View.footer(styleName='column')
          View
            View.footer(styleName='widget')
              View
                Text.footer(styleName='text') Phone : +012 345 678 102
                Text.footer(styleName='text') Email : info@example.com
                Text.footer(styleName='text') Address : Dhaka Bangladesh
  `
}


export default Footer;