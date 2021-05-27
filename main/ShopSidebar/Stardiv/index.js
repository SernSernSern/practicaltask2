import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faStar } from "@fortawesome/free-solid-svg-icons"
import './index.styl'

const Stardiv = (num) => {
  return pug`
    - var n = 1
    - var k = num
    View.root
      while n <= 5
        if n <= k.num
          TouchableOpacity
            FontAwesomeIcon.starright(
              icon=faStar
              color='#ee3333'
              styleName={first:n==1}
            )
        else 
          TouchableOpacity
            FontAwesomeIcon.starright(
              icon=faStar
              styleName={first:n==1}
            )
        - n++
  `
}


/*
- var n = 1
    - var k = num
    View.root
      while n <= 5
        if n <= k.num
          TouchableOpacity
            FontAwesomeIcon.starright(
              icon=faStar
              color='#ee3333'
              styleName={first:n==1}
            )
        else 
          TouchableOpacity
            FontAwesomeIcon.starright(
              icon=faStar
              styleName={first:n==1}
            )
        - n++
*/
export default Stardiv;
