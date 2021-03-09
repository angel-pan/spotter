// leave off @2x/@3x
import { Image } from 'react-native';

const imagePaths = {
    amy: 'https://firebasestorage.googleapis.com/v0/b/spotter-316b3.appspot.com/o/Spotter_Amy.png?alt=media&token=a6692564-76db-400d-b287-85c70c76d528',
    amy_bio: 'https://firebasestorage.googleapis.com/v0/b/spotter-316b3.appspot.com/o/Amy_selfie.png?alt=media&token=a690abf1-7220-48bf-b9f8-311fd898155d',
  }

const images = {}

for (const [key, imagePath] of Object.entries(imagePaths)) {
  images[key] = {
    uri: imagePath,
    aspectRatio: 1
  }
  Image.getSize(imagePath, (width, height) => {
    images[key]['aspectRatio'] = width/height
  })
} 

export default images
