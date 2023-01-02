import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import Header from '../components/header';
import { setCartData, setOrderList } from '../redux/slices/slice';

function MyCart() {

    let navigate = useNavigate();
    const cartData = useSelector((state) => state.mainslice.cartData)
    const isLog = useSelector((state) => state.mainslice.isLog)
    const dispatch = useDispatch()

    const deleteCart = (index) => {
        let delCart = cartData.filter((val, i) => (i != index));
        dispatch(setCartData(delCart));
    }
    return (
        <div className='main-view pb-4'>
            <Header />
            <div className='mt-5 row m-0'>
                {cartData.map((value, index) => {  
                    return (
                        <div className='d-flex justify-content-center col-3  pt-4'>
                            <div className="card cart-detail p-2">
                                <img className="card-img-top food-img" src={value.url} alt="Card image cap" />
                                <div className="card-body text-left">
                                    <h5 >{value.name}</h5>
                                    <h6 >Price: {value.price}</h6>
                                    <h6 >Currency: {value.currency}</h6>
                                    <h6 >Type: {value.type}</h6>
                                </div>
                                <button type='submit' onClick={() => deleteCart(index)} className='btn mt-2 btn-danger'>Delete</button>
                            </div>
                        </div>
                    )
                })
                }
            </div>
            {cartData.length && isLog ? <button type='submit' onClick={() => { dispatch(setOrderList(cartData)); navigate('/confirmorders'); dispatch(setCartData('')) }}
                className='btn mt-2 btn-secondary mt-5'>Place Your order</button>
                : <div>
                    <h3 className=' pt-5'>Your cart is empty</h3>
                    <p className=' mt-3'>Order your food and enjoy the day!</p>
                    <Link to='/' className="btn btn-primary">Check hotels near by you</Link>    
                </div>}
        </div >
    )
}

export default MyCart;