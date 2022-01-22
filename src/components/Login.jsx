import React from 'react';
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { userLoginAction } from '../redux/userDucks';
import { useEffect } from 'react';

const Login = () => {
    const dispatch = useDispatch()
    const loading = useSelector(store => store.users.loading)
    const active = useSelector(store => store.users.active)

    const navigate = useNavigate()

    useEffect(() => {
        if (active) {
            navigate('/')
        }
    }, [active]);
    


    return (
        <div className='mt-5 text-center'>
            <h3>Ingreso con Google</h3>
            <br />
            <br />
            <br />
            <button 
                className="btn btn-dark"
                onClick={() => dispatch(userLoginAction())}
                disabled={loading}
            >
                Acceder
            </button>


        </div>
    )
};

export default Login;
