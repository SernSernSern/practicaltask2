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
    View.footer.area
      View.footer.container
        View.footer.column
          View
            View.footer.widget
              Text.footer.text 20 Years Experience
              View.footer.row
                TouchableOpacity.footer.button
                  FontAwesomeIcon(
                    icon=faDeaf
                    size=17
                  )  
                TouchableOpacity.footer.button
                  FontAwesomeIcon(
                    icon=faDeaf
                    size=17
                  )  
                TouchableOpacity.footer.button
                  FontAwesomeIcon(
                    icon=faDeaf
                    size=17
                  )  
                TouchableOpacity.footer.button
                  FontAwesomeIcon(
                    icon=faDeaf
                    size=17
                  )  
        View.footer.column
          View
            View
              View.footer.logo
                View
                  Image.footer.image(
                    source={uri: base + url}
                  )
              View.footer.nav
                Text.footer.text.footpadding home
                Text.footer.text.footpadding about us
                Text.footer.text.footpadding shop
                Text.footer.text.footpadding blog
                Text.footer.text.footpadding pages 
              Text.footer.text.center Copyright © neha 2018 . All Right Reserved.
        View.footer.column
          View
            View.footer.widget
              View
                Text.footer.text Phone : +012 345 678 102
                Text.footer.text Email : info@example.com
                Text.footer.text Address : Dhaka Bangladesh
  `
}


export default Footer;