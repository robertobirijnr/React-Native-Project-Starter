import React from "react";
import { createStackNavigator } from '@react-navigation/stack'
import Login from "../screens/Login";
import Register from "../screens/Register";
import Welcome from "../screens/Welcome";
import ResetPassword from "../screens/ResetPassword";
import Home from "../screens/Home";
import About from "../screens/AboutUs";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

//material icon
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


const stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function Router() {
    return (
        <stack.Navigator screenOptions={{ headerShown: false }}>
            {/* <stack.Screen name="Authloading" component={AuthLoading} /> */}
            <stack.Screen name="Welcome" component={Welcome} />
            <stack.Screen name="Login" component={Login} />
            <stack.Screen name="Register" component={Register} />
            <stack.Screen name="ResetPassword" component={ResetPassword} />
            <stack.Screen name="Home" component={bottomNavigation} />
        </stack.Navigator>
    )
}


function bottomNavigation() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={Home}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="home" color={color} size={size} />
                    ),
                }} />
            <Tab.Screen name="About" component={About}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="heart" color={color} size={size} />
                    )
                }}
            />
        </Tab.Navigator>
    )
}

export default Router;