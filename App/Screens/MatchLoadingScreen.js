import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Screen from '../Components/Screen';
import LoadingDots from '../Components/LoadingDots';
import ActivityButton from '../Components/ActivityButton';
import DefaultButton from '../Components/DefaultButton';
import colors from '../Themes/Colors';

export default function MatchLoadingScreen({navigation, route}) {
    return (
      <Screen>
        <View style={{height: '100%', justifyContent: 'center'}}>
        <View style={styles.container}>
          <View>
          <Text style={[styles.text, {color: colors.black}]}>Finding a</Text>
          <Text style={[styles.text, {color: colors.orange}]}>Spotter...</Text>
          </View>
          <ActivityButton name={route.params.name}/>
          <LoadingDots />
          <DefaultButton text='Cancel' onPress={()=> navigation.pop()}/>
        </View>
        </View>
      </Screen>
    );
}

const styles = StyleSheet.create({
    text: {
        fontFamily: 'OpenSans_600SemiBold',
        fontSize: 35,
        letterSpacing: 0.4
    },
    container: {
        height: '70%',
        alignItems: 'center',
        justifyContent: 'space-between'
    }
    
})