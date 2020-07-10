import React from 'react'
import InputAreaView from './styles'


const InputArea = (props) => {

    return (
        <InputAreaView placeholder={props.placeholder} placeholderTextColor={props.placeholderTextColor} secureTextEntry={props.secure} />
    )
}

export default InputArea