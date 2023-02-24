import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { setConfirmRegisterData, setRegisterData } from '../redux/slices/registerSlice';

function ConfirmOrder() {
    // let total = totalprice.reduce((all, amount) => all + amount, 0)
    let navigate = useNavigate();
    const confirmRegisterData = useSelector((state) => state.registerslice.confirmRegisterData)
    const dispatch = useDispatch()

    const orderData = useSelector((state) => state.mainslice.orderList)
    let totalprice = orderData.map((num, i) => num.price);
    let total = totalprice.reduce((all, amount) => all + amount, 0)
    const [payMethod, setPayMethod] = useState('');
    console.log(payMethod);
    const handleSubmit = () => {
        if (payMethod === "online") {
            var options = {
                key: "rzp_test_y6hQ1v0InwpcSe",
                key_secret: "9nosaWDyluiP5gWrjoKwQdHZ",
                amount: total * 100,
                currency: "INR",
                name: "Krish app",
                description: "for testing purpose",
                handler: function (response) {
                    alert(response.razorpay_payment_id);
                    navigate('/orders')
                },
                prefill: {
                    name: "Chaitanya",
                    email: "chaitanyav543@gmail.com",
                    contact: "8220745916"
                },
                notes: {
                    address: "Razorpay Corporate office"
                },
                theme: {
                    color: "#3399cc"
                }
            };
            var pay = new window.Razorpay(options);
            pay.open();
        }
        else if(payMethod==="offline") {
           navigate("/orders") 
        }
        else{
            alert("Choose the Payment Method to Continue")
        }
    }
    return (
        <div>
            <div>
                <section className="reg-body">
                    <div className="mask d-flex align-items-center py-4">
                        <div className="container h-100">
                            <div className="row d-flex justify-content-center align-items-center h-100">
                                <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                                    <div className="card body-border">
                                        <div className="card-body p-5">
                                            <h2 className="text-uppercase text-center mb-5">Add your delivery address</h2>

                                            <form>
                                                <div className="form-outline mb-4">
                                                    <input className="form-control form-control-lg" placeholder="Name" onChange={(e) => dispatch(setConfirmRegisterData({ ...confirmRegisterData, name: e.target.value }))} />
                                                </div>

                                                <div className="form-outline mb-4">
                                                    <input className="form-control form-control-lg" type='number' placeholder="Mobile number" onChange={(e) => dispatch(setConfirmRegisterData({ ...confirmRegisterData, mob: e.target.value }))} />
                                                </div>

                                                <div className="form-outline mb-4">
                                                    <input className="form-control form-control-lg" type='text' placeholder="Address " onChange={(e) => dispatch(setConfirmRegisterData({ ...confirmRegisterData, address: e.target.value }))} />
                                                </div>
                                                <div className="form-outline mb-4">
                                                    <input className="form-control form-control-lg" type='number' placeholder="Pincode" onChange={(e) => dispatch(setConfirmRegisterData({ ...confirmRegisterData, pin: e.target.value }))} />
                                                </div>
                                                <div>
                                                <input type="radio" name='check' className='me-2 my-3' onClick={()=>setPayMethod("online")}/><label>Online Payment</label>
                                                <input type="radio" name='check' className='mx-2 ms-4 my-3' onClick={()=>setPayMethod("offline")}/><label>COD</label>
                                                </div>
                                                <div className="d-flex justify-content-center"  >
                                                    <button className="btn btn-success" type="button" onClick={handleSubmit}>confirm & Pay</button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default ConfirmOrder