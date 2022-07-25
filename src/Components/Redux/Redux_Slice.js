import { createSlice } from "@reduxjs/toolkit";
import { act } from "react-dom/test-utils";

export const ReduxSlice=createSlice({
    name:'slice',
    initialState:{
        theme:'dark',
        signing:'signup',
        user:null,
        insidesignin:null,

    },

    reducers:{
        themes:(state,action)=>{
            state.theme=action.payload
        },
        signings:(state,action)=>{
            state.signing=action.payload
        },
        userinfo:(state,action)=>{
            state.user=action.payload
        },
        insidesign:(state,action)=>{
            state.insidesignin=action.payload
        }

    }
})


export const {themes,signings,userinfo,insidesign}=ReduxSlice.actions;

export const SelectTheme=(state)=>state.reduxstore.theme
export const Selectsigning=(state)=>state.reduxstore.signing
export const SelectUser=(state)=>state.reduxstore.user
export const SelectInsidesign=(state)=>state.reduxstore.insidesignin

export default ReduxSlice.reducer