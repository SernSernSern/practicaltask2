import React from 'react';
import {View, Text} from 'react-native';
import './index.styl'


const Sidewidget = ({text, data}) => {

    return pug`
        View.divside
            Text.text=text
            View=data
    `
}



export default Sidewidget;

