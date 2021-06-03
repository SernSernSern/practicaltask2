import React from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import { BASE_URL } from '@env'
import Sidewidget from './Sidewidget'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import Toprated from './Toprated'
import './index.styl'

export default( function ShopSidebar() {
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

  const colorData = ['#ff4136', '#3649ff', '#ff01f0', '#00c0ff', '#00ffae', '#8a00ff']

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

  const filterByPrice = pug`
    View.priceFilter
      View.sliderRange
        TouchableOpacity.sliderLeft
        TouchableOpacity.sliderMain 
        TouchableOpacity.sliredRight
      View.priceSliderAmount
        Text.priceSliderText Price : $20 - $100
        Text.priceSliderText Filter
  `

  const category = pug`
    each item, index in categoryData
      TouchableOpacity(key=index)
        View.categoryItem
          Text.categoryText=item.title
          Text.categoryText=item.page
  `;

  const color = pug`
    View.colorItem
      each item, index in colorData
        TouchableOpacity(key=index)
          View.circleColor(
            styleName={first:!index}
            style={backgroundColor: item} 
          )
  `;

  const size = pug`
    View.sizeItem
      each item, index in sizeData
        TouchableOpacity(key=index)
          Text.sizeText(styleName={first:!index})=item
  `;

  return pug`
    View.root
      Sidewidget(
        text="Search Products"
        data=searchbar
        first=true
      )
      Sidewidget(
        text="Filter"
        data=filterByPrice
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
})