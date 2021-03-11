import * as React from 'react';
import Screen from '../Components/Screen';
import SpotterProfileTop from '../Components/SpotterProfileTop';
import BioScreenTab from '../Components/BioScreenTab';
import BackButton from '../Components/BackButton';
import DefaultButton from '../Components/DefaultButton';
import {View} from 'react-native';

export default function MatchBioScreen({navigation, route, spotterSecured}) {
    let buttonText = spotterSecured ? 'Complete Session' : 'Secure Spotter';
    let newRoute = spotterSecured ? 'Endorse' : 'Match Secured';
    let profileText = spotterSecured ? 'Spotter Secured!' : null;
    return(
      <Screen>
        <BackButton />
        <SpotterProfileTop {...route.params} text={profileText}/>
        <BioScreenTab {...route.params} spotterSecured={spotterSecured}/>
        <View style={{alignItems: 'center'}}>
          <DefaultButton 
            text={buttonText}
            onPress={()=>navigation.navigate(newRoute, route.params)}/> 
        </View>
      </Screen>
  );
}
