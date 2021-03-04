import React from 'react';
import { View, StyleSheet } from 'react-native';
import LottieView from 'lottie-react-native';

const LoadingDots = ({visible}) => {
    return (
        <View style={styles.dots}>
            <LottieView 
            source={require('../../assets/loading.json')} 
            autoPlay={true} 
            loop={true}/>
        </View>
    )
}

const styles = StyleSheet.create({
    dots: {
        height: '20%',
        width: '20%'
    }
})

export default LoadingDots;
