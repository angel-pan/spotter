import * as React from 'react';
import Screen from '../Components/Screen';
import SpotterProfileTop from '../Components/SpotterProfileTop';
import BioScreenTab from '../Components/BioScreenTab';

export default function MatchProfileScreen({route}) {
    return(
      <Screen>
        <SpotterProfileTop {...route.params}/>
        <BioScreenTab {...route.params}/>
      </Screen>
  );
}
