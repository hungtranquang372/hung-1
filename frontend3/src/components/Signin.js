import React, { Component } from 'react'
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import * as action from '../actions/index'

 class Signin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        }
    }
    onChange = (e) => {

        this.setState({
            [e.target.name]: e.target.value
        })
    }
    // onSubmit = () => {
    //     console.log(this.state)
    //     fetch('http://localhost:4000/login', {
    //         method: 'POST',
    //         body: JSON.stringify(this.state),
    //         headers: {
    //             'Content-Type': 'application/json'
    //         }
    //     }).then(res => res.json())
    //         .then(response => {
    //             console.log(response);
    //             if(response.authorize==='true'){
    //                 localStorage.setItem('user',JSON.stringify(this.state) )
    //                 alert("dang nhap thanh cong")
    //             }
    //             else  alert("dang nhap khong thanh cong")
    //         })
    //         .catch(error => console.error('Error:', error));
    // }
    onLogin=()=>{
        console.log(this.state);
        
        this.props.onLogin(this.state)
    }    
    render() {
        
        let {isAuthenticate}=this.props.data;
        console.log(isAuthenticate)
        if(isAuthenticate){
            return <Redirect to='/'/>
        }
        else{
            return (
                <div className="container">
                    <div className="row">
                        <div className="col-6 ">
                            <form>
                                <div class="form-group">
                                    <label for="exampleInputEmail1">User name</label>
                                    <input type="text"
                                        onChange={this.onChange}
                                        name="username"
                                        value={this.state.name}
                                        class="form-control" placeholder="Enter user name" />
    
                                </div>
                                <div class="form-group">
                                    <label for="exampleInputPassword1">Password</label>
                                    <input type="password"
                                        value={this.state.name}
                                        onChange={this.onChange}
                                        name="password"
                                        class="form-control" placeholder="Password" />
                                </div>
    
                                <button type="button" class="btn btn-primary" onClick={this.onLogin}>Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            )
        }
    }
        }
const mapStateToProps=(state)=>{
    return {
        data:state.data 
    }
}
const mapDispatchToProps=(dispatch,props)=>{
    return {
        onLogin:(data)=>{
            dispatch(action.logIn(data))
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Signin)
