import styled from 'styled-components/native'

const ButtonView = styled.TouchableOpacity`
    height: 50px;
    width: 90%;
    background-color: green;
    border-radius: 15px;
`

const ButtonText = styled.Text`
    color: white;
    margin: auto;
    text-align: center;
    font-size: 20px;
`

export {ButtonView, ButtonText}