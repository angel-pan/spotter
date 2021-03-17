import { Image } from 'react-native';

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
  }
}

export class Note {
  constructor(snapshot) {
    this.title = snapshot.data()['title'],
    this.sessionInfo = new SessionInfo(snapshot.data()['sessionInfo']),
    this.body = snapshot.data()['body'],
    this.tags = snapshot.data()['tags']
  }
}

export class Session {
  constructor(snapshot) {
    this.spotterInfo = new UserInfo(snapshot.data()['spotterInfo']),
    this.timestamp = timestampToString(snapshot.data()['timestamp']);
  }
}

export const focusAreas = ["Weights", "Cardio", "Yoga", "Diet", "Kickboxing", "General"];