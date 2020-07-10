import React from 'react'
import { ButtonView, ButtonText } from './styles'


const Button  = (props) => {
    return (
        <ButtonView activeOpacity={props.activeOpacity} onPress={props.onPress}>
            <ButtonText>
                {props.title}
            </ButtonText>
        </ButtonView>
    )
}

export default Button