import React from 'react';
import { TouchableOpacity, View, StyleSheet, Text, Modal } from 'react-native';
import colors from '../Themes/Colors';
import metrics from '../Themes/Metrics';
import Icon from '../Components/Icon';
import { useNavigation } from '@react-navigation/native';
import DefaultButton from '../Components/DefaultButton';

const CancelModal = ({onCancel, isModalVisible, closeModal, 
    prompt = 'Are you sure you want to cancel?', 
    cancelText = 'Cancel', 
    continueText = 'Continue'}) => {
    
    return (
          <Modal
            transparent={true}
            visible={isModalVisible}
          >
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'rgba(0,0,0,0.5)'}}>
                <View style={styles.modal} >
                    <View>
                        <Text style={styles.text}>{prompt}</Text>
                    </View>
                    <DefaultButton
                        text={cancelText}
                        onPress={onCancel}/>
                    <TouchableOpacity
                            onPress={closeModal}> 
                            <Text style={styles.continue}>{continueText}</Text>
                    </TouchableOpacity>
                </View> 
            </View>
          </Modal> 
    )
}

const styles = StyleSheet.create({
    modal: {
        width: metrics.screenWidth * 0.75,
        height: metrics.screenHeight * 0.26,
        backgroundColor: colors.background,
        borderRadius: 20,
        alignItems: 'center',
        
        shadowOffset: {
            width: 0,
            height: 1,
          },
        shadowOpacity: 0.25,
        shadowRadius: 2.22,
        position: 'absolute',
        top: '30%',
        left: '12.5%',
    },
    text: {
        fontFamily: 'OpenSans_600SemiBold',
        color: colors.black,
        fontSize: metrics.screenWidth * 0.045,
        paddingTop: metrics.screenHeight * 0.05,
        paddingBottom: metrics.screenHeight * 0.027
    },
    continue: {
        fontFamily: 'OpenSans_400Regular',
        color: colors.orange,
        fontSize: metrics.screenWidth * 0.037,
        paddingTop: metrics.screenHeight * 0.005,
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
        top: '3%',
        left: '11%'
    }
});

export default CancelModal; 