import React from 'react';
import {View, Text, TextInput, TouchableOpacity, Picker} from 'react-native';
import { BASE_URL } from '@env'
import './index.styl'
import Sidewidget from './sidewidget'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { faGripLines } from '@fortawesome/free-solid-svg-icons'
import Toprated from './toprated'

const ShopSidebar = prop => {
    const url = '/breadcrumb.jpg'

    const base = BASE_URL

    const searchbar = pug`
        View.divrow
            TextInput.input
            TouchableOpacity.button(
                color="#dedede"
            )
                FontAwesomeIcon(
                    icon=faSearch
                    color='#dc3545'
                    size = 24
                )       

    `;

    const category = pug`
        View
            View.category
                Text.categorytext Accessories
                Text.categorytext 4
            View.category
                Text.categorytext Book
                Text.categorytext 9
            View.category
                Text.categorytext Clothing
                Text.categorytext 5
            View.category
                Text.categorytext Homelife
                Text.categorytext 3
            View.category
                Text.categorytext Kids & Baby
                Text.categorytext 4
                    
    `;

    const color = pug`
        View.color
            View.colorcircle.red
            View.colorcircle.pink
            View.colorcircle.blue
            View.colorcircle.sky
            View.colorcircle.green
            View.colorcircle.purple
    `;

    const size = pug`
        View.size
            Text.categorytext XL
            Text.categorytext M
            Text.categorytext L
            Text.categorytext ML
            Text.categorytext LM
    `;

    return pug`
            View.div
                View
                    Sidewidget.sidebar-widget(
                        text="Search Products"
                        data=searchbar
                    )
                    Sidewidget.sidebar-widget(
                        text="Categories"
                        data=category
                    )
                    Sidewidget.sidebar-widget(
                        text="color"
                        data=color
                    )
                    Sidewidget.sidebar-widget(
                        text="size"
                        data=size 
                    )
                    Toprated
    `
}




export default ShopSidebar;