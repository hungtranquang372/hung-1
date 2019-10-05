import React, { Component } from 'react'
import * as action from '../actions/index'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
 class Register extends Component {
    constructor(props) {
        super(props);
        this.state={
            username:'',
            password:'',
            isRegister:false
        }
    }
    
    onChange=(e)=>{
        this.setState({
      [e.target.name]:e.target.value
        })
    }
    onSubmit=()=>{
        this.props.onRegister({
            username:this.state.username,
            password:this.state.password
        })
        
        // fetch("http://localhost:4000/register", {
        //     method: 'POST', // or 'PUT'
        //     body: JSON.stringify(this.state), // data can be `string` or {object}!
        //     headers:{
        //       'Content-Type': 'application/json'
        //     }
        //   }).then(res => res.json())
        //   .then(response => {
        //     console.log(response);
        //       if(response.registration==="successful")
        //       alert("Dang Ky Thanh Cong")
        //       else 
        //       alert ("Dang Ky Khong Thanh Cong")
        //   })
        //   .catch(error => console.error('Error:', error));
    }
    render() {
        var {isRegister}=this.props;
        if(isRegister){
            return <Redirect to='/signin'/>
        }

        return (
            <div class="col-md-4 col-md-offset-4" id="login">
                <section id="inner-wrapper" class="login">
                    <article>
                        <form>
                            <div class="form-group">
                                <div class="input-group">
                                    <span class="input-group-addon"><i class="fa fa-user"> </i></span>
                                    <input 
                                    onChange={this.onChange}
                                    name="username"
                                    value={this.state.username}
                                    type="text" 
                                    class="form-control" placeholder="Name" />
                                </div>
                            </div>
                            <div class="form-group">
                                <div class="input-group">
                                    <span class="input-group-addon"><i class="fa fa-envelope"> </i></span>
                                    <input 
                                     onChange={this.onChange}
                                    name="password"
                                    value={this.state.password}
                                    type="email" 
                                    class="form-control" placeholder="password" />
                                </div>
                            </div>
                            
                            <button type="button" onClick={this.onSubmit} class="btn btn-success btn-block">Submit</button>
                        </form>
            
            </article>
            </section>
            </div>

        )
    }
}
const mapStateToProps=(state)=>{
    return {
        isRegister:state.data.isRegister
    }
}
const mapDispatchToProps=(dispatch,props)=>{
    return {
        onRegister:(data)=>{
            dispatch(action.register(data))
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Register)
