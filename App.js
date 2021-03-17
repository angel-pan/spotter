import * as React from 'react';
import  BottomTabNavigator  from './App/Navigation/BottomTabNavigator';
import AppLoading from 'expo-app-loading';
import { useFonts,  OpenSans_300Light, OpenSans_400Regular, OpenSans_600SemiBold, OpenSans_700Bold} from '@expo-google-fonts/open-sans';

export default function App() {
  let [fontLoaded] = useFonts({
    OpenSans_300Light,
    OpenSans_400Regular,
    OpenSans_600SemiBold,
    OpenSans_700Bold
  })

  if (!fontLoaded) {
    return <AppLoading />;
  }
   return (<BottomTabNavigator />);
}
