import React from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import { BASE_URL } from '@env'
import './index.styl'
import Sidewidget from './sidewidget'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { faGripLines } from '@fortawesome/free-solid-svg-icons'
import Toprated from './toprated'

const ShopSidebar = prop => {
  const url = '/breadcrumb.jpg'

  const base = BASE_URL


  const searchbar = pug`
    View.main.divrow
      TextInput.main.input
      TouchableOpacity.main.button(
        color="#dedede"
      )
        FontAwesomeIcon(
          icon=faSearch
          color='#dc3545'
          size = 24
        )   
  `;


  const category = pug`
    View
      View.main.category
        Text.main.text Accessories
        Text.main.text 4
      View.main.category
        Text.main.text Book
        Text.main.text 9
      View.main.category
        Text.main.text Clothing
        Text.main.text 5
      View.main.category
        Text.main.text Homelife
        Text.main.text 3
      View.main.category
        Text.main.text Kids & Baby
        Text.main.text 4
  `;

  const color = pug`
    View.main.color
      View.main.circlecolor.red
      View.main.circlecolor.pink
      View.main.circlecolor.blue
      View.main.circlecolor.sky
      View.main.circlecolor.green
      View.main.circlecolor.purple
  `;

  const size = pug`
    View.main.size
      Text.main.text XL
      Text.main.text M
      Text.main.text L
      Text.main.text ML
      Text.main.text LM
  `;

  return pug`
    View.main.div
      View
        Sidewidget.main.sidebar-widget(
          text="Search Products"
          data=searchbar
        )
        Sidewidget.main.sidebar-widget(
          text="Categories"
          data=category
        )
        Sidewidget.main.sidebar-widget(
          text="color"
          data=color
        )
        Sidewidget.main.sidebar-widget(
          text="size"
          data=size 
        )
        Toprated
  `
}




export default ShopSidebar;