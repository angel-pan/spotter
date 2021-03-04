import React from 'react';
import {
  StyleSheet,
  Text,
} from 'react-native';
import colors from '../Themes/Colors';
import Icon from '../Components/Icon';
import { TouchableOpacity } from 'react-native-gesture-handler';



const ActivityButton = ({name, onPress}) => {
  const styles = StyleSheet.create({
    container: {
      justifyContent: 'center',
      alignItems: 'center',
      height: 117,
      width: 147,
      borderRadius: 10,
      backgroundColor: colors[`tagBackground${name}`],
      marginHorizontal: 8,
      marginTop: 26,
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 0.12,
      shadowRadius: 2.22,
      
      elevation: 2,
    },
  
    label: {
      fontFamily: 'OpenSans_400Regular',
      fontSize: 17.25,
      color: colors[`tagText${name}`]
    },
  });

  return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
          <Icon
            name={name}
            fill={colors[`tagIcon${name}`]}
            stroke={colors[`tagIcon${name}`]}
            width={50}
            height={50}
          />
          <Text style={styles.label}>{name}</Text>
        </TouchableOpacity>
  );
}




export default ActivityButton;
