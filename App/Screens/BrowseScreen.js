import * as React from 'react';
import { View, Text } from 'react-native';
import FinishEndorseScreen from '../Screens/FinishEndorseScreen'

export default function BrowseScreen() {
    return (
      <View style={{flex:1, justifyContent: 'center', alignItems:'center'}}>
        {/* <FinishEndorseScreen/> */}
        <Text>Welcome to the browse screen!</Text>
      </View>
    );
}