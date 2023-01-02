import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom'
import { setIsLog } from '../redux/slices/slice';

function Header() {
    const dispatch = useDispatch()
    let navigate = useNavigate();
    const username = useSelector((state) => state.mainslice.userList.name)
    const cartData = useSelector((state) => state.mainslice.cartData)
    const isLog = useSelector((state) => state.mainslice.isLog)
    let cartLength = cartData.length
    return (
        <div className='header pb-3'>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item mx-4">
                            <Link to='/' className='text-white text-decoration-none'>Home</Link>
                        </li>
                        <li className="nav-item mx-4">
                            <Link to='/cart' className='text-white text-decoration-none'>My cart</Link>
                            <span className='text-white '> { isLog && cartData.length ? -cartLength : null}</span>
                        </li>
                        <li className="nav-item mx-4">
                            <Link to='/orders' className='text-white text-decoration-none'>My Orders</Link>
                        </li>
                    </ul>
                </div>
               
                    {isLog ?
                        <div className='d-flex justify-content-end right-head mx-3'>
                            <h4 className='text-white me-5 '>Hi {username}!</h4>
                            <button className='btn btn-warning' onClick={() => { dispatch(setIsLog(false)); navigate('/') }}> Logout</button>
                        </div>
                        : <Link to='/login' className='btn btn-primary me-3'>Login</Link>}

            </nav>
        </div>
    )
}
export default Header;