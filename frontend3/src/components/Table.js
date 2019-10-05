import React, { Component } from 'react'
import { FaTrash, FaPenAlt } from 'react-icons/fa';
export default class Table extends Component {
  constructor(props) {
    super(props)
    this.state = {
      elmTask: null,
      item: {
        id: '',
        username: '',
        password: ''
      }

    }
  }

 onDelete=(id)=>{
   fetch('http:/localhost:4000/user'+id,{
     method:'DELETE'
   })
   .then(res=>res.json())
   .then(response=>{
     if(response.delete==="successful"){
       this.getData()
     }
   })
   .catch(error=>console.error('Error',error))
 }
  onClick = (item) => {
    this.setState({
      item: {
        username: item.username,
        password: item.password,
        id: item._id
      }
    })
  }

  onEdit = (state) => {
    console.log("state",state);
    
    let obj = {
      id: state.id,
      user: {
        username: state.username,
        password: state.password
      }
    }
    console.log("obj",obj);
    
    fetch('http://localhost:4000/users/', {
      method: 'PUT',
      body: JSON.stringify(obj),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(res => res.json())
      .then(response => {
        console.log(response.update);
        if (response.update === "successful") {
          console.log('chay----------');
          
          this.getData();
        }
      })
      .catch(error => console.error('Error:', error));
  }


  getData=()=>{
    fetch('http:/loclhost:4000/users').then(res=>res.json())
    .then(response=>{
      var elmTask= response.map((item,index)=>{
        
    
    
  
          
          return <tr>
            <th scope="row">{index + 1}</th>
            <td>{item.username}</td>
            <td><button className="btn btn-primary" data-toggle="modal" data-target="#exampleModal" onClick={() => this.onClick(item)}><FaPenAlt /></button>
              <button className="btn btn-danger" onClick={() => this.onDelete(item._id)}><FaTrash /></button>
            </td>
          </tr>
        })
        this.setState({
          elmTask
        })
      })
  }
  componentDidMount() {
    this.getData();

  }
  onChange = (e) => {
    let username = e.target.name === "username" ?  e.target.value : this.state.item.username
    let password = e.target.name === "password" ?  e.target.value : this.state.item.password
    this.setState({
      item:{
        id:this.state.item.id,
        username,
        password
      }
      
    })
  }
  onForm = () => {
    this.onEdit(this.state.username, this.state.password)
  }
  render() {
    return (
      <div>
        <table class="table">
          <thead>
            <tr>
              <th scope="col">Index</th>
              <th scope="col">Username</th>
              <th scope="col">Handle</th>
            </tr>
          </thead>
          <tbody>
            {this.state.elmTask}

          </tbody>
        </table>

        <div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <form>
                  <input className="form-control"
                    name="username"
                    value={this.state.item.username}
                    onChange={this.onChange}
                  />
                  <input className="form-control"
                    name="password"
                    value={this.state.item.password}
                    onChange={this.onChange} />
                  <button />
                </form>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary" data-dismiss="modal" onClick={() => this.onEdit(this.state.item)}>Save changes</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
