import React from 'react'
import { ImageBackground, Text } from 'react-native'
import HomeScreenView from './styles'

const image = { uri: "https://mir-s3-cdn-cf.behance.net/project_modules/1400/91dc1964120315.5ac77335ae374.png" };


const HomeScreen = () => {
    return (
        <ImageBackground source={image}  style={{width: '100%', height: '100%'}}>
            <HomeScreenView>
                <Text>
                    Home Screen
                </Text>
            </HomeScreenView>            
        </ImageBackground>
    )
}

export default HomeScreen