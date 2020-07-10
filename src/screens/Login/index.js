import React from 'react'
import { ImageBackground, Image } from 'react-native'
import LoginForm from '../../forms/LoginForm'
import LoginScreenView from './styles'

const image = { uri: "https://mir-s3-cdn-cf.behance.net/project_modules/1400/91dc1964120315.5ac77335ae374.png" };


const LoginScreen = () => {

    return (
        <ImageBackground source={image}  style={{width: '100%', height: '100%'}}>
            <LoginScreenView>            
                <LoginForm />
            </LoginScreenView>
        </ImageBackground>
    )
}

export default LoginScreen