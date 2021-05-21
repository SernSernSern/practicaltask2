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
    View.main(styleName='divrow')
      TextInput.main(styleName='input')
      TouchableOpacity.main(styleName='button')(
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
      View.main(styleName='category')
        Text.main(styleName='text') Accessories
        Text.main(styleName='text') 4
      View.main(styleName='category')
        Text.main(styleName='text') Book
        Text.main(styleName='text') 9
      View.main(styleName='category')
        Text.main(styleName='text') Clothing
        Text.main(styleName='text') 5
      View.main(styleName='category')
        Text.main(styleName='text') Homelife
        Text.main(styleName='text') 3
      View.main(styleName='category')
        Text.main(styleName='text') Kids & Baby
        Text.main(styleName='text') 4
  `;

  const color = pug`
    View.main(styleName='color')
      View.main(styleName='circlecolor red')
      View.main(styleName='circlecolor pink')
      View.main(styleName='circlecolor blue')
      View.main(styleName='circlecolor sky')
      View.main(styleName='circlecolor green')
      View.main(styleName='circlecolor purple')
  `;

  const size = pug`
    View.main(styleName='size')
      Text.main(styleName='text') XL
      Text.main(styleName='text') M
      Text.main(styleName='text') L
      Text.main(styleName='text') ML
      Text.main(styleName='text') LM
  `;

  return pug`
    View.main(styleName='div')
      View
        Sidewidget.main(styleName='sidebar-widget')(
          text="Search Products"
          data=searchbar
        )
        Sidewidget.main(styleName='sidebar-widget')(
          text="Categories"
          data=category
        )
        Sidewidget.main(styleName='sidebar-widget')(
          text="color"
          data=color
        )
        Sidewidget.main(styleName='sidebar-widget')(
          text="size"
          data=size 
        )
        Toprated
  `
}




export default ShopSidebar;