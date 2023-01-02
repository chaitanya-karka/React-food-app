import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const slice = createSlice({

    name: 'mainslice',
    initialState: {
        isLog: false,
        foodList: null,
        cartData: [],
        reqData: {
            request: "karka_login",
            email: "chaitanya@gmail.com",
            password: "1234"
        },
        orderList: [],
        userList: {},
    },
    reducers: {

        setIsLog: (state, val) => {
            state.isLog = val.payload
        },
        setFoodList: (state, val) => {
            state.foodList = val.payload
        },
        setCartData: (state, val) => {
            state.cartData = val.payload
        },
        setReqData: (state, val) => {
            state.reqData = val.payload
        },
        setOrderList: (state, val) => {
            state.orderList = val.payload
        },
        setUserList: (state, val) => {
            state.userList = val.payload
        }

    },
})
export const tokenLogin = async (userdata) => {
    let token = userdata.token;
    let tokenReq = {
        
        request: "get_karka_courses",
        token: token,
        user_email: userdata.email
    }
    const { data } = await axios.post('http://karka.academy/api/', JSON.stringify(tokenReq));
}

export const loginUser = (reqData) => async (dispatch) => {
    const { data } = await axios.post('http://karka.academy/api/', JSON.stringify(reqData));

    if (data.status == 'success') {
        dispatch(setIsLog(true))
        dispatch(setUserList(data.data))
        tokenLogin(data.data);
        
    }
}
export const { setIsLog, setFoodList, setCartData, setReqData, setOrderList, setUserList } = slice.actions
export default slice.reducer;