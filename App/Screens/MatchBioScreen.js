import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SearchBar from '../Components/SearchBar';
import ActivityButton from '../Components/ActivityButton';
import Screen from '../Components/Screen';
import colors from '../Themes/Colors';
import metrics from '../Themes/Metrics';

export default function MatchProfileScreen({route}) {
    return(

    <View style={styles.container}>
      <Text style={styles.text}>Bio Screen!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    text: {
        fontFamily: 'OpenSans_600SemiBold',
        fontSize: 15,
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent:'center',
    }

})
