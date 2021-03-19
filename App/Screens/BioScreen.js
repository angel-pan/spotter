import * as React from 'react';
import Screen from '../Components/Screen';
import SpotterProfileTop from '../Components/SpotterProfileTop';
import BioScreenTab from '../Components/BioScreenTab';
import BackButton from '../Components/BackButton';
import DefaultButton from '../Components/DefaultButton';
import {View} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function MatchBioScreen({navigation, route, spotterSecured}) {
    const buttonText = spotterSecured ? 'Complete Session' : 'Secure Spotter';
    const newRoute = spotterSecured ? 'Endorse' : 'Match Secured';
    const profileText = spotterSecured ? 'Spotter Secured!' : null;
    const updateCurrentSpotter = spotterSecured ?
    async (value) => {
      try {
          await AsyncStorage.setItem('currentSpotter', JSON.stringify(value));
      } catch(e) {
          console.log(e);
      }
    } : 
    async () => {
        try {
          await AsyncStorage.removeItem('curretSpotter');
        } catch(e) {
          console.log(e)
        }
    }
    return(
      <Screen>
        <BackButton />
        <SpotterProfileTop {...route.params} text={profileText}/>
        <BioScreenTab {...route.params} spotterSecured={spotterSecured}/>
        <View style={{alignItems: 'center'}}>
          <DefaultButton
            text={buttonText}
            onPress={() => {
              updateCurrentSpotter();
              navigation.navigate(newRoute, route.params);
              }}/> 
        </View>
      </Screen>
  );
}
