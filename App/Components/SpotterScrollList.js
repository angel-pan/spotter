import * as React from 'react';
import { TabView, TabBar } from 'react-native-tab-view';
import { View, StyleSheet } from 'react-native';
import colors from '../Themes/Colors';
import SpotterCard from './SpotterCard';
import Icon from './Icon';
import DefaultButton from './DefaultButton';

export default function SpotterScrollList({spotters}) {
  const [index, setIndex] = React.useState(0);
  let spotterRoutes = [];
  for (let i = 0; i < spotters.length; i++) {
      spotterRoutes.push({'key': i, 'title': spotters[i].name});
  }
  const [routes] = React.useState(spotterRoutes);

  const renderScene = ({ route }) => {
      return (
      <View style={styles.container}>
        <SpotterCard spotterInfo={spotters[route.key]}/>
        <DefaultButton text='Secure Spotter' />
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
      marginVertical: 20,
      flexDirection: 'row',
      justifyContent: 'center'
    }
})

