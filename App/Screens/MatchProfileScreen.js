import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import DefaultTag from '../Components/DefaultTag';
import SpotterCard from '../Components/SpotterCard';
import DefaultButton from '../Components/DefaultButton'
import { Metrics } from '../Themes';


const endorsements = ['Friendly', 'Patient', 'Knowledgeable'];

export default function MatchProfileScreen({route}) {
    return (
      <View style={styles.container}>
        <DefaultTag text={route.params.name}/>

        <View style={{marginVertical: Metrics.medPadding}}>
          <SpotterCard endorsements={endorsements} /> 
        </View>

        <DefaultButton text={"Secure Spotter"} />
      </View>
    );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

})