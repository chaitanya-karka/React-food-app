import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { setConfirmRegisterData, setRegisterData } from '../redux/slices/registerSlice';

function ConfirmOrder() {
    let navigate = useNavigate();
    const confirmRegisterData = useSelector((state) => state.registerslice.confirmRegisterData)
    const dispatch = useDispatch()
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
                                                    <input className="form-control form-control-lg" type='number'placeholder="Mobile number" onChange={(e) => dispatch(setConfirmRegisterData({ ...confirmRegisterData,mob: e.target.value }))} />
                                                </div>

                                                <div className="form-outline mb-4">
                                                    <input className="form-control form-control-lg" type='text' placeholder="Address " onChange={(e) => dispatch(setConfirmRegisterData({ ...confirmRegisterData, address: e.target.value }))} />
                                                </div>
                                                <div className="form-outline mb-4">
                                                    <input className="form-control form-control-lg" type='number' placeholder="Pincode" onChange={(e) => dispatch(setConfirmRegisterData({ ...confirmRegisterData, pin: e.target.value }))} />
                                                </div>

                                                <div className="d-flex justify-content-center"  >
                                                    <button className="btn btn-success" type="button" onClick={() => {  navigate('/orders') }}>Add address</button>
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