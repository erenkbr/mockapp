import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { useSelector } from 'react-redux'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import LoginScreen from '../screens/Login'
import HomeScreen from '../screens/Home'
import ProfileScreen from '../screens/Profile'
import Header from '../components/Header'

const Stack = createStackNavigator()
const Tab = createBottomTabNavigator()

const HomeIcon = <Icon name="home" color="red" size={30} />

const StackNavigation = () => {
    return (
            <Stack.Navigator>
                <Stack.Screen
                    options={{
                        headerTransparent: true,
                        headerTitle: () => <Header />,
                    }}
                    name="Login"
                    component={LoginScreen} />
            </Stack.Navigator>
    
    )

}

const TabNavigation = () => {
    return (
        
            <Tab.Navigator
                initialRouteName="Home"
                tabBarOptions={{
                    activeTintColor: 'green',
                    inactiveTintColor: 'gray',
                    showLabel: true,

                }}
            >
                <Tab.Screen
                    options={{
                        tabBarIcon: ({color, size}) => <Icon name="home" color={color} size={35} />
                    }}
                    name={"Home"}
                    component={HomeScreen} />
                <Tab.Screen
                    options={{

                        tabBarIcon: ({color, size}) => <Icon name="account" color={color} size={35} />
                    }}
                    name={"Profile"}
                    component={ProfileScreen} />
            </Tab.Navigator>
    )
}

export default () => {
    const { isLoggedIn, isLoggingIn } = useSelector((state) => ({
        isLoggedIn: state.login.isLoggedIn,
        isLoggingIn: state.login.isLoggingIn,
        })
    )
    
    return (
       <NavigationContainer>
           {isLoggedIn ? <TabNavigation /> : <StackNavigation />}
       </NavigationContainer>
    )
    

}

export { StackNavigation, TabNavigation}