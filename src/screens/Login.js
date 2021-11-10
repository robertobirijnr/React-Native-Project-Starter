import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Provider } from 'react-native-paper'
import { theme } from '../core/theme'
import Button from '../components/Button';
import TextInput from '../components/TextInput';
import Header from '../components/Header';
import Logo from '../components/Logo';
import ScreenWrapper from '../components/ScreenWrapper';
import { emailValidator } from '../core/helpers/emailValidator';
import { passwordValidator } from '../core/helpers/passwordValidator';
import BackButton from '../components/BackButton';

export default function Login({ navigation }) {
    const [email, setEmail] = useState({ value: '', error: '' })
    const [password, setPassword] = useState({ value: '', error: '' })

    const loginHandler = () => {
        const emailError = emailValidator(email.value)
        const passwordError = passwordValidator(password.value)
        if (emailError || passwordError) {
            setEmail({ ...email, error: emailError })
            setPassword({ ...password, error: passwordError })
        }

    }

    return (
        <Provider theme={theme}>
            <ScreenWrapper>
                <BackButton goBack={navigation.goBack} />
                <Logo />
                <Header>Login</Header>
                <TextInput
                    value={email.value}
                    error={email.error}
                    errorText={email.error}
                    onChangeText={(text) => setEmail({ value: text, error: '' })} label="Email" />
                <TextInput
                    value={password.value}
                    error={password.error}
                    errorText={password.error}
                    secureTextEntry
                    onChangeText={(text) => setPassword({ value: text, error: '' })}
                    label="Password" />
                <Button onPress={loginHandler} mode="contained">Login</Button>

                <View style={styles.row}>
                    <Text>Don't have an account ? </Text>
                    <TouchableOpacity onPress={() => navigation.replace("Register")}>
                        <Text style={styles.link}>Sign up</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.row}>
                    <Text>Forgotten Password ? </Text>
                    <TouchableOpacity onPress={() => navigation.replace("ResetPassword")}>
                        <Text style={styles.link}>Reset Password</Text>
                    </TouchableOpacity>
                </View>

            </ScreenWrapper>
        </Provider>
    );
}


const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        marginTop: 4
    },
    link: {
        fontWeight: 'bold',
        color: theme.colors.primary
    }
});


