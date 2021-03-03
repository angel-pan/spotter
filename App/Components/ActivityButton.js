import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';
import colors from '../Themes/Colors';
import Icon from '../Components/Icon';


const ActivityButton = (props) => {
  return (
        <View style={styles.container}>
        <Icon
          name={'Weights'}
          fill={colors.red}
          stroke={colors.red}
          width={50}
          height={50}
        />
          <Text style={styles.label}>{props.name}</Text>
        </View>
  );
}


const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 117,
    width: 147,
    borderRadius: 10,
    backgroundColor: colors.orange,
  },

  label: {
    fontFamily: 'OpenSans_400Regular',
    fontSize: 17.25,
  },
});

export default ActivityButton;
