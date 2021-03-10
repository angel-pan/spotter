import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import colors  from '../Themes/Colors';
import metrics  from '../Themes/Metrics';
import Icon from '../Components/Icon';
import HomeScreen from '../Screens/HomeScreen';
import MatchStackNavigator from './MatchStackNavigator';
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
            labelPosition: 'below-icon',
            tabBarIcon: ({focused}) => {
                let iconColor = focused ? colors.orange : colors.gray
                let iconName = route.name === 'Find Match' ? 'Match' : route.name;
                let size = route.name === 'Find Match' ? 40 : 30; 
                size = metrics.screenWidth * size * 0.0025
                return (
                  <View style={{marginTop: 15}}>
                  <Icon
                    name={`${iconName}Tab`} 
                    color={iconColor}
                    size={size}
                  />
                  </View>)
            }
        })}
        tabBarOptions = {{
            style: {
                height: "12%", 
                borderTopWidth: 0

            },
            activeTintColor: colors.orange,
            inactiveTintColor: colors.gray,
            labelStyle: {
                fontFamily: 'OpenSans_400Regular',
                fontSize: metrics.screenWidth * 0.03,
                marginBottom: 15,
            },
            labelPosition: 'below-icon'
        }}>
            <Tab.Screen name='Home' component={HomeScreen} />
            <Tab.Screen name='Find Match' component={MatchStackNavigator} />
            <Tab.Screen name='Browse' component={BrowseScreen} />
            <Tab.Screen name='Notes' component={NotesScreen} />
            <Tab.Screen name='Profile' component={ProfileScreen} />
        </Tab.Navigator>
    </NavigationContainer>);
    
}
