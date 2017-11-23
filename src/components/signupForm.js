import * as React from "react";
import NavLoginBar from './navbar.js'
import {Router ,Route ,browserHistory } from 'react-router'

import * as firebase from 'firebase'


class SignupComponent extends React.Component {
    constructor() {
        super();
    this.state= {
        type:''
    }
    }
    // this.handelRadioBtn= this.handelRadioBtn.bind(this)
                setGender(event) {
                   this.setState({

                   type:document.querySelector('input[name="optradio"]:checked').value
                   })
                       
                   
                
                }

    handleClick(ev){
        ev.preventDefault();
        firebase.auth().createUserWithEmailAndPassword(this.refs.inputEmail.value,this.refs.inputPassword.value)
        .then(() => {
            // firebase.auth().currentUser.updateProfile({
            //     displayName:this.refs.username.value
            // })

               
                

                let uids =firebase.auth().currentUser.uid;
                console.log(uids)
                // let firstname=this.refs.firstname.value;
                // let lastname=this.refs.lastname.value;
                // let inputEmail=this.refs.inputEmail.value;

                firebase.database().ref("User/"+uids).set({
                    username:this.refs.username.value,
                    firstname:this.refs.firstname.value,
                  lastname:this.refs.lastname.value,
                  email:this.refs.inputEmail.value,
                  type:this.state.type
                  
                })
                firebase.database().ref('User/'+firebase.auth().currentUser.uid).on('value',(snap)=>{
                       console.log(snap.val().email)})
                alert("Sign up Done");
                browserHistory.push('/')

            //  window.location.href="/SigninComponent"
        })
               
    }

    

    render() {
        return (
            <div>
                <NavLoginBar/>

            <div className="container text-center" style={{ marginTop: "30px" }}>
                <h2 className="form-signin-heading col-sm-4 col-sm-offset-4">{(this.props.isProfileRoute) ? <span>Edit</span> : <span>Register</span>}</h2>
                <form className="col-sm-4 col-sm-offset-4 auth-form-body" onSubmit={this.handleClick.bind(this)} >
                    <div>
                        <label  className="pull-left"><span>Username</span></label>
                        <input type="text" ref="username" name="name"
                            id="Username" className="form-control"
                            placeholder="Username"
                            required autoFocus
                            />
                            {/*onChange={this.props._inputHandler}*/}
                            {/*value={this.props.user.name}*/}
                        <br />
                    </div>

                    <div>
                        <label className="pull-left">Firstname</label>
                        <input type="text" ref="firstname"  name="firstname"
                            id="Firstname" className="form-control"
                            placeholder="Firstname"
                            required autoFocus
                            />
                            {/*value={this.props.user.firstname}
                            onChange={this.props._inputHandler}*/}
                    </div>

                    <div>
                        <br />
                        <label  className="pull-left">Lastname</label>
                        <input type="text" ref="lastname" name="lastname"
                            id="Lastname" className="form-control"
                            placeholder="Lastname"
                            required autoFocus
                            />
                            {/*value={this.props.user.lastname}
                            onChange={this.props._inputHandler}*/}
                        <br />
                    </div>

                    <div>
                        <label  className="pull-left">Email address</label>
                        <input type="email"  ref="inputEmail"name="email"
                            id="inputEmail" className="form-control"
                            placeholder="Email address"
                            required
                            />
                            {/*disabled={this.props.isProfileRoute}
                            value={this.props.user.email}
                            onChange={this.props._inputHandler}*/}
                    </div>
                    <br />
                    {/*{!this.props.isProfileRoute &&*/}
                        <div >
                            <label className="pull-left">Password</label>
                            <input type="password"  ref="inputPassword" name="password"
                                id="inputPassword" className="form-control"
                                placeholder="Password"
                                required
                                />
                                {/*value={this.props.user.password}
                                onChange={this.props._inputHandler}*/}
                        </div>
                        <br/>
                     
                          <div >
                    <label htmlFor="R1" className=" pull-left radio-inline">
                        <input  id="R1" type="radio"  value="Job Seeker" onClick={this.setGender.bind(this)} name="optradio"/>Job Seeker</label>
                    <label htmlFor="R2" className="radio-inline">
                        <input id="R2" type="radio" value="Company" onClick={this.setGender.bind(this)} name="optradio"/>Company</label>
                    {/*<input type="radio" name="optradio"/>Option 2*/}
                    {/*onChange={this.setGender.bind(this)} */}
                    </div>
                    {/*}*/}
                    <br />
                    <button className="btn btn-lg btn-primary btn-block" type="submit" >
                        
                        {this.props.isProfileRoute ? <span>Update</span> : <span>Sign up</span>}
                    </button>
                </form>
            </div>
            </div>
        )
    }
}

export default SignupComponent;