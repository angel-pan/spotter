import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import colors from '../Themes/Colors';

export default class ActivityButton extends Component {

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.label}>Component!</Text>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.orange,
    height: 117,
    width: 147,
    borderRadius: 10,
  },

  label: {
    fontFamily: 'OpenSans_400Regular',
    fontSize: 17.25,
  }
});
