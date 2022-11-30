import React from 'react';
import {messageType} from "./State";


export const addMess = () => ({type: 'addMess'})
export const updateNewMessText = (text: string) => ({type: 'updateNewMessText', newMess: text})


const DialogReducer = (state: any , action: any ) => {
   switch (action.type){
       case 'updateNewMessText':
           state.messageForNewMess = action.newMess
           return state
       case 'addMess':
           const newMess: messageType = {
               mess: state.messageForNewMess
           }
           state.message.push(newMess)
           return state;
       default:
           return state;
   }



};

export default DialogReducer;
