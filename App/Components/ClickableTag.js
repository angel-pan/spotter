import * as React from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import DefaultTag from './DefaultTag';

const ClickableTag = ({onPress, ...otherProps}) => {
    return (
        <TouchableOpacity onPress={onPress}>
          <DefaultTag {...otherProps}/>
        </TouchableOpacity>
    );
}


export default ClickableTag;