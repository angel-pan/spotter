import * as React from 'react';
import SvgIcon from 'react-native-svg-icon';
import svgs from '../../assets/svgs'; 

const Icon = ({color, size, ...otherProps}) => 
  <SvgIcon 
    fill={color} 
    stroke={color} 
    height={size}
    width={size}
    {...otherProps} 
    svgs={svgs} />;
export default Icon;