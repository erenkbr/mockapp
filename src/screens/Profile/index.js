import React from 'react'
import { Text } from 'react-native'
import ProfileScreenView from './styles'
import { Button } from '../../components'
import { useDispatch } from 'react-redux'
import { logout } from '../../reducers/login'



const ProfileScreen = () => {

    const dispatch = useDispatch()

    const onSignOut = () => {
        dispatch(logout())
    }

    return (
        <ProfileScreenView>
            <Text>
                Profile Screen
            </Text>
            <Button onPress={onSignOut} title="SIGN OUT" />
        </ProfileScreenView>
    )
}

export default ProfileScreen
