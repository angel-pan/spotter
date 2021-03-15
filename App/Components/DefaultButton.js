import React from 'react';
import { TouchableOpacity, StyleSheet, Text } from 'react-native';
import colors from '../Themes/Colors';
import metrics from '../Themes/Metrics';


const DefaultButton = ({text, onPress, scale=1}) => {
    const styles = StyleSheet.create({
        button: {
            backgroundColor: colors.orange,
            paddingHorizontal: metrics.screenWidth * 0.08 * scale,
            paddingVertical: metrics.screenHeight * 0.012 * scale,
            borderRadius: 100,
            shadowOffset: {
                width: 0,
                height: 1,
              },
              shadowOpacity: 0.12,
              shadowRadius: 2.22,
    
              elevation: 2,
            marginBottom: 15,
            marginTop: 15,
            alignItems: 'center',
        },
        text: {
            color: colors.white,
            fontFamily: 'OpenSans_600SemiBold',
            fontSize: metrics.screenHeight * 0.02 * scale,
        }
    });
    
    return (
        <TouchableOpacity
          style={styles.button}
          onPress={onPress}
        >
            <Text style={styles.text}>{text}</Text>
        </TouchableOpacity>
    );
}



export default DefaultButton;
