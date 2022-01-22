import React from 'react';
import {Link, NavLink} from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { userLogoutAction } from '../redux/userDucks';

const Navbar = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const signOff = () => {
        dispatch(userLogoutAction())
        navigate('/login')
    }

    return (
        <div className='navbar navbar-dark bg-dark'>
            <Link className='navbar-brand' to='/'>Pokemon</Link>
            <div className="d-flex">
                <NavLink className='btn btn-dark mr-2' to='/'>Inicio</NavLink>
                <NavLink className='btn btn-dark mr-2' to='/login'>Login</NavLink>
                <button 
                    className='btn btn-dark mr-2' 
                    to='/logout'
                    onClick={() => signOff()}
                >
                    Cerrar Sesion
                </button>
            </div>
        </div>
    )
};

export default Navbar;
