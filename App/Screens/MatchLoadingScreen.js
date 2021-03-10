import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Screen from '../Components/Screen';
import LoadingDots from '../Components/LoadingDots';
import ActivityButton from '../Components/ActivityButton';
import DefaultButton from '../Components/DefaultButton';
import colors from '../Themes/Colors';
import metrics from '../Themes/Metrics';

export default class MatchLoadingScreen extends React.Component{
  constructor(props) {
    super(props);
    this.state = {cancel: false};
  }
  componentDidMount() {
    setTimeout(() => {
      if (!this.state.cancel) {
        this.props.navigation.replace("Match Profiles",
          {name: this.props.route.params.name})
      }
    }, 2000);
  }

  render() {
    return (
      <Screen>
        <View style={styles.container}>
          <View>
          <Text style={[styles.text, {color: colors.black}]}>Finding a</Text>
          <Text style={[styles.text, {color: colors.orange}]}>Spotter...</Text>
          </View>
          <ActivityButton name={this.props.route.params.name}/>
          <LoadingDots />
          <DefaultButton text='Cancel' onPress={()=> {
            this.setState({cancel: true});
            this.props.navigation.pop()
            }}/>
        </View>
      </Screen>
    );
  }
}


const styles = StyleSheet.create({
    text: {
        fontFamily: 'OpenSans_600SemiBold',
        fontSize: metrics.screenHeight * 0.045,
        letterSpacing: 0.4
    },
    container: {
        height: '70%',
        alignItems: 'center',
        justifyContent: 'space-between'
    }

})
