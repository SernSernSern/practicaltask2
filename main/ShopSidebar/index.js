import React from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import { BASE_URL } from '@env'
import Sidewidget from './Sidewidget'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import Toprated from './Toprated'
import './index.styl'

const ShopSidebar = () => {
  const url = '/breadcrumb.jpg'

  const base = BASE_URL
  const sizeData = ['XL', 'M', 'L', 'ML', 'LM']
  const categoryData = [
    {title: 'Accessories', page: '4'},
    {title: 'Book', page: '9'},
    {title: 'Clothing', page: '5'},
    {title: 'Homelife', page: '3'},
    {title: 'Kids & Baby', page: '4'}
  ]

  const colorData = ['red', 'pink', 'blue', 'sky', 'green']

  const searchbar = pug`
    View.searchBarRow
      TextInput.input
      TouchableOpacity.button(
        color="#dedede"
      )
        FontAwesomeIcon(
          icon=faSearch
          color='#dc3545'
          size = 24
        )   
  `;


  const category = pug`
    each item in categoryData
      TouchableOpacity
        View.categoryItem
          Text.categoryText=item.title
          Text.categoryText=item.page
  `;

  const color = pug`
    View.colorItem
      each item in colorData
        TouchableOpacity
          View.circleColor(styleName=item)
  `;

  const size = pug`
    View.sizeItem
      each item in sizeData
        TouchableOpacity
          Text.sizeText=item
  `;

  return pug`
    View.root
      Sidewidget(
        text="Search Products"
        data=searchbar
      )
      Sidewidget(
        text="Categories"
        data=category
      )
      Sidewidget(
        text="color"
        data=color
      )
      Sidewidget(
        text="size"
        data=size 
      )
      Sidewidget(
        text="Top rated product"
      )
      Toprated
      
  `
}




export default ShopSidebar;