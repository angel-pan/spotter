import React from 'react';
import { TouchableOpacity, View, StyleSheet, Text, Modal } from 'react-native';
import colors from '../Themes/Colors';
import metrics from '../Themes/Metrics';
import Icon from '../Components/Icon';

const MoreButton = () => {
    const [isModalVisible, setIsModalVisible] = React.useState(false);
    
    return (
        <View style={styles.position}>
          <TouchableOpacity style={styles.container} onPress={() => setIsModalVisible(true)}>
            <Icon name="MoreButton" 
              fill={colors.backArrowGray}
              width={metrics.screenHeight * 0.035} 
              height={metrics.screenHeight * 0.035}/>
          </TouchableOpacity>
          
          <Modal
            transparent={true}
            visible={isModalVisible}
          >
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'rgba(0,0,0,0.5)'}}>
                <ReportModal 
                closeModal={() => setIsModalVisible(false)}
                />
            </View>
          </Modal> 
        </View>
    )
}

const ReportModal = ({closeModal}) => {
    return (
        <View style={styles.modal} >
            <View>
                <TouchableOpacity
                    onPress={closeModal}> 
                    <Text style={styles.text}>Report Spotter</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={closeModal}> 
                    <Text style={styles.text}>Cancel Session</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={closeModal}> 
                    <Text style={styles.text}>Cancel</Text>
                </TouchableOpacity>
            </View>
        </View> 
    )
}

const styles = StyleSheet.create({
    modal: {
        width: metrics.screenWidth * 0.4,
        height: metrics.screenHeight * 0.15,
        backgroundColor: colors.background,
        borderRadius: 20,
        alignItems: 'center',
        shadowOffset: {
            width: 0,
            height: 1,
          },
        shadowOpacity: 0.12,
        shadowRadius: 2.22,
        position: 'absolute',
        top: '7%',
        left: '55%',

    },
    text: {
        fontFamily: 'OpenSans_400Regular',
        color: colors.grayText,
        fontSize: metrics.screenWidth * 0.037,
        paddingTop: metrics.screenHeight * 0.02,
    },
    container: {
        width: metrics.screenHeight * 0.05,
        height: metrics.screenHeight * 0.05,
        backgroundColor: colors.backgroundColor,
        borderRadius: 100,
        paddingLeft: '14%',
        paddingTop: '13%'
    },
    position: {
        position: 'absolute',
        top: '1.5%',
        right: '2%'
    }
});

export default MoreButton; 