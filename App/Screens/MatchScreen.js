import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SearchBar from '../Components/SearchBar';
import ActivityButton from '../Components/ActivityButton';
import Screen from '../Components/Screen';
import colors from '../Themes/Colors';
import metrics from '../Themes/Metrics';
import { focusAreas } from '../Themes/Data';

export default function MatchScreen({navigation}) {
    return (
      <Screen>
        <Text style={styles.text}>What do you need help in today?</Text>
        <SearchBar />
        <View style={styles.activityList}>
          {focusAreas.map((item) => <ActivityButton name={item} key={item} onPress={() => {
            navigation.navigate('Loading Match', {name: item})
          }}/>)}
        </View>
      </Screen>
    );
}

const styles = StyleSheet.create({
  activityList: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  text: {
    fontFamily: 'OpenSans_700Bold',
    fontSize: metrics.screenHeight * 0.035,
    textAlign: 'center',
    letterSpacing: 0.4,
    marginBottom: "8%",
    color: colors.black
  }

});
