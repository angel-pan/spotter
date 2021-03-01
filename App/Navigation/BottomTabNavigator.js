import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import colors from '../Themes/Colors';
import Icon from '../Components/Icon';
import HomeScreen from '../Screens/HomeScreen';
import MatchScreen from '../Screens/MatchScreen';
import BrowseScreen from '../Screens/BrowseScreen';
import NotesScreen from '../Screens/NotesScreen';
import ProfileScreen from '../Screens/ProfileScreen';
import { View } from 'react-native';

const Tab = createBottomTabNavigator();

export default function BottomTabNavigator() {
    return (
    <NavigationContainer>
        <Tab.Navigator
        screenOptions = { ({route}) => ({
            tabBarIcon: ({focused}) => {
                let iconColor = focused ? colors.orange : colors.gray
                let iconName = route.name === 'Find Match' ? 'Match' : route.name;
                let size = route.name === 'Find Match' ? 40 : 30; 
                return (
                  <View style={{marginTop: 15}}>
                  <Icon
                    name={`${iconName}Tab`} 
                    fill={iconColor}
                    stroke={iconColor}
                    width={size}
                    height={size}
                  />
                  </View>)
            }
        })}
        tabBarOptions = {{
            style: {height: 120, backgroundColor: colors.background},
            activeTintColor: colors.orange,
            inactiveTintColor: colors.gray,
            labelStyle: {
                fontFamily: 'OpenSans_400Regular',
                fontSize: 12,
                marginBottom: 15,
            },
        }}>
            <Tab.Screen name='Home' component={HomeScreen} />
            <Tab.Screen name='Find Match' component={MatchScreen} />
            <Tab.Screen name='Browse' component={BrowseScreen} />
            <Tab.Screen name='Notes' component={NotesScreen} />
            <Tab.Screen name='Profile' component={ProfileScreen} />
        </Tab.Navigator>
    </NavigationContainer>);
    
}
