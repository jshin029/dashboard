import React, { Component } from 'react';

class AdminRegistration extends Component {
  constructor(props){
    super(props)
    this.state = {
      fName: '',
      lName: '',
      Email: '',
      Password: ''
    }
  }

  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value});
  }

  handleSubmit = (e) => {
    e.preventDefault()
    fetch( 'http://localhost:5000/adminRegistration', {
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify ({
        fName: this.state.fName,
        lName: this.state.lName,
        Email: this.state.Email,
        Password: this.state.Password
      }),
      method: 'POST',
    })
      .then(response => response.json())
      .then(response => {
        console.log(response)
      })
      .catch(err => console.log(err))
      this.setState({
        fName: '',
        lName: '',
        Password: '',
        Email: ''
      })
  }

  render(){
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="fName" placeholder="First name" value={this.state.fName} onChange={this.handleChange}/>
          <input type="text" name="lName" placeholder="Last name" value={this.state.lName} onChange={this.handleChange}/>
          <input type="text" name="Email" placeholder="Email" value={this.state.Email} onChange={this.handleChange}/>
          <input type="password" name="Password" placeholder="Password" value={this.state.Password} onChange={this.handleChange}/>
          <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
};

export default AdminRegistration;
