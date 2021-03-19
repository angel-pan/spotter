import * as React from 'react';
import { TabView, TabBar } from 'react-native-tab-view';
import { View, StyleSheet } from 'react-native';
import colors from '../Themes/Colors';
import SpotterCard from './SpotterCard';
import Icon from './Icon';
import DefaultButton from './DefaultButton';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function SpotterScrollList({spotters}) {
  const [index, setIndex] = React.useState(0);
  const navigation = useNavigation();
  let spotterRoutes = [];
  for (let i = 0; i < spotters.length; i++) {
      spotterRoutes.push({'key': i, 'title': spotters[i].name});
  }
  const [routes] = React.useState(spotterRoutes);

  const updateCurrentSpotter = async (value) => {
      try {
          await AsyncStorage.setItem('currentSpotter', JSON.stringify(value));
      } catch(e) {
          console.log(e);
      }
  }

  const renderScene = ({ route }) => {
      return (
      <View style={styles.container}>
        <SpotterCard spotterInfo={spotters[route.key]}/>
        <DefaultButton 
          text='Secure Spotter' 
          onPress={()=> {
            updateCurrentSpotter(spotters[route.key])
            navigation.navigate('Match Secured', {spotterInfo: spotters[route.key]});
          }}/>
      </View>
      );
    };

  return (
    <TabView
      renderTabBar={() => 
        (<View style={styles.dots}>
        {spotters.map((spotter) => {
          let color = spotters[index].name === spotter.name ? 
            colors.backArrowGray : colors.gray;
          return (
          <View style={{marginHorizontal: 10}} key={spotter.name}>
            <Icon 
              name='SelectionDot'
              size={10}
              color={color}
                  />
          </View>)
        })}
        </View>)}
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      tabBarPosition='bottom'
    />
  );
}

const styles = StyleSheet.create({
    container: {
      paddingHorizontal: 1,
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    dots: {
      marginBottom: '8%',
      flexDirection: 'row',
      justifyContent: 'center'
    }
})

