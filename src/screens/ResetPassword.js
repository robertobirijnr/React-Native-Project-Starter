import React, { useState } from 'react';
import { Provider } from 'react-native-paper'
import { theme } from '../core/theme'
import Button from '../components/Button';
import TextInput from '../components/TextInput';
import Header from '../components/Header';
import Logo from '../components/Logo';
import ScreenWrapper from '../components/ScreenWrapper';
import { emailValidator } from '../core/helpers/emailValidator';
import BackButton from '../components/BackButton';
import {  sendInstruction } from '../api/auth-api';

export default function ResetPassword({ navigation }) {
    const [email, setEmail] = useState({ value: '', error: '' })
    const [loading, setLoading] = useState(false)


    const loginHandler = async () => {
        const emailError = emailValidator(email.value)

        if (emailError) {
            setEmail({ ...email, error: emailError })

        }

        setLoading(true)
        const response = await sendInstruction(email.value)

        if (response.error) {
            alert(response.error)
        } else {
            alert("Email with password has been send")
        }

        setLoading(false)

    }

    return (
        <Provider theme={theme}>
            <ScreenWrapper>
                <BackButton goBack={navigation.goBack} />
                <Logo />
                <Header>Reset Password</Header>
                <TextInput
                    value={email.value}
                    error={email.error}
                    description="You will recieve email with password reset link"
                    errorText={email.error}
                    onChangeText={(text) => setEmail({ value: text, error: '' })} label="Email" />
                <Button loading={loading} onPress={loginHandler} mode="contained">Send Instructions</Button>



            </ScreenWrapper>
        </Provider>
    );
}




