import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faDeaf } from "@fortawesome/free-solid-svg-icons"
import { BASE_URL } from '@env'
import './index.styl'

const Footer = prop => {

    const url = '/logo.png'
    const base = BASE_URL

    return pug`
        View.footer-area
            View.container
                View.column
                    View
                        View.footer-widget
                            Text.h4 20 Years Experience
                            View.row
                                TouchableOpacity.button
                                    FontAwesomeIcon(
                                        icon=faDeaf
                                        size=17
                                    )  
                                TouchableOpacity.button
                                    FontAwesomeIcon(
                                        icon=faDeaf
                                        size=17
                                    )  
                                TouchableOpacity.button
                                    FontAwesomeIcon(
                                        icon=faDeaf
                                        size=17
                                    )  
                                TouchableOpacity.button
                                    FontAwesomeIcon(
                                        icon=faDeaf
                                        size=17
                                    )  
                View.column
                    View
                        View.centerfooter
                            View.footer-logo
                                View
                                    Image.image(
                                        source={uri: base + url}
                                    )
                            View.footer-nav
                                Text.linav home
                                Text.linav about us
                                Text.linav shop
                                Text.linav blog
                                Text.linav pages 
                            Text.p Copyright © neha 2018 . All Right Reserved.
                View.column
                    View
                        View.footer-widget
                            View
                                Text.liend Phone : +012 345 678 102
                                Text.liend Email : info@example.com
                                Text.liend Address : Dhaka Bangladesh
            

    `
}


export default Footer;