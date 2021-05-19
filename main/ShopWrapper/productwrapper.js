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
    View.product.cards
      each card in some
        View.product.card
          View.product.single
            View
              Image.product.cardimage(
                source = {uri: base + card.pic}
              )
            View.product.prod
              View
                Text.product.text=card.title
              View
                Text.product.text.red=card.cost
              View.productcart
                Text.product.text=card.type 
  `
}



export default Productwrapper;