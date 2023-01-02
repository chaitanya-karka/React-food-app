import React, { useContext } from 'react'
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import Header from '../components/header';
import { useDispatch, useSelector } from 'react-redux';
import { setCartData } from '../redux/slices/slice';

function View() {
    const parms = useParams();
    const isLog = useSelector((state) => state.mainslice.isLog)
    const cartData = useSelector((state) => state.mainslice.cartData)
    const foodList = useSelector((state) => state.mainslice.foodList)
    const dispatch = useDispatch()
    const navigate=useNavigate();
    return (
        <div className='main-view '>
            <div className=''>
                <Header />
                <div className='mt-5'>
                    {foodList.map((val) => {
                        if (parms.hotel_name == val.hotel_name) {
                            return (
                                <>
                                    <div className='row m-0'>
                                        {/* <div className='col-2 border'>
                                            <h4 className='mt-5'>hotels:</h4>
                                        </div> */}
                                        {val.food.map((value) => {
                                            return (
                                                <div className='d-flex justify-content-center col-3 pt-5'>
                                                    <div className="card card-detail p-3">
                                                        <img className="card-img-top food-img" src={value.url} alt="Card image cap" />
                                                        <div className="card-body text-left ">
                                                            <h4 >{value.name}</h4>
                                                            <h5 >price: {value.price}</h5>
                                                            <h5 >currency: {value.currency}</h5>
                                                            <h5 >type: {value.type}</h5>
                                                        </div>
                                                        
                                                        <button type='submit' onClick={() => {isLog?dispatch(setCartData([...cartData, value])):navigate('/login')}} className='btn mt-2 btn-secondary'>Add to cart</button>
                                                    </div>
                                                </div>
                                            )
                                        })
                                        }
                                    </div>
                                </>
                            )
                        }
                    })}
                </div>
            </div>
        </div>
    )
}

export default View