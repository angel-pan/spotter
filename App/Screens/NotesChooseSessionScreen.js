import React from 'react';
import { View, StyleSheet, Text, FlatList } from 'react-native';
import Screen from '../Components/Screen';
import BackButton from '../Components/BackButton';
import firestore from '../../firebase';
import { Session } from '../Themes/Data';
import SearchBar from '../Components/SearchBar';
import {Metrics, Colors} from '../Themes';
import SessionCard from '../Components/SessionCard';
import { TouchableOpacity } from 'react-native-gesture-handler';
import NoSpotters from '../Components/NoSpotters';


export default class NotesChooseSessionScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {sessions: []}
  }
  componentDidMount() {
    this.unsubscribe = firestore.collection('users')
      .doc('testuser')
      .collection('sessions')
      .orderBy('timestamp', 'desc')
      .onSnapshot((query) => {
        this.setState({
        sessions: (query.docs.map((doc) => new Session(doc)))});
    });
  }
  componentWillUnmount() {
    this.unsubscribe && this.unsubscribe();
  }
  render() {
    return (
      <Screen>
        <BackButton />
        <Text style={styles.text}>Spotting Notes</Text>
        <SearchBar />
        <Text style={styles.textSmall}>Session History</Text>
        {this.state.sessions.length > 0 ? 
          <FlatList
            directionalLockEnabled={true}
            keyExtractor={(item) => item.timestamp}
            data={this.state.sessions}
            renderItem={({ item }) => 
              <TouchableOpacity 
                style={{marginBottom: '2%'}} 
                onPress={() => this.props.navigation.navigate('Edit Note', {session: item})}>
                  <SessionCard session={item} />
              </TouchableOpacity>} 
            showsVerticalScrollIndicator={false}/> :
          <NoSpotters text="Looks like you don't have any Spotting Sessions yet."/>
        }
      </Screen>
    );
  }
}

const styles = {
  text: {
    fontFamily: 'OpenSans_700Bold',
    fontSize: Metrics.screenHeight * 0.035,
    textAlign: 'left',
    letterSpacing: 0.4,
    marginVertical: "4%",
    color: Colors.black
  },
  textSmall: {
    fontFamily: 'OpenSans_700Bold',
    fontSize: Metrics.screenHeight * 0.025,
    textAlign: 'left',
    letterSpacing: 0.4,
    marginVertical: "4%",
    color: Colors.black
  },
}