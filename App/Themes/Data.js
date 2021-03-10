import { Image } from 'react-native';

class User {
    constructor(name, bio, instructions, focusAreas, spotted, endorsements, profileImage, dailyImage) {
      this.name = name;
      this.bio = bio;
      this.instructions = instructions;
      this.focusAreas = focusAreas;
      this.spotted = spotted;
      this.endorsements = endorsements;
      this.profileImage = new ImageObj(profileImage);
      this.dailyImage = new ImageObj(dailyImage);
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

const dummyData = {
    spotters: [
        new User(
            'Amy Anderson', 
            'Hi! I’ve been lifting for about 5 years now and am a regular at the gym here.', 
            'You can generally find me near the machines or the bikes.',
            ['Weights', 'Kickboxing'], 12,
            ['Friendly', 'Patient', 'Humble', 'Knowledgeable', 'Expert'],
            'https://firebasestorage.googleapis.com/v0/b/spotter-316b3.appspot.com/o/Spotter_Amy.png?alt=media&token=a6692564-76db-400d-b287-85c70c76d528',
            'https://firebasestorage.googleapis.com/v0/b/spotter-316b3.appspot.com/o/Amy_selfie.png?alt=media&token=a690abf1-7220-48bf-b9f8-311fd898155d',
        ),

        new User(
            'Drew Forrest',
            'Hey! Started building back in 2010 and haven’t stopped since. You can also catch me in the mornings.',
            'You can generally find me near treadmill or dance studio.',
            ['Weights', 'Yoga'], 98,
            ['Honest', 'Humble', 'Polite', 'Stamina', 'Training'],
            'https://firebasestorage.googleapis.com/v0/b/spotter-316b3.appspot.com/o/drew.png?alt=media&token=a0a8b3d0-d06f-4958-b820-403af2f38baa',
            'https://firebasestorage.googleapis.com/v0/b/spotter-316b3.appspot.com/o/drew_bio.png?alt=media&token=e14ce003-cc86-4d41-a8e2-81022908cc42',
        ),

        new User(
            'Caroline Baker',
            'Hi there! I’ve had a history of running marathons and competing in bikini competitions!',
            'You can generally find me near the mirrors next to the rowing machine.',
            ['Weights', 'Cardio'], 101,
            ['Friendly', 'Patient', 'Humble', 'Stamina', 'Polite'],
            'https://firebasestorage.googleapis.com/v0/b/spotter-316b3.appspot.com/o/caroline.png?alt=media&token=748c8a04-ed8f-4e0f-a037-9e147f7739a2',
            'https://firebasestorage.googleapis.com/v0/b/spotter-316b3.appspot.com/o/caroline_bio.png?alt=media&token=9b73f0f0-cab7-4d3e-914f-2608674d8d26',
        ),
    ]
}
export default dummyData