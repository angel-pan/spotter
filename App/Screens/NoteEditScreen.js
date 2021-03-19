import * as React from 'react';
import { TouchableOpacity, StyleSheet, View, Text, Image, SafeAreaView } from 'react-native';
import NotesInput from '../Components/NotesInput';
import Screen from '../Components/Screen';
import BackButton from '../Components/BackButton';
import Icon from '../Components/Icon';
import colors from '../Themes/Colors';
import metrics from '../Themes/Metrics';
import TextEditingTools from '../Components/TextEditingTools';
import { addNote } from '../Themes/Utils';

export default function NoteEditScreen({route, navigation}) {
  let note = route.params.note;
  let session = note ? note.sessionInfo : route.params.session;
  let [title, setTitle] = React.useState(note ? note.title : 
    `Session with ${session.spotterInfo.name}`);
  let [body, setBody] = React.useState(note ? note.body : '');
  let [tags, setTags] = React.useState(note ? note.tags : []);
  return (
    <Screen>
      <BackButton />
      <Check onPress={() => {
        addNote(title, body, session, tags, note.id);
        navigation.popToTop()
      }}/>
      <View style = {styles.container}>
        <NotesInput 
          title={title} 
          onTitleChange={setTitle}
          body={body}
          onBodyChange={setBody}
          timestamp={session.timestamp} 
          tags={tags}
          onTagChange={setTags}/>
      </View>
      <TextEditingTools />
    </Screen>
  );
}

const Check = ({onPress}) => {
  return(
      <TouchableOpacity 
        style = {styles.check} 
        onPress={onPress}>
          <Icon name = "Check"
            stroke={colors.orange}
            fill = {colors.white}
            width={metrics.screenHeight * 0.03}
            height={metrics.screenHeight * 0.03}
            strokeWidth="3"/>
      </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  check: {
      position: 'absolute',
      top: '3%',
      left: '100%'
  }
});
