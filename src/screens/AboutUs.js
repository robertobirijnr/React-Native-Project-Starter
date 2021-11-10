import React from 'react';
import { Paragraph, Provider } from 'react-native-paper'
import { theme } from '../core/theme'
import Header from '../components/Header';
import ScreenWrapper from '../components/ScreenWrapper';
import Logo from '../components/Logo';
import Button from '../components/Button';
import { logoutUser } from '../api/auth-api';

export default function About({ navigation }) {
    console.log(navigation)
    return (
        <Provider theme={theme}>
            <ScreenWrapper>
                <Logo />
                <Header>About</Header>
                <Paragraph>Welcome to Codebooth Technologies. Your number one coding school in Ghana</Paragraph>
                <Button onPress={() => {
                    logoutUser()
                }} mode="contained">Logout</Button>
            </ScreenWrapper>
        </Provider>
    );
}





