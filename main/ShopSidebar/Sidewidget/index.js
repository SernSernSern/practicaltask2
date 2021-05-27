import React from 'react';
import {View, Text} from 'react-native';
import './index.styl'


const Sidewidget = ({text, data}) => {

  return pug`
    View.root
      Text.sideWidgetText=text
      View.content=data
  `
}



export default Sidewidget;

