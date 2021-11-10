import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
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
import nameValidator from '../core/helpers/nameValidator';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { signUpUser } from '../api/auth-api';
import GoogleLogin from '../components/GoogleLogin';

export default function Login({ navigation }) {
    const [name, setName] = useState({ value: '', error: '' })
    const [email, setEmail] = useState({ value: '', error: '' })
    const [password, setPassword] = useState({ value: '', error: '' })
    const [loading, setLoading] = useState(false)

    const loginHandler = async () => {
        const emailError = emailValidator(email.value)
        const passwordError = passwordValidator(password.value)
        const nameError = nameValidator(name.value)

        if (emailError || passwordError || nameError) {
            setEmail({ ...email, error: emailError })
            setPassword({ ...password, error: passwordError })
            setName({ ...name, error: nameError })
        }

        setLoading(true)
        const response = await signUpUser({
            name: name.value,
            email: email.value,
            password: password.value
        })

        if (response.error) {
            alert(response.error)
        } else {
            navigation.replace("home")
        }
        setLoading(false)

    }

    return (
        <Provider theme={theme}>
            <ScreenWrapper>
                <BackButton goBack={navigation.goBack} />
                <Logo />
                <Header>Register</Header>
                <TextInput
                    value={name.value}
                    error={name.error}
                    errorText={name.error}
                    onChangeText={(text) => setName({ value: text, error: '' })} label="Name" />
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
                <Button loading={loading} onPress={loginHandler} mode="contained">Register</Button>

                <View style={styles.row}>
                    <Text>Already have an account ? </Text>
                    <TouchableOpacity onPress={() => navigation.replace("Login")}>
                        <Text style={styles.link}>Login</Text>
                    </TouchableOpacity>
                </View>

                <GoogleLogin/>

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


