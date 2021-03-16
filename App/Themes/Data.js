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

export const focusAreas = ["Weights", "Cardio", "Yoga", "Diet", "Kickboxing", "General"];