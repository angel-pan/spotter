import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import colors from '../Themes/Colors';
import Icon from './Icon';
import metrics from '../Themes/Metrics';

const SearchBar = () => {
    return (
        <View style={styles.container}>
            <Icon name="BrowseTab" 
              fill={colors.grayText} 
              width={metrics.screenHeight * 0.02} 
              height={metrics.screenHeight * 0.02}/>
            <TextInput style={styles.searchInput} placeholder ='Search anything'/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width:'100%',
        height: metrics.screenHeight * 0.048,
        backgroundColor: colors.searchBarBackground,
        borderRadius: 5,
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: '4%'
    },
    searchInput: {
        width: '100%',
        height: '100%',
        paddingLeft: '2%',
        fontSize: metrics.screenWidth * 0.035,
        fontFamily: 'OpenSans_400Regular',
        color: colors.grayText,
        letterSpacing: 0.4,
    },
})

export default SearchBar;

