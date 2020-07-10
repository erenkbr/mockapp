import { boolean } from "yup"

const GET_WEATHER = 'GET_WEATHER'
const GET_WEATHER_SUCCESS = 'GET_WEATHER_SUCCESS'
const GET_WEATHER_FAILED = 'GET_WEATHER_FAILED'

const initialState = {
    weather: [],
    isLoading: false,
}

export const getWeather = () => (dispatch) => {
    dispatch({
        type: GET_WEATHER,
        call: WeatherService.getAllWeather().then(res => {
            if(res.data.success)
                dispatch(getWeatherSuccessful(res.data))
            else
                dispatch(getWeatherFailed(res.data))
        })
    })
}

const getWeatherSuccessful = (data) => dispatch => {
    dispatch({type: GET_WEATHER_SUCCESS, payload: data})
}

const getWeatherFailed = data => dispatch => {
    dispatch({type: GET_WEATHER_FAILED, payload: data})
}

export default (state = initialState, action) => {
    switch (action) {
        case GET_WEATHER:
            return {
                isLoading: true,
            }
        case GET_WEATHER_SUCCESS:
            return {
                weather: action.payload.weather,
                isLoading: false,
            }
        case GET_WEATHER_FAILED:
            return {
                isLoading: false,
                weather: action.payload.weather,
            }
        default:
            return state
    }
}
