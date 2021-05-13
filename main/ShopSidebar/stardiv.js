import React from 'react';
import {View, Text} from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faStar } from "@fortawesome/free-solid-svg-icons"
import './index.styl'


const Stardiv = (num) => {
    return pug`
        - var n = 1
        - var k = num
        View.stardiv
            while n <= 5
                if n <= k.num
                    FontAwesomeIcon.starright(
                        icon=faStar
                        color='#ee3333'
                    )
                else 
                    FontAwesomeIcon.starright(
                        icon=faStar
                        
                    )
                - n++
    `
}



export default Stardiv;
