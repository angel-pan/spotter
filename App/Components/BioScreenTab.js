import * as React from 'react';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import { Text, StyleSheet } from 'react-native';
import colors from '../Themes/Colors';
import SpotterGuidelinesBottom from './SpotterGuidelinesBottom';
import SpotterProfileBottom from './SpotterProfileBottom';

const ProfileRoute = () => (
  <SpotterProfileBottom />
);

const GuidelinesRoute = () => (
  <SpotterGuidelinesBottom />
);

const renderTabBar = (props) => (
  <TabBar
    {...props}
    indicatorStyle={styles.indicator}
    style={{backgroundColor: colors.background }}
    renderLabel={({ route }) => (
      <Text style={styles.text}>
        {route.title}
      </Text>
    )}
  />
);

export default function MatchBioTabView() {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'profile', title: 'Profile' },
    { key: 'guidelines', title: 'Guidelines' },
  ]);

  const renderScene = SceneMap({
    profile: ProfileRoute,
    guidelines: GuidelinesRoute,
  });

  return (
    <TabView
      renderTabBar={renderTabBar}
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
    />
  );
}

const styles = StyleSheet.create({
  text: {
    fontFamily: 'OpenSans_600SemiBold',
    fontSize: 18,
    color: colors.orange
  },
  indicator: {
    backgroundColor: colors.orange,
    height: 3
  }
})

