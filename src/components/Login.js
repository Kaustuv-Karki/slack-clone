import React from 'react'
import './Login.css'
import Button from '@material-ui/core/Button'
import {auth, provider} from '../firebase'
import { useStateValue } from '../StateProvider'
import {actionTypes} from '../reducer'

const Login = () => {

    const [{user}, dispatch] = useStateValue()

    const signIn = (e) => {
        auth.signInWithPopup(provider)
        .then(result => {
            console.log(result)
            dispatch({
                type: actionTypes.SET_USER,
                user: result.user
            })
        })
        .catch(err => {
            alert(err.message)
        })
    }

    return (
        <div className="login">
            <div className="login__container">
            <img src="https://cdn.mos.cms.futurecdn.net/SDDw7CnuoUGax6x9mTo7dd.jpg" alt="Slack Logo" />
                <h1>Sign In to Slack</h1>
                <Button onClick={signIn}>Sign In with Google</Button>
            </div>
        </div>
    )
}

export default Login
