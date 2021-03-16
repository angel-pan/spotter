import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import colors from '../Themes/Colors';
import metrics from '../Themes/Metrics';


const DefaultTag = ({text, type, scale = 1, tagStyle}) => {
    const getBackgroundColor = (colorSelect) => colors[`tagBackground${colorSelect}`];
    const getTextColor = (colorSelect) => colors[`tagText${colorSelect}`];
    const backgroundColor = tagStyle ? tagStyle.background : 
      type === 'endorsement' ? getBackgroundColor('Yoga') : getBackgroundColor(text);
    const textColor = tagStyle ? tagStyle.text : 
      type === 'endorsement' ? getTextColor('Yoga') : getTextColor(text);
    
    const styles = StyleSheet.create({
        container: {
            backgroundColor: backgroundColor,
            paddingHorizontal: metrics.screenWidth * 0.03 * scale,
            paddingVertical: metrics.screenHeight * 0.008 * scale,
            borderRadius: 5,
            marginHorizontal: metrics.screenWidth * 0.01 * scale,
            marginVertical: metrics.screenHeight * 0.005 * scale,
        },
        text: {
            fontFamily: 'OpenSans_400Regular',
            fontSize: metrics.screenWidth * 0.04 * scale,
            color: textColor,
            textAlign: 'center',
            letterSpacing: 0.4
        }
    })
    return (
        <View style={styles.container}>
          <Text style={styles.text}>{text}</Text>
        </View>
    );
}


export default DefaultTag;
