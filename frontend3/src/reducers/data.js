import * as types from '../constant/ActionType';
var initialState={
    username:'',
    password:'',
    isAuthenticate : false,
    isRegister:false,
    isMessage:false
}
var myReducer=(state=initialState,action)=>{
    console.log(action);
    
    switch(action.type){
        case types.LOGIN:{
            if(action.data){
                return action.data
            }
            else return state
         }
         case types.REGISTER:{
            return{isRegister:true}
        } 
        case types.ERROR:{
            return{isMessgage:true}
        } 
        default : return state
    }
}
export default myReducer;