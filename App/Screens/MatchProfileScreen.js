import * as React from 'react';
import { View, Text } from 'react-native';
import DefaultTag from '../Components/DefaultTag';

export default function MatchProfileScreen({route}) {
    return (
      <View style={{flex:1, justifyContent: 'center', alignItems:'center'}}>
        <DefaultTag text={route.params.name}/>
      </View>
    );
}