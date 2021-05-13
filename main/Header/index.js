import React from 'react';
import {View, ImageBackground, Text} from 'react-native';
import { BASE_URL } from '@env'
import './index.styl'

const Header = prop => {
    const url = '/breadcrumb.jpg'

    const base = BASE_URL

    return pug`
        ImageBackground.image(
            source = {uri: base + url}
        )
            View.div
                View
                    Text.text1 Shop
                    Text.text2 HOME / SHOP
            
    `
}


export default Header;