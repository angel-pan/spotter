import * as React from 'react';
import { View, Text, FlatList } from 'react-native';
import SearchBar from '../Components/SearchBar';
import Screen from '../Components/Screen';
import NotesPreviewItem from '../Components/NotePreviewItem';
import HorizontalTagList from '../Components/HorizontalTagList';
import { Metrics, Colors } from '../Themes';
import {Note, focusAreas} from '../Themes/Data';
import DefaultButton from '../Components/DefaultButton';
import firestore from '../../firebase';
import {TouchableOpacity} from 'react-native-gesture-handler';


export default class NotesScreen extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      allNotes: [],
      notes: [], 
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
      let newNotes = this.state.allNotes.filter((note) => {
        let filtered = false
        newFilterTags.forEach((tag) => {
          if (!(note.tags.includes(tag))) filtered = true;
        });
        return !filtered;
      });
      this.setState({
        selectedTags: newSelectedTags, 
        filterTags: newFilterTags, 
        notes: newNotes});
    }
  }

  componentDidMount() {
    this.unsubscribe = firestore.collection('users')
      .doc('testuser')
      .collection('notes')
      .orderBy('timestamp', 'desc')
      .onSnapshot((query) => {
        let notes = query.docs.map((doc) => new Note(doc));
        this.setState({allNotes: notes, notes: notes});
    });
  }

  componentWillUnmount() {
    this.unsubscribe && this.unsubscribe();
  }

  render() {
    return (
      <Screen>
          <Text style={styles.text}>Spotting Notes</Text>
          <SearchBar />
          <HorizontalTagList
            tags={this.state.tags} 
            selected={this.state.selectedTags}
            onSelect={this.onTagSelect} />
          <FlatList
            keyExtractor={item => item.id}
            data={this.state.notes}
            renderItem={({ item }) => 
              <TouchableOpacity 
                style={{marginBottom: 8}} 
                onPress={()=>this.props.navigation.navigate('Edit Note', {note: item})}>
                  <NotesPreviewItem note={item} />
              </TouchableOpacity>
            } 
            showsVerticalScrollIndicator={false}/>
            <View style={{alignItems: 'center'}}>
              <DefaultButton 
                text='+ Add Note' 
                onPress={() => this.props.navigation.navigate('Choose Session')} />
            </View>
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
    marginBottom: "8%",
    color: Colors.black
  },
}