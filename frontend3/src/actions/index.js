import * as types from '../constant/ActionType';
export const logIn=(data)=>{
    console.log('data',data);
    
    return dispatch =>{
        fetch('http://localhost:4000/login',{
            method:'POST',
            body:JSON.stringify(data),
            headers:{
                'Content-Type':'application/json'
            }
        })
        .then(res=>res.json())
        .then(response=>{
            console.log('res',response);
            
            if(response.authorize===true){
                console.log('chay vo day');
                
               const obj={
                   isAuthenticate:true,
                   username:data.username,
                   password:data.password
               }
               localStorage.setItem('user',JSON.stringify(obj))
               dispatch({
                   type:types.LOGIN,
                   data:obj
               })
            }
            else{
                dispatch({
                    type:types.ERROR,
                    data:null
                })
            }
        })
        .catch(error=>dispatch({
            type:types.ERROR,
            data:error
        }))
    }
}
export const register=(data)=>{
    return dispatch=>{
        fetch('http://localhost:4000/register',{
            method:'POST',
            body:JSON.stringify(data),
            headers:{
                'Content-Types':'application/json'
            }
        })
        .then(res=>res.json())
        .then(reponse=>{
            if(reponse.registration==='successful'){
                dispatch({
                    type:types.REGISTER,
                    isRegister:true
                })
            }
            else{
                dispatch({
                    type:types.REGISTER,
                    isRegister:false
                })
            }
        })
       .catch(error=>console.error('Error:',console.error));
    }
}
