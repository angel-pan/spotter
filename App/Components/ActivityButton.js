import React from 'react';
import {
  StyleSheet,
  Text,
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import colors from '../Themes/Colors';
import Icon from '../Components/Icon';
import metrics from '../Themes/Metrics';



const ActivityButton = ({name, onPress}) => {
  const styles = StyleSheet.create({
    container: {
      justifyContent: 'center',
      alignItems: 'center',
      height: metrics.screenHeight * .15,
      width: metrics.screenWidth * .35,
      borderRadius: 10,
      backgroundColor: colors[`tagBackground${name}`],
      marginHorizontal: 8,
      marginTop: metrics.screenWidth * .05,
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
      fontSize: metrics.screenHeight * 0.020,
      color: colors[`tagText${name}`]
    },
  });

  return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
          <Icon
            name={name}
            fill={colors[`tagIcon${name}`]}
            stroke={colors[`tagIcon${name}`]}
            width={metrics.screenHeight * .06}
            height={metrics.screenHeight * .06}
          />
          <Text style={styles.label}>{name}</Text>
        </TouchableOpacity>
  );
}




export default ActivityButton;
