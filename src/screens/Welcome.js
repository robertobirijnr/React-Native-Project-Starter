import React from 'react';
import { Paragraph, Provider } from 'react-native-paper'
import { theme } from '../core/theme'
import Button from '../components/Button';
import Header from '../components/Header';
import ScreenWrapper from '../components/ScreenWrapper';
import Logo from '../components/Logo';

export default function Welcome({ navigation }) {
    console.log(navigation)
    return (
        <Provider theme={theme}>
            <ScreenWrapper>
                <Logo />
                <Header>Codebooth Technologies</Header>
                <Paragraph>Welcome to Codebooth Technologies. Your number one coding school in Ghana</Paragraph>
                <Button onPress={() => {
                    navigation.navigate("Login")
                }} mode="outlined">Login</Button>

                <Button onPress={() => {
                    navigation.navigate("Register")
                }} mode="contained">Sign Up</Button>
            </ScreenWrapper>
        </Provider>
    );
}





