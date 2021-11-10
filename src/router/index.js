import React from "react";
import { createStackNavigator } from '@react-navigation/stack'
import Login from "../screens/Login";
import Register from "../screens/Register";
import Welcome from "../screens/Welcome";
import ResetPassword from "../screens/ResetPassword";


const stack = createStackNavigator();

function Router() {
    return (
        <stack.Navigator screenOptions={{ headerShown: false }}>
            <stack.Screen name="Welcome" component={Welcome} />
            <stack.Screen name="Login" component={Login} />
            <stack.Screen name="Register" component={Register} />
            <stack.Screen name="ResetPassword" component={ResetPassword} />
        </stack.Navigator>
    )
}

export default Router;