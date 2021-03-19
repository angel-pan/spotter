import * as React from 'react';
import { TabView, TabBar } from 'react-native-tab-view';
import { Text, StyleSheet } from 'react-native';
import colors from '../Themes/Colors';
import SpotterGuidelinesBottom from './SpotterGuidelinesBottom';
import SpotterProfileBottom from './SpotterProfileBottom';
import metrics from '../Themes/Metrics';

const renderTabBar = (props) => (
  <TabBar
    {...props}
    indicatorStyle={styles.indicator}
    style={{backgroundColor: colors.background}}
    renderLabel={({ route }) => (
      <Text style={styles.text}>
        {route.title}
      </Text>
    )}
  />
);

export default function MatchBioTabView(props) {
  const [index, setIndex] = React.useState(props.spotterSecured ? 1 : 0);
  const [routes] = React.useState([
    { key: 'profile', title: 'Profile' },
    { key: 'guidelines', title: 'Guidelines' },
  ]);

  const renderScene = ({ route }) => {
    switch (route.key) {
      case 'profile':
        return <SpotterProfileBottom {...props} />;
      case 'guidelines':
        return <SpotterGuidelinesBottom {...props} />;
      default:
        return <SpotterProfileBottom {...props} />;
    }
  };

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
    fontSize: metrics.screenHeight * 0.022,
    color: colors.orange
  },
  indicator: {
    backgroundColor: colors.orange,
    height: 3
  }
})

