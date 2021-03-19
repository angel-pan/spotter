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
const faqs = [{
    section: 'About Spotter',
    content: [{
      question: 'What is Spotter?',
      answer: 'Spotter is an app that aims to connect beginners at the gym with experienced gym goers.',
      },
      {
        question: 'Who are Spotters?',
        answer: 'Spotters are experienced gym-goers who are interested in helping gym beginners on their fitness journey.',
      }],
  },
  { 
    section: 'Finding a Spotter',
    content: [{
        question: 'What does the Find a Match function do?',
        answer: 'The Find a Match function matches you with a Spotter who you can approach for help. This way, you don’t have to look through all the Spotters on our platform to find one that is perfect for you - we will do that for you!',
    },{question: 'What is the difference between Find a Match and Browse?',
  answer: 'Find a Match provides you with a curated selection of Spotters, while Browse provides you with all available Spotters at your gym.',
   },{ question: 'How do I identify my Spotter at the gym?',
        answer: 'You can identify them with their profile photo, or their “How I Look Like Today” photo for a more recent reference.'
      }
      ],
  }, 
  {
    section: 'Completing a Spotting Session',
    content: [
      {
        question: 'How do I endorse a Spotter?',
        answer: 'Once you’ve completed your session, you can click on the tags that apply to your Spotter. You can also write them a personal thank you note! We are also working on allowing users to add their own endorsement tags.',
       },{ question: 'What do I do if I find a Spotter violating community guidelines?',
      answer: 'You should approach a gym employee if you find a Spotter violating community guidelines. We are still working on a reporting function for users to report Spotters that should be removed from the platform.',
       }],
    answers: [
      
      
    ],
  }
]
export {User, Session, Note, focusAreas, faqs}