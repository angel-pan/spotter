import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Metrics, Colors } from '../Themes';
import Screen from '../Components/Screen';
import SearchBar from '../Components/SearchBar';
import BrowseCard from '../Components/BrowseCard';
import firestore from '../../firebase';
import { User } from '../Themes/Data';
import { FlatList } from 'react-native-gesture-handler';

export default class BrowseScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {spotters: []}
  }
  componentDidMount() {
    this.unsubscribe = firestore.collection('spotters')
      .onSnapshot((query) => {
        this.setState({
        spotters: (query.docs.map((doc) => new User(doc)))});
    });
  }
  componentWillUnmount() {
    this.unsubscribe && this.unsubscribe();
  }
  render() {
    return (
      <Screen>
          <Text style={styles.text}>Browsing Spotters</Text>
          <SearchBar />
          <FlatList 
            keyExtractor={(item) => item.name}
            data={this.state.spotters}
            renderItem={({ item, index }) => 
              <View style={styles.browseCard} id={index}>
                <BrowseCard spotterInfo={item} key={item.name}/>
              </View>
            } 
            showsVerticalScrollIndicator={false}/>
      </Screen>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    fontFamily: 'OpenSans_700Bold',
    fontSize: Metrics.screenHeight * 0.035,
    textAlign: 'left',
    letterSpacing: 0.4,
    marginBottom: "8%",
    color: Colors.black
  },
  browseCard: {
    marginTop: 8,
  }

});