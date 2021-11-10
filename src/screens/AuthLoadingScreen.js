import React from 'react';
import { ActivityIndicator } from 'react-native'
import { Provider } from 'react-native-paper'
import { theme } from '../core/theme'
import ScreenWrapper from '../components/ScreenWrapper';

export default function Authloading({ navigation }) {
    console.log(navigation)
    return (
        <Provider theme={theme}>
            <ScreenWrapper>
                <ActivityIndicator size="large" />
            </ScreenWrapper>
        </Provider>
    );
}





