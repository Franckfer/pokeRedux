import React from 'react';
import {Link, NavLink} from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { userLogoutAction } from '../redux/userDucks';

const Navbar = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const signOff = () => {
        dispatch(userLogoutAction())
        navigate('/login')
    }

    const active = useSelector(store => store.users.active)

    return (
        <div className='navbar navbar-dark bg-dark'>
            <Link className='navbar-brand' to='/'>Pokemon</Link>
            <div className="d-flex">
                {
                    active ? (
                        <>
                            <NavLink className='btn btn-dark mr-2' to='/'>Inicio</NavLink>
                            <button 
                                className='btn btn-dark mr-2' 
                                to='/logout'
                                onClick={() => signOff()}
                            >
                                Cerrar Sesion
                            </button>
                        </>
                    ) : (
                        <NavLink className='btn btn-dark mr-2' to='/login'>Login</NavLink>
                    )
                }
            </div>
        </div>
    )
};

export default Navbar;
