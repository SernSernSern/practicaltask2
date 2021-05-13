import React from 'react';
import {View, ImageBackground, TouchableOpacity, Text, Picker} from 'react-native';
import { BASE_URL } from '@env'
import './index.styl'
import Productwrapper from './productwrapper'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { faGripLines } from '@fortawesome/free-solid-svg-icons'


const ShopWrapper = prop => {
    const url = '/breadcrumb.jpg'

    const base = BASE_URL

    return pug`
        View.div2
            View.shopbar
                View.shopfoundselector
                    View.shopfound
                        Text.shoptext 23 
                        Text.shoptext Product Found of 
                        Text.shoptext 50 
                    View.shopselector
                        Text.shoptext Sort By : 
                        Picker
                            Picker.Item(
                                label="Default"
                            )
                            Picker.Item(
                                label="A to Z"
                            )
                            Picker.Item(
                                label="Z to A"
                            )
                            Picker.Item(
                                label="In stock"
                            )
                View.shopfiltertab
                    View.shoptabnav
                        TouchableOpacity
                            FontAwesomeIcon(
                                icon=faGripLines
                            )
                        Text   
                        TouchableOpacity
                            FontAwesomeIcon(
                                icon=faGripLines
                            )
            
            View
                Productwrapper
    `

}


export default ShopWrapper;