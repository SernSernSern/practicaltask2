import React from 'react';
import {View, Text} from 'react-native';
import './index.styl'


const Sidewidget = ({text, data}) => {

  return pug`
    View.side-widget.d
      Text.side-widget.text=text
      View=data
  `
}



export default Sidewidget;

