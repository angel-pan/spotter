import * as React from 'react';
import { View, Text, TouchableWithoutFeedback, Keyboard } from 'react-native';
import Screen from '../Components/Screen';
import ThankYouBox from '../Components/ThankYouBox';

export default function NotesScreen() {
    return (
      <TouchableWithoutFeedback onPress={() => {
          Keyboard.dismiss();
      }}> 
        <View style={{flex:1, justifyContent: 'center', alignItems:'center'}}>
            <Screen>
            <ThankYouBox />
            </Screen>
        </View>
      </TouchableWithoutFeedback>
    );
}