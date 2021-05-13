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
        View.cards
            each card in some
                View.card
                    View.singleproduct
                        View
                            Image.shopimage(
                                source = {uri: base + card.pic}
                            
                            )
                        View.prod
                            View
                                Text.prodtext=card.title
                            View
                                Text.prodtextred=card.cost
                        View.productcart
                            Text.productcarttext=card.type          
    `
}



export default Productwrapper;