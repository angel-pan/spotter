import * as React from 'react';
import Screen from '../Components/Screen';
import SpotterProfileTop from '../Components/SpotterProfileTop';
import BioScreenTab from '../Components/BioScreenTab';
import BackButton from '../Components/BackButton';

export default function MatchProfileScreen({route}) {
    return(
      <Screen>
        <BackButton />
        <SpotterProfileTop {...route.params}/>
        <BioScreenTab {...route.params}/>
      </Screen>
  );
}
