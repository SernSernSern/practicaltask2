import React from 'react';
import {View, Text, Image} from 'react-native';
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


const Productwrapper = param => {

  const base = BASE_URL

  return pug`
    View.product(styleName='cards')
      each card in some
        View.product(styleName='card')
          View.product(styleName='single')
            View
              Image.product(styleName='cardimage')(
                source = {uri: base + card.pic}
              )
            View.product(styleName='prod')
              View
                Text.product(styleName='text')=card.title
              View
                Text.product(styleName='text red')=card.cost
              View.productcart
                Text.product(styleName='text')=card.type 
  `
}



export default Productwrapper;