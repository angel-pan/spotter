import React from 'react';
import { View, StyleSheet } from 'react-native';
import DefaultTag from '../Components/DefaultTag';
import DefaultButton from '../Components/DefaultButton';
import Screen from '../Components/Screen';
import Data from '../Themes/Data';
import SpotterScrollList from '../Components/SpotterScrollList';
import BackButton from '../Components/BackButton';
import MoreButton from '../Components/MoreButton';


export default function MatchProfileScreen({route}) {


    return (
      <Screen>
        <BackButton />
        <MoreButton />
        <View style={styles.container}>
          <DefaultTag text={route.params.name}/>
        </View>
        <SpotterScrollList spotters={Data.spotters}/>
      </Screen>
    );
}

const styles = StyleSheet.create({

  container: {
    alignItems: 'center',
    marginBottom: 10
  },
})