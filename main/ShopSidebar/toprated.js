import React from 'react';
import {View, Text, Image} from 'react-native';
import Stardiv from './stardiv'
import { BASE_URL } from '@env'
import './index.styl'


const data = [
    {title: "Flying Drone", pic: "/1.jpg", coast: "140$", value: 2},
    {title: "Flying Drone", pic: "/1.jpg", coast: "140$", value: 2},
    {title: "Flying Drone", pic: "/1.jpg", coast: "140$", value: 3},
    {title: "Flying Drone", pic: "/1.jpg", coast: "140$", value: 4}

]

const Toprated = param => {

    const base = BASE_URL

    return pug`
        View
            each val in data
                View.toprow
                    Image.topimage(
                        source={uri: base + val.pic}
                    )
                    View.columntop
                        Text.titletop=val.title
                        Stardiv(
                            num=val.value
                        )
                        Text.coasttop=val.coast
                
    `   
}



export default Toprated;