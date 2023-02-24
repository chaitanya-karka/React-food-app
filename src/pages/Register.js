import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { saveRegisterDetails, setRegisterData } from "../redux/slices/registerSlice";
import ReCAPTCHA from "react-google-recaptcha";
function Register() {
    
    let navigate = useNavigate();
    const registerData = useSelector((state) => state.registerslice.registerData)
    const dispatch = useDispatch()
    const [captcha, setCaptcha]=useState(false);

    const Change = (value) =>{
        console.log("Captcha value:", value);
        if (value){
            setCaptcha(true)
        }
    }

    console.log("captch",captcha);
    const Register =() =>{
        if (captcha === true){
            dispatch(saveRegisterDetails(registerData)); navigate('/login') 
        }
        else{
            alert("Not a Human")
        }
    }
    return (
        <>
            <div>
                <section className="reg-body">
                    <div className="mask d-flex align-items-center py-4">
                        <div className="container h-100">
                            <div className="row d-flex justify-content-center align-items-center h-100">
                                <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                                    <div className="card body-border">
                                        <div className="card-body p-5">
                                            <h2 className="text-uppercase text-center mb-5">Create an account</h2>

                                            <form>

                                                <div className="form-outline mb-4">
                                                    <input className="form-control form-control-lg" placeholder="Name" onChange={(e) => dispatch(setRegisterData({ ...registerData, name: e.target.value }))} />
                                                </div>

                                                <div className="form-outline mb-4">
                                                    <input className="form-control form-control-lg" placeholder="email" onChange={(e) => dispatch(setRegisterData({ ...registerData, email: e.target.value }))} />
                                                </div>

                                                <div className="form-outline mb-4">
                                                    <input className="form-control form-control-lg" type='password' placeholder="password" onChange={(e) => dispatch(setRegisterData({ ...registerData, password: e.target.value }))} />
                                                </div>
                                                <ReCAPTCHA
                                                    sitekey="6Lc5SGskAAAAAJ1MjOHxVdrj5f4bH-fg4aNpsjnW"
                                                    onChange={Change}
                                                />
                                                <div className="d-flex justify-content-center"  >
                                                    <button className="btn btn-success mt-3" type="button" onClick={Register}>Register</button>
                                                </div>
                                                <p className="text-center  mt-5 mb-0">Have already an account? <Link to='/login' className="fw-bold  text-decoration-none">Login here</Link></p>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

        </>
    )
}
export default Register;