import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import Stardiv from '../Stardiv'
import { BASE_URL } from '@env'
import './index.styl'


const data = [
  {title: "Flying Drone", pic: "/1.jpg", coast: "140$", value: 2},
  {title: "Flying Drone", pic: "/1.jpg", coast: "140$", value: 2},
  {title: "Flying Drone", pic: "/1.jpg", coast: "140$", value: 3},
  {title: "Flying Drone", pic: "/1.jpg", coast: "140$", value: 4}

]

const Toprated = () => {

  const base = BASE_URL

  return pug` 
    each val, index in data
      View.root(key=index)
        TouchableOpacity
          Image.image(
            source={uri: base + val.pic}
          )
        View.column
          TouchableOpacity
            Text.title=val.title
          Stardiv(
            num=val.value
          )
          Text.coast=val.coast
                
  `   
}



export default Toprated;