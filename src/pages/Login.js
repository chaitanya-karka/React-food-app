import React, { useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom'
import Header from "../components/header";
import { loginUser,  setReqData } from "../redux/slices/slice";

function Login() {
    const count = useSelector((state) => state.mainslice.isLog)

    const reqData = useSelector((state) => state.mainslice.reqData)
    
    const dispatch = useDispatch()
    let navigate = useNavigate();

    useEffect(
        () => {
            if (count) navigate('/')
        }, [count]
    )

    return (
        <>
        <Header/>
            <div className='main-login'>
                <div className="container-fluid">
                    <div className="row no-gutter mt-5 d-flex justify-content-center">
                        <div className="col-md-6 bg-light">
                            <div className="login d-flex align-items-center py-5">

                                <div className="container">
                                    <div className="row">
                                        <div className="col-lg-10 col-xl-7 mx-auto">
                                            <h3 className="display-4">Login</h3>

                                            <p className="text-muted mb-4">Login to Know the courses</p>
                                            <form>
                                                <div className="mb-3">
                                                    <input placeholder="email" value={reqData.email} onChange={(e) => dispatch(setReqData({ ...reqData, email: e.target.value }))} /><br />
                                                </div>
                                                <div className="mb-3">
                                                    <input className="mt-2 mb-3 " value={reqData.password} type='password' placeholder="password" onChange={(e) => dispatch(setReqData({ ...reqData, password: e.target.value }))} /><br />
                                                </div>
                                                <div className="d-grid gap-2 mt-2">
                                                    <button className="btn btn-primary" type="button" onClick={()=>dispatch(loginUser(reqData))}>Login</button>
                                                </div>
                                                <p className="mt-2 ">New User?  <Link to='/register' className="text-decoration-none">Register here</Link></p>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Login;