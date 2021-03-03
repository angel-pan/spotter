import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import colors from '../Themes/Colors';
import Icon from '../Components/Icon';



const ActivityButton = (props) => {
  const styles = StyleSheet.create({
    container: {
      justifyContent: 'center',
      alignItems: 'center',
      height: 117,
      width: 147,
      borderRadius: 10,
      backgroundColor: colors['tagBackground' + props.name],
      marginHorizontal: 8,
      marginTop: 26
    },
  
    label: {
      fontFamily: 'OpenSans_400Regular',
      fontSize: 17.25,
      color: colors['tagText' + props.name]
    },
  });

  return (
        <View style={styles.container}>
        <Icon
          name={props.name}
          fill={colors['tagIcon' + props.name]}
          stroke={colors['tagIcon' + props.name]}
          width={50}
          height={50}
        />
          <Text style={styles.label}>{props.name}</Text>
        </View>
  );
}




export default ActivityButton;
