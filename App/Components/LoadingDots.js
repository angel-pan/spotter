import React from 'react';
import { View, StyleSheet } from 'react-native';
import LottieView from 'lottie-react-native';

const LoadingDots = ({visible}) => {
    return (
        <View style={styles.container}>
        <View style={styles.dots}>
            <LottieView 
            source={require('../../assets/loading.json')} 
            autoPlay={true} 
            loop={true}/>
        </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        height: '100%',
        width: '100%',
        alignItems:'center',
        justifyContent: 'flex-end'
    },
    dots: {
        height: '20%',
        width: '20%'
    }
})

export default LoadingDots;
