import * as React from 'react';
import Screen from '../Components/Screen';
import SpotterProfileTop from '../Components/SpotterProfileTop';
import BioScreenTab from '../Components/BioScreenTab';
import BackButton from '../Components/BackButton';
import DefaultButton from '../Components/DefaultButton';
import {View} from 'react-native';
import { updateCurrentSpotter, completeSession } from '../Themes/Utils';
import CancelModal from '../Components/CancelModal';


export default function MatchBioScreen({navigation, route, spotterSecured, nextScreen}) {
    const spotterInfo = route.params.spotterInfo;
    const buttonText = spotterSecured ? 'Complete Session' : 'Secure Spotter';
    const profileText = spotterSecured ? 'Spotter Secured!' : null;
    const onButtonPress = spotterSecured ? completeSession : () => updateCurrentSpotter(spotterInfo);
    let [isModalVisible, toggleModalVisible] = React.useState(false);
    let [canLeave, setCanLeave] = React.useState(false);
    let [action, setAction] = React.useState(null);
    React.useEffect(
      () =>
        navigation.addListener('beforeRemove', (e) => {
          if (!spotterSecured || canLeave) return;
          if (e.data.action.type !== 'REPLACE') {
            e.preventDefault();
            setAction(e.data.action);
            toggleModalVisible(true);
          }
        }),
      [navigation, canLeave]
    );

    const onCancel = () => {
      toggleModalVisible(false);
      setCanLeave(true);
      completeSession(true);
      navigation.dispatch(action);
    }

    const closeModal = () => {
      toggleModalVisible(false);
    }

    return(
      <Screen>
        <BackButton />
        <CancelModal 
          isModalVisible={isModalVisible}
          closeModal={closeModal}
          onCancel={onCancel}
          prompt={`Cancel Session with ${spotterInfo.name.split(' ')[0]}?`}
          cancelText='Cancel Session'/>
        <SpotterProfileTop {...route.params} text={profileText}/>
        <BioScreenTab {...route.params} spotterSecured={spotterSecured}/>
        <View style={{alignItems: 'center'}}>
          <DefaultButton
            text={buttonText}
            onPress={() => {
              onButtonPress();
              navigation.replace(nextScreen, route.params);
              }}/> 
        </View>
      </Screen>
  );
}
