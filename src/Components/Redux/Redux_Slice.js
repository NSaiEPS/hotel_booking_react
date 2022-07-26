import { createSlice } from "@reduxjs/toolkit";
import { act } from "react-dom/test-utils";

export const ReduxSlice=createSlice({
    name:'slice',
    initialState:{
        theme:'light',
        signing:'signup',
        user:null,
        insidesignin:null,
        totaltables:'',
        bookedtables:'',
        bookeduserid:'',
        unbookedtables:'',
        usersnumbers:'',
        suppliersnumber:'',
        usertablebookingnum:0,

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
        },
        tablenumber:(state,action)=>{
            state.totaltables=action.payload
        },
        bookedtable:(state,action)=>{
            state.bookedtables=action.payload
        },
         unbookedtable:(state,action)=>{
            state.unbookedtables=action.payload
        },
        bookedusersid:(state,action)=>{
            state.bookeduserid=action.payload
        },
        usersnumb:(state,action)=>{
            state.usersnumbers=action.payload
        },
        suplersnumb:(state,action)=>{
            state.suppliersnumber=action.payload
        },
        usernoofbooking:(state,action)=>{
            state.usertablebookingnum=action.payload
        }

    }
})


export const {themes,signings,userinfo,insidesign,tablenumber,unbookedtable,bookedtable,bookedusersid,suplersnumb,usersnumb,usernoofbooking}=ReduxSlice.actions;

export const SelectTheme=(state)=>state.reduxstore.theme
export const Selectsigning=(state)=>state.reduxstore.signing
export const SelectUser=(state)=>state.reduxstore.user
export const SelectInsidesign=(state)=>state.reduxstore.insidesignin
export const Selecttablenumber=(state)=>state.reduxstore.totaltables
export const Selectbookedtables=(state)=>state.reduxstore.bookedtables
export const Selectunbookedtables=(state)=>state.reduxstore.unbookedtables
export const SelectbookeduserID=(state)=>state.reduxstore.bookeduserid
export const Selectusersnumb=(state)=>state.reduxstore.usersnumbers
export const SelectSupliernumb=(state)=>state.reduxstore.suppliersnumber
export const SelectUserbookingnum=(state)=>state.reduxstore.usertablebookingnum

export default ReduxSlice.reducer