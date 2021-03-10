import React, {useState} from 'react';
import { View, Text, StyleSheet, Modal } from 'react-native';
import DefaultTag from '../Components/DefaultTag';
import DefaultButton from '../Components/DefaultButton';
import Screen from '../Components/Screen';
import Data from '../Themes/Data';
import SpotterScrollList from '../Components/SpotterScrollList';
import BackButton from '../Components/BackButton';
import MoreButton from '../Components/MoreButton';
import ReportModal from '../Components/ReportModal';


export default function MatchProfileScreen({navigation, route}) {
    const [isModalVisible, setIsModalVisible] = useState(false);

    const changeModalVisible=(bool) => {
      setIsModalVisible(bool);
    }

    return (
      <Screen>
        <BackButton onPress={()=> navigation.navigate('Find Match')}/>
        
        <MoreButton onPress={()=> setIsModalVisible(true)}/>
        <Modal
          transparent={true}
          visible={isModalVisible}
        >
          <ReportModal 
            changeModalVisible={changeModalVisible}
          />
        </Modal> 
        <View style={styles.container}>
          <DefaultTag text={route.params.name}/>
        </View>
        <SpotterScrollList spotters={Data.spotters}/>
        <View style={styles.container}>
          <DefaultButton text='Secure Spotter' />
          {/* <DefaultButton text='Secure Spotter' onPress={() => navigation.navigate('Finish Endorse', {...route.params})}/> */}
        </View>
      </Screen>
    );
}

const styles = StyleSheet.create({

  container: {
    alignItems: 'center',
    marginBottom: 10
  },
})