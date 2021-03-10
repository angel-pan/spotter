import * as React from 'react';
import Screen from '../Components/Screen';
import SpotterProfileTop from '../Components/SpotterProfileTop';
import BioScreenTab from '../Components/BioScreenTab';
import BackButton from '../Components/BackButton';

export default function MatchProfileScreen({navigation, route}) {
    return(
      <Screen>
        <BackButton onPress={() => navigation.navigate('Match Profiles')}/>
        <SpotterProfileTop {...route.params}/>
        <BioScreenTab {...route.params}/>
      </Screen>
  );
}
