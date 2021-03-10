import React from 'react';
import { TouchableOpacity, View, StyleSheet, Text } from 'react-native';
import colors from '../Themes/Colors';
import metrics from '../Themes/Metrics';
import Icon from '../Components/Icon';

const MoreButton = ({onPress}) => {
    return (
        <View style={styles.position}>
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <Icon name="MoreButton" 
              fill={colors.backArrowGray}
              width={metrics.screenHeight * 0.035} 
              height={metrics.screenHeight * 0.035}/>
        </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
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