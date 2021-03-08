import React from 'react';
import { View, StyleSheet, Modal, Text, TouchableOpacity } from 'react-native';
import colors from '../Themes/Colors';
import metrics from '../Themes/Metrics';

const ReportModal = (props) => {
    
    const closeModal = (bool) => {
        props.changeModalVisible(bool);
    }

    return (
        <View style={styles.position}>
                <View style={styles.modal} >
                    <View>
                        <TouchableOpacity
                            onPress={() => closeModal(false)}> 
                            <Text style={styles.text}>Report Spotter</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => closeModal(false)}> 
                            <Text style={styles.text}>Cancel Session</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => closeModal(false)}> 
                            <Text style={styles.text}>Cancel</Text>
                        </TouchableOpacity>
                    </View>
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
        position: 'absolute',
        top: 70,
        left: '55%',
        shadowOffset: {
            width: 0,
            height: 1,
          },
        shadowOpacity: 0.12,
        shadowRadius: 2.22,
    },
    text: {
        fontFamily: 'OpenSans_400Regular',
        color: colors.grayText,
        fontSize: metrics.screenWidth * 0.037,
        paddingTop: metrics.screenHeight * 0.02,
    }

})

export default ReportModal;
