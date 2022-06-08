import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";

const Login = () => {
    const [values, setValues] = useState({
        username: '',
        password: ''
    });
    const [isError, setIsError] = useState(false)
    const navigate = useNavigate()

    const onChange = e => {
        if (isError) {
            setIsError(false)
        }
        setValues(prevState => {
            return {
                ...prevState,
                [e.target.name]: e.target.value
            }
        })
    }

    const onSubmit = e => {
        e.preventDefault()

        if (values.username.toLowerCase().trim() === 'admin' && values.password === '12345') {
            window.localStorage.setItem('token', 'true')
            navigate('/profile')
        }
        setIsError(true)
    }

    return (
        <form className='form' onSubmit={onSubmit}>
            <input className='form__input'
                   type="text"
                   name='username'
                   onChange={onChange}
                   value={values.username}
            />
            <input className='form__input'
                   type="password"
                   name='password'
                   onChange={onChange}
                   value={values.password}
            />
            <div className='form__bottom'>
                <button className='form__btn' type='submit'>Login</button>
                {isError && <p className='form__err'>Имя пользователя или пароль введены не верно</p>}
            </div>
        </form>
    );
};

export default Login;