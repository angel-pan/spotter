import { Image } from 'react-native';
import firestore from '../../firebase';

export class User {
    constructor(snapshot) {
        this.name = snapshot.data()['name'];
        this.bio = snapshot.data()['bio'];
        this.instructions = snapshot.data()['instructions'];
        this.focusAreas = snapshot.data()['focus-areas'];
        this.spotted = snapshot.data()['spotted'];
        this.endorsements = snapshot.data()['endorsements'];
        this.profileImage = new ImageObj(snapshot.data()['profile-image']);
        this.dailyImage = new ImageObj(snapshot.data()['daily-image']);
    }
}

class ImageObj{
    constructor(uri) {
      this.uri = uri;
      this.aspectRatio = 1; //default value
      Image.getSize(uri, (width, height) => {
        this.aspectRatio = width / height
      })
    }
}

class UserInfo {
  constructor(data) {
    this.name = data['name'],
    this.image = new ImageObj(data['profile-image'])
  }
}

const monthAbbv = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

function timestampToString(timestamp) {
  let date = timestamp.toDate()
  let [month, day, year] = date.toLocaleDateString('en-US').split('/');
  return `${day} ${monthAbbv[parseInt(month) - 1]} ${year}, ${date.toLocaleTimeString()}`;
}


class SessionInfo {
  constructor(data) {
    this.spotterInfo = new UserInfo(data['spotterInfo']),
    this.timestamp = timestampToString(data['timestamp']);
    this.firebaseTimestamp = data['timestamp'];
  }
}

export class Note {
  constructor(snapshot) {
    this.title = snapshot.data()['title'],
    this.sessionInfo = new SessionInfo(snapshot.data()['sessionInfo']),
    this.body = snapshot.data()['body'],
    this.tags = snapshot.data()['tags'],
    this.id = snapshot.id
  }
}

export class Session {
  constructor(snapshot) {
    this.spotterInfo = new UserInfo(snapshot.data()['spotterInfo']),
    this.timestamp = timestampToString(snapshot.data()['timestamp']);
    this.firebaseTimestamp = snapshot.data()['timestamp'];
  }
}

export function addNote(title, body, session, tags, id) {
  let noteRef = firestore.collection('users').doc('testuser').collection('notes');
  let docRef = id ? noteRef.doc(id) : noteRef.doc();
    docRef.set({title: title, body: body, tags: tags, sessionInfo: {
      spotterInfo: {
        name: session.spotterInfo.name, 'profile-image': session.spotterInfo.image.uri
      }, 
      timestamp: session.firebaseTimestamp
    }});
}

export const focusAreas = ["Weights", "Cardio", "Yoga", "Diet", "Kickboxing", "General"];