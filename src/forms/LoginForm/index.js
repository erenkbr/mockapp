import React from 'react'
import * as yup from 'yup'
import { Formik} from 'formik'
import { Button, InputArea } from '../../components'
import LoginFormView from './styles'
import { useDispatch } from 'react-redux'
import { login } from '../../reducers/login'

const loginValidation = yup.object().shape({
    email: yup.string().email().required('Not a valid email'),
    password: yup.string().min(8).required('Required')
})

const onPress = () => {
    console.log('clicked')
}

const LoginForm = () => {

    const dispatch = useDispatch()

    const onPress = () => {
        dispatch(login("test@test.com", "asdfasdf"))
        console.log('clicked')
    }


    return (
        <Formik
            initialValues={{email: "", password:""}}
            validationSchema={loginValidation}
            onSubmit={() => {}}
        >
            <LoginFormView>
                <InputArea placeholder="E-mail" placeholderTextColor={'white'} secure={false} />
                <InputArea placeholder="Password" placeholderTextColor={"white"} secure />
                <Button activeOpacity={0.8} onPress={onPress} title="LOGIN" />   
            </LoginFormView>
        </Formik>
    )
}

export default LoginForm