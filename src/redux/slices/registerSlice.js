import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const registerSlice = createSlice({
    name: 'registerslice',
    initialState: {
        registerData: {
            
            request: "user_register",
            name:"",
            email: "",
            password:""
        },
        confirmRegisterData:{
            name:null,
            mob:null,
            address:'',
            pin:null,
        },
    },
    reducers: {
        setRegisterData: (state, val) => {
            state.registerData = val.payload
        },
        setConfirmRegisterData: (state, val) => {
            state.confirmRegisterData = val.payload
        }
    }
})
export const saveRegisterDetails = (registerData) => async () => {
    const { data } = await axios.post(' http://karka.academy/api/', JSON.stringify(registerData))
}
export const saveConfirmRegisterDetails = (registerdata) => async (dispatch) => {
   dispatch(setConfirmRegisterData())
}

export const { setRegisterData,setConfirmRegisterData } = registerSlice.actions
export default registerSlice.reducer;