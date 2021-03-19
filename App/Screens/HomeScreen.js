import * as React from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import { Metrics } from '../Themes';
import CurrentGym from '../Components/CurrentGym';
import CurrentlySpotting from '../Components/CurrentlySpotting';
import Screen from '../Components/Screen';
import firestore from '../../firebase';
import { completeSession } from '../Themes/Utils';
import AsyncStorage from '@react-native-async-storage/async-storage';
import NotePreviewItem from '../Components/NotePreviewItem';
import { Note } from '../Themes/Data';
import NoRecentNotes from '../Components/NoRecentNotes';

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {user: '', currentSpotter: null, recentNote: null};
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

  componentDidMount() {
    this.unsubscribe.push(
      firestore.collection('users')
      .doc('testuser')
      .onSnapshot((snapshot) => 
        this.setState({
        user: snapshot.data()['name']})));
    this.unsubscribe.push(
      firestore.collection('users')
      .doc('testuser')
      .collection('notes')
      .orderBy('timestamp', 'desc')
      .onSnapshot((snapshot) => this.setState({
        recentNote: new Note(snapshot.docs[0])
      }))
    );
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
        <ScrollView showsVerticalScrollIndicator={false} directionalLockEnabled={true}>
          <View style={styles.item}>
            <CurrentGym/>
          </View>
          <View style={styles.item}>
            {this.state.currentSpotter && 
            <CurrentlySpotting 
              spotterInfo={this.state.currentSpotter} 
              onButtonPress={() => {
              completeSession();
              this.setState({currentSpotter: null})
              }}/>}
          </View>
          <View style={styles.item}>
            {this.state.recentNote ? 
              <NotePreviewItem note={this.state.recentNote} header='Recent Notes'/> :
              <NoRecentNotes />}
          </View>
          </ScrollView>
      </Screen>
    );
  }
}

const styles = StyleSheet.create({

  container: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginBottom: 200,
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
  item: {
    paddingBottom: 10
  }

});