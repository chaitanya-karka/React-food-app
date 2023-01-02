import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    BrowserRouter as Router,
    Routes,
    Route
} from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home';
import View from './pages/View';
import Register from './pages/Register';
import MyCart from './pages/Cart';
import Orders from './pages/Orders';
import ConfirmOrder from './pages/ConfirmOrder';
function MainRoutes() {
    return (
        <Router>
            <Routes>
                <Route path='/login' exact element={<Login />} />
                <Route path='/' exact element={<Home />} />
                <Route path='/view/:hotel_name' exact element={<View />} />
                <Route path='/register' exact element={<Register />} />
                <Route path='/cart' exact element={<MyCart />} />
                <Route path='/orders' exact element={<Orders />} />
                <Route path='/confirmorders' exact element={<ConfirmOrder />} />
            </Routes>
        </Router>

    )
}

export default MainRoutes;