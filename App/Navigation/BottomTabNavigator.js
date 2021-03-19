import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import colors  from '../Themes/Colors';
import metrics  from '../Themes/Metrics';
import Icon from '../Components/Icon';
import HomeStackNavigator from './HomeStackNavigator';
import MatchStackNavigator from './MatchStackNavigator';
import BrowseStackNavigator from './BrowseStackNavigator';
import NotesStackNavigator from './NotesStackNavigator';
import ProfileScreen from '../Screens/ProfileScreen';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

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
                borderTopWidth: 0,
                backgroundColor: colors.background,

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
            <Tab.Screen name='Home' component={HomeStackNavigator} />
            <Tab.Screen name='Find Match' component={MatchStackNavigator} />
            <Tab.Screen name='Browse' component={BrowseStackNavigator}/>
            <Tab.Screen name='Notes' component={NotesStackNavigator} />
            <Tab.Screen name='Profile' component={ProfileScreen} />
        </Tab.Navigator>
        </NavigationContainer>
    );
}
