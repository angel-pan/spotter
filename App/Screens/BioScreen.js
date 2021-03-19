import * as React from 'react';
import Screen from '../Components/Screen';
import SpotterProfileTop from '../Components/SpotterProfileTop';
import BioScreenTab from '../Components/BioScreenTab';
import BackButton from '../Components/BackButton';
import DefaultButton from '../Components/DefaultButton';
import {View} from 'react-native';
import { updateCurrentSpotter, completeSession } from '../Themes/Utils';

export default function MatchBioScreen({navigation, route, spotterSecured}) {
    const buttonText = spotterSecured ? 'Complete Session' : 'Secure Spotter';
    const newRoute = spotterSecured ? 'Endorse' : 'Match Secured';
    const profileText = spotterSecured ? 'Spotter Secured!' : null;
    const onButtonPress = spotterSecured ? completeSession : () => updateCurrentSpotter(route.params.spotterInfo);
    return(
      <Screen>
        <BackButton />
        <SpotterProfileTop {...route.params} text={profileText}/>
        <BioScreenTab {...route.params} spotterSecured={spotterSecured}/>
        <View style={{alignItems: 'center'}}>
          <DefaultButton
            text={buttonText}
            onPress={() => {
              onButtonPress();
              navigation.navigate(newRoute, route.params);
              }}/> 
        </View>
      </Screen>
  );
}
