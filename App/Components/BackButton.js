import React from 'react';
import { TouchableOpacity, View, StyleSheet, Text } from 'react-native';
import colors from '../Themes/Colors';
import metrics from '../Themes/Metrics';
import Icon from '../Components/Icon';

const BackButton = ({onPress}) => {
    return (
        <View style={styles.position}>
        <TouchableOpacity style={styles.container}>
            <Icon name="BackButton" 
              fill={colors.backArrowGray}
              width={metrics.screenHeight * 0.03} 
              height={metrics.screenHeight * 0.03}/>
        </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: metrics.screenHeight * 0.05,
        height: metrics.screenHeight * 0.05,
        backgroundColor: colors.background,
        borderRadius: 100,
        paddingLeft: '19%',
        paddingTop: '12%'
    },
    position: {
        position: 'absolute',
        top: '3%',
        left: '5%'
    }
});

export default BackButton; 