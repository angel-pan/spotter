import AsyncStorage from '@react-native-async-storage/async-storage';
import firestore from '../../firebase';
import * as firebase from 'firebase';

// firebase functions
const deleteNote = (noteId) => {
    firestore.collection('users')
    .doc('testuser')
    .collection('notes')
    .doc(noteId)
    .delete().then(() =>{
        console.log(`Deleted note ${noteId}`);
    }).catch((e) => {
        console.log(e);
    })
}

const addNote = (title, body, session, tags, id = null) => {
    const noteRef = firestore.collection('users').doc('testuser').collection('notes');
    const docRef = id ? noteRef.doc(id) : noteRef.doc();
    const timestampJson = JSON.parse(session.timestampJson);
      docRef.set({title: title, body: body, tags: tags, 
        sessionInfo: {
          spotterInfo: {
            name: session.spotterInfo.name, 'profile-image': session.spotterInfo.image.uri
          }, 
          timestamp: new firebase.firestore.Timestamp(timestampJson.seconds, timestampJson.nanoseconds)
        },
        timestamp: firebase.firestore.Timestamp.now()
    });
}

const addSession = (spotterInfo) => {
    let session = firestore.collection('users').doc('testuser').collection('sessions').doc();
    session.set({
        spotterInfo: {
            name: spotterInfo.name, 'profile-image': spotterInfo.profileImage.uri
        },
        timestamp: firebase.firestore.Timestamp.now()
    })
}


// async storage functions
const updateCurrentSpotter = async (value) => {
    try {
        await AsyncStorage.setItem('currentSpotter', JSON.stringify(value));
    } catch(e) {
        console.log(e);
    }
}

const completeSession = async (cancel = false) => {
    try {
        if (!cancel) {
          let spotterJson = await AsyncStorage.getItem('currentSpotter');
          let spotter = JSON.parse(spotterJson);
          addSession(spotter);
        }
        await AsyncStorage.removeItem('currentSpotter');
    } catch(e) {
        console.log(e)
    }
}

// Other functions
const monthAbbv = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
const timestampToString = (timestamp) => {
  if (!timestamp) return ''
  let date = timestamp.toDate();
  let [month, day, year] = date.toLocaleDateString('en-US').split('/');
  return `${day} ${monthAbbv[parseInt(month) - 1]} ${year}, ${date.toLocaleTimeString()}`;
}

export {deleteNote, addNote, updateCurrentSpotter, completeSession, timestampToString}
