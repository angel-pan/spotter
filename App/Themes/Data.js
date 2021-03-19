import { Image } from 'react-native';
import { timestampToString } from './Utils';
import * as firebase from 'firebase';

class User {
    constructor(snapshot) {
      if (snapshot) {
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
}

class ImageObj{
    constructor(uri) {
      if (uri) {
        this.uri = uri;
        this.aspectRatio = 1; //default value
        Image.getSize(uri, (width, height) => {
          this.aspectRatio = width / height
        })
      }
    }
}

class UserInfo {
  constructor(data) {
    if (data) {
      this.name = data['name'],
      this.image = new ImageObj(data['profile-image'])
    }
  }
  fromUser(user) {
    this.name = user.name;
    this.image = user.profileImage;
  }
}

class SessionInfo {
  constructor(data) {
    if (data) {
      this.spotterInfo = new UserInfo(data['spotterInfo']),
      this.timestamp = timestampToString(data['timestamp']);
      this.timestampJson = JSON.stringify(data['timestamp']);
    }
  }
}

class Note {
  constructor(snapshot) {
    if (snapshot) {
      this.title = snapshot.data()['title'],
      this.sessionInfo = new SessionInfo(snapshot.data()['sessionInfo']),
      this.body = snapshot.data()['body'],
      this.tags = snapshot.data()['tags'],
      this.id = snapshot.id
    }
  }
}

class Session {
  constructor(snapshot) {
    if (snapshot) {
      this.spotterInfo = new UserInfo(snapshot.data()['spotterInfo']),
      this.timestamp = timestampToString(snapshot.data()['timestamp']);
      this.timestampJson = JSON.stringify(snapshot.data()['timestamp']);
    }
  }
  fromSpotterInfo(spotterInfo) {
    const now = firebase.firestore.Timestamp.now();
    const userInfo = new UserInfo();
    userInfo.fromUser(spotterInfo);
    this.spotterInfo = userInfo;
    this.timestamp = timestampToString(now);
    this.timestampJson = JSON.stringify(now);
  }
}

const focusAreas = ["Weights", "Cardio", "Yoga", "Diet", "Kickboxing", "General"];

export {User, Session, Note, focusAreas}