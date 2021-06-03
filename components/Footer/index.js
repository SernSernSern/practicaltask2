import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faDeaf } from "@fortawesome/free-solid-svg-icons"
import { BASE_URL } from '@env'
import './index.styl'

export default( function Footer(){

  const url = '/logo.png'
  const base = BASE_URL

  const icons = [faDeaf, faDeaf, faDeaf, faDeaf]
  const buttonNames = ['home', 'about us', 'blog', 'pages']

  return pug`
    View.root
      View.column
        View.widget
          Text.iconTitle 20 Years Experience
          View.iconRow
            each item, index in icons
              TouchableOpacity.icon(key=index styleName={first:!index})
                FontAwesomeIcon(
                  icon=item
                  size=17
                )    
      View.navItem
          View.logo
            Image.image(
              source={uri: base + url}
            )
          View.nav
            each button, index in buttonNames
              TouchableOpacity(key=index)
                Text.buttonText(styleName={first:!index})=button
          Text.copyright Copyright © neha 2018 . All Right Reserved.
      View.adressItem
        View.adressRow
          Text.adressTitle Phone : 
          Text.adressDescription +012 345 678 102
        View.adressRow
          Text.adressTitle Email : 
          Text.adressDescription info@example.com
        View.adressRow
          Text.adressTitle Address :
          Text.adressDescription Dhaka Bangladesh
  `
})


