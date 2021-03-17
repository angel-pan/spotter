import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Metrics, Colors } from '../Themes';
import Screen from '../Components/Screen';
import SearchBar from '../Components/SearchBar';
import BrowseCard from '../Components/BrowseCard';
import firestore from '../../firebase';
import { User, focusAreas } from '../Themes/Data';
import { FlatList } from 'react-native-gesture-handler';
import HorizontalTagList from '../Components/HorizontalTagList';

export default class BrowseScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allSpotters: [],
      spotters: [], 
      tags: focusAreas, 
      selectedTags: [...focusAreas.map(() => false)], 
      filterTags: []}
    this.onTagSelect = (i) => {
      let newSelectedTags = this.state.selectedTags;
      let newFilterTags = this.state.filterTags;
      if (newSelectedTags[i]) {
        newFilterTags.splice(newFilterTags.indexOf(this.state.tags[i]), 1);
        newSelectedTags[i] = false;
      } else {
        newFilterTags.push(this.state.tags[i]);
        newSelectedTags[i] = true;
      }
      let newSpotters = this.state.allSpotters.filter((spotter) => {
        let filtered = false
        newFilterTags.forEach((tag) => {
          if (!(spotter.focusAreas.includes(tag))) filtered = true;
        });
        return !filtered;
      });
      this.setState({
        selectedTags: newSelectedTags, 
        filterTags: newFilterTags, 
        spotters: newSpotters});
    }
  }
  componentDidMount() {
    this.unsubscribe = firestore.collection('spotters')
      .onSnapshot((query) => {
        let spotters = query.docs.map((doc) => new User(doc));
        this.setState({allSpotters: spotters, spotters: spotters});
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
          <HorizontalTagList
            tags={this.state.tags} 
            selected={this.state.selectedTags}
            onSelect={this.onTagSelect} />
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
    marginBottom: 8,
  }

});