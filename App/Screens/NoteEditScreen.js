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
import CancelModal from '../Components/CancelModal';
import { CommonActions, StackActions } from '@react-navigation/routers';

export default function NoteEditScreen({route, navigation}) {
  let note = route.params.note;
  let session = note ? note.sessionInfo : route.params.session;
  let [title, setTitle] = React.useState(note ? note.title : 
    `Session with ${session.spotterInfo.name.split(' ')[0]}`);
  let [body, setBody] = React.useState(note ? note.body : '');
  let [tags, setTags] = React.useState(note ? note.tags : []);

  let [unsavedChanges, setUnsavedChanges] = React.useState(false);
  let [isModalVisible, toggleModalVisible] = React.useState(false);
  let [action, setAction] = React.useState(null);
  React.useEffect(
    () =>
      navigation.addListener('beforeRemove', (e) => {
        if (!unsavedChanges) return;
        if (e.data.action.type !== 'REPLACE') {
          e.preventDefault();
          setAction(e.data.action);
          toggleModalVisible(true)
        }
      }),
    [navigation, unsavedChanges]
  );

  const onCancel = () => {
    toggleModalVisible(false);
    setUnsavedChanges(false);
    navigation.dispatch(action);
  }

  const closeModal = () => {
    toggleModalVisible(false);
  }


  return (
    <Screen>
      <BackButton />
      <CancelModal 
        isModalVisible={isModalVisible}
        closeModal={closeModal}
        onCancel={onCancel}
        prompt={`Discard changes?`}
        cancelText='Discard'
        continueText='Continue Editing' />
      <Check onPress={() => {
        addNote(title, body, session, tags, note ? note.id : null);
        navigation.replace('View Notes');
        navigation.popToTop();
      }}/>
      <View style = {styles.container}>
        <NotesInput 
          title={title} 
          onTitleChange={(title) => {setTitle(title); setUnsavedChanges(true)}}
          body={body}
          onBodyChange={(body) => {setBody(body); setUnsavedChanges(true)}}
          timestamp={session.timestamp} 
          tags={tags}
          onTagChange={(tags) => {setTags(tags); setUnsavedChanges(true)}}/>
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
