import * as React from 'react';
import Screen from '../Components/Screen';
import SpotterProfileTop from '../Components/SpotterProfileTop';
import BioScreenTab from '../Components/BioScreenTab';

export default function MatchProfileScreen() {
    return(
      <Screen>
        <SpotterProfileTop />
        <BioScreenTab />
      </Screen>
  );
}
