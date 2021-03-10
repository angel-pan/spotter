import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import DefaultTag from '../Components/DefaultTag';
import SpotterCard from '../Components/SpotterCard';
import DefaultButton from '../Components/DefaultButton';
import Screen from '../Components/Screen';
import Data from '../Themes/Data';
import { FlatList } from 'react-native-gesture-handler';
import SpotterScrollList from '../Components/SpotterScrollList';

export default function MatchProfileScreen({route}) {
    return (
        <Screen>
          <View style={styles.container}>
            <DefaultTag text={route.params.name}/>
          </View>
          <SpotterScrollList spotters={Data.spotters}/>
          <View style={styles.container}>
            <DefaultButton text='Secure Spotter' />
          </View>
        </Screen>
    );
}

const styles = StyleSheet.create({

  container: {
    alignItems: 'center',
    marginBottom: 10
  },

})