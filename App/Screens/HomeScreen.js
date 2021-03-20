import * as React from 'react';
import { StyleSheet, View, Text, ScrollView, TouchableOpacity } from 'react-native';
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
import Icon from '../Components/Icon';
import colors from '../Themes/Colors';
import metrics from '../Themes/Metrics';

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
      .onSnapshot((snapshot) => snapshot.docs[0] && this.setState({
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
    console.log(this.state.recentNote)
    return (
      <Screen>
        <TouchableOpacity style={styles.faq} onPress={() => this.props.navigation.navigate('Faq')}>
          <View style={{height: '10%', width: '10%'}}>
            <Icon name='Question' size={metrics.screenHeight * 0.035} color={colors.orange}/>
          </View>
        </TouchableOpacity>
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
              <TouchableOpacity
                onPress={() => {
                  this.props.navigation.navigate('Notes', {screen: 'View Notes'});
                }}>
                  <NotePreviewItem note={this.state.recentNote} header='Recent Notes'/>
              </TouchableOpacity> :
              <NoRecentNotes />}
          </View>
          </ScrollView>
      </Screen>
    );
  }
}

const styles = StyleSheet.create({
  textComponent:{
    paddingBottom: Metrics.smallPadding,
  },

  greetingText:{
    fontSize: Metrics.screenHeight*0.023,
    fontFamily:'OpenSans_700Bold',
    letterSpacing: 0.4,
  },

  welcomeBackText:{
    fontSize: Metrics.screenHeight*0.030,
    fontFamily:'OpenSans_700Bold',
    letterSpacing: 0.4,
  },
  item: {
    paddingBottom: metrics.screenHeight * 0.006
  },
  faq: {
    position: 'absolute',
    right: '2%',
    top: '3%',
    width: metrics.screenHeight * 0.05,
    height: metrics.screenHeight * 0.05,
  }

});