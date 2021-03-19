import * as React from 'react'
import {Image} from 'react-native';
import Screen from '../Components/Screen';
import {Images} from '../Themes'

export default function WelcomeScreen() {
    return(
        <Image source={Images.welcome}/>
    );
}