import { color } from 'jimp';
import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import colors from '../Themes/Colors';
import Icon from './Icon';

const SearchBar = () => {
    return (
        <View style={styles.container}>
            <View style={styles.searchIcon}>
                <Icon name="BrowseTab" fill={colors.grayText} width={20} height={20}/>
            </View>
            <TextInput style={styles.searchInput} placeholder ='Search anything'/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width:'100%',
        height: 39,
        backgroundColor: colors.searchBarBackground,
        borderRadius: 5,
        justifyContent: 'center',
        flexDirection: 'row',
    },
    searchInput: {
        width: '100%',
        height: '100%',
        paddingLeft: 10,
        fontSize: 12,
        fontFamily: 'OpenSans_400Regular',
        color: colors.grayText,
        letterSpacing: 0.4,
    },
    searchIcon: {
        paddingLeft: 40,
        paddingTop: 9,
    }
})

export default SearchBar;

