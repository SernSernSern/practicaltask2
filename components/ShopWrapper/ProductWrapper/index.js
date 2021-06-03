import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import { BASE_URL } from '@env'
import './index.styl'


const some = [
    {title: "WOODEN FURNITURE", cost: "110$", pic: '/1.jpg', type: "Electronic"},
    {title: "WOODEN FURNITURE", cost: "110$", pic: '/1.jpg', type: "Electronic"},
    {title: "WOODEN FURNITURE", cost: "110$", pic: '/1.jpg', type: "Electronic"},
    {title: "WOODEN FURNITURE", cost: "110$", pic: '/1.jpg', type: "Electronic"},
    {title: "WOODEN FURNITURE", cost: "110$", pic: '/1.jpg', type: "Electronic"},
    {title: "WOODEN FURNITURE", cost: "110$", pic: '/1.jpg', type: "Electronic"},
    {title: "WOODEN FURNITURE", cost: "110$", pic: '/1.jpg', type: "Electronic"},
    {title: "WOODEN FURNITURE", cost: "110$", pic: '/1.jpg', type: "Electronic"},
    {title: "WOODEN FURNITURE", cost: "110$", pic: '/1.jpg', type: "Electronic"},
    {title: "WOODEN FURNITURE", cost: "110$", pic: '/1.jpg', type: "Electronic"},
    {title: "WOODEN FURNITURE", cost: "110$", pic: '/1.jpg', type: "Electronic"},
    {title: "WOODEN FURNITURE", cost: "110$", pic: '/1.jpg', type: "Electronic"}
]


const ProductWrapper = () => {

  const base = BASE_URL

  return pug`
    View.root
      each card, index in some
        View.card(key=index)
          View.cardItem
            TouchableOpacity
              Image.cardImage(
                source = {uri: base + card.pic}
              )
            View.prod
              TouchableOpacity
                Text.cardText=card.title
              TouchableOpacity
                Text.cardText(styleName='red')=card.cost
              TouchableOpacity
                View.productcart
                  Text.cardText=card.type 
  `
}



export default ProductWrapper;