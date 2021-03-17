import * as React from 'react';
import {View, TouchableOpacity, StyleSheet} from 'react-native';
import Icon from './Icon';
import colors from '../Themes/Colors';
import metrics from '../Themes/Metrics';

export default function TextEditingTools() {
    return (
      <View style = {styles.inLine}>
        <TouchableOpacity style ={styles.button}>
          <Icon name="Camera"
            fill={colors.white}
            width={metrics.screenHeight * 0.03}
            height={metrics.screenHeight * 0.03}/>
        </TouchableOpacity>
        <TouchableOpacity style ={styles.button}>
          <Icon name="Microphone"
            fill={colors.white}
            width={metrics.screenHeight * 0.03}
            height={metrics.screenHeight * 0.03}/>
        </TouchableOpacity>
        <TouchableOpacity style ={styles.button}>
         <Icon name="Tag"
            fill={colors.white}
            width={metrics.screenHeight * 0.03}
            height={metrics.screenHeight * 0.03}/>
        </TouchableOpacity>
        <TouchableOpacity style = {styles.format}>
          <Icon name="Bold"
            fill={colors.black}
            width={metrics.screenHeight * 0.03}
            height={metrics.screenHeight * 0.03}/>
          <Icon name="Slant"
            fill={colors.black}
            width={metrics.screenHeight * 0.03}
            height={metrics.screenHeight * 0.03}/>
          <Icon name="Underline"
            fill={colors.black}
            width={metrics.screenHeight * 0.03}
            height={metrics.screenHeight * 0.03}/>
        </TouchableOpacity>
      </View>
    );
}

const styles = StyleSheet.create({
  format:{
    paddingHorizontal: 15,
    alignItems: 'center',
    justifyContent:'space-around',
    marginHorizontal: 10,
    backgroundColor: '#F2F2F2',
    borderRadius: 90,
    flexDirection:'row',
    width: 170,
  },
  inLine:{
    marginHorizontal: -20,
    flexDirection: 'row',
    shadowOffset: {
        width: 0,
        height: 1,
      },
    shadowOpacity: 0.12,
    shadowRadius: 2.22,
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.orange,
    height: 50,
    width: 50,
    borderRadius: 90,
    marginHorizontal: 7,
  },

});