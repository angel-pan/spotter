import * as React from 'react';
import { StyleSheet, View, Text, Image, SafeAreaView } from 'react-native';
import { Metrics } from '../Themes';
import CurrentGym from '../Components/CurrentGym';
import CurrentlySpotting from '../Components/CurrentlySpotting';
import Screen from '../Components/Screen';
import AsyncStorage from '@react-native-async-storage/async-storage';
import firestore from '../../firebase';




export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {user: '', currentSpotter: null};
    this.unsubscribe = []

  }

  loadCurrentSpotter = async () => {
    try {
      const spotterJson = await AsyncStorage.getItem('currentSpotter');
      let currentSpotter = spotterJson != null ? JSON.parse(spotterJson) : null;
      this.setState({currentSpotter: currentSpotter});
    } catch(e) {
      console.log(e)
    }

  }

  completeSession = async () => {
    try {
      await AsyncStorage.removeItem('curretSpotter');
      this.setState({currentSpotter: null})
    } catch(e) {
      console.log(e)
    }
  }

  componentDidMount() {
    this.unsubscribe.push(
      firestore.collection('users')
      .doc('testuser')
      .onSnapshot((snapshot) => 
        this.setState({
        user: snapshot.data()['name']})));
    this.unsubscribe.push(
      this.props.navigation.addListener('focus', () => this.loadCurrentSpotter()));
  }

  componentWillUnmount() {
    if (this.unsubscribe) {
      this.unsubscribe.forEach(fn => fn());
      }
    }

  render() {
    return (
      <Screen>
        <View style={styles.textComponent}>
          {this.state.user !== '' && 
            <Text style={styles.greetingText}>Hi {this.state.user},</Text>}
          <Text style={styles.welcomeBackText}>Welcome back!</Text>
        </View>

        <View style={styles.container}>
          <CurrentGym/>
          {this.state.currentSpotter && 
          <CurrentlySpotting spotterInfo={this.state.currentSpotter} onButtonPress={this.completeSession}/>}
        </View>

      </Screen>
    );
  }
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },

  textComponent:{
    paddingBottom: Metrics.smallPadding,
  },

  greetingText:{
    fontSize: 20,
    fontFamily:'OpenSans_700Bold',
    letterSpacing: 0.4,
  },

  welcomeBackText:{
    fontSize: 26,
    fontFamily:'OpenSans_700Bold',
    letterSpacing: 0.4,
  },

});