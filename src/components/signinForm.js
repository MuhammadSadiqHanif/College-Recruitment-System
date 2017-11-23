import React from 'react'
import {Link} from 'react-router'
import {Router ,Route ,browserHistory } from 'react-router'

import NavLoginBar from './navbar.js'
// import Resume from './JobSeeker.js'

import * as firebase from 'firebase'




class SigninComponent extends React.Component {
    constructor() {
        super();

        this.state={
            username:''
        }

        this.handleUsertype=this.handleUsertype.bind(this);
        this.addhideClass=this.addhideClass.bind(this);
    }


        componentWillMount(){


                    firebase.auth().onAuthStateChanged(firebaseUser=>{
                    if(firebaseUser){
                        console.log(firebaseUser)
                    }else{
                        console.log("not logged in");
                    }
                    

                  })
        }

    


        handleUsertype(){
                    // this.addhideClass()
            firebase.database().ref('User/'+firebase.auth().currentUser.uid).on('value',(snap)=>{
                    let firebaseUidType=snap.val().type;

               if(snap.val().skill){
                   setTimeout(function(){
                browserHistory.push('/Userpanel')

                   },1500)
                
                
            } else if(firebaseUidType==="Job Seeker"){
                        browserHistory.push('/Resume')
                }else if(firebaseUidType==="Company"){
                        browserHistory.push('/Userpanel')
                    }else if(firebaseUidType==="admin"){
                        browserHistory.push('/Userpanel')
                    }
                    
            })
        

            // .child('type');
            // let firebaseTypeVal = firebaseType.on('child_added',snap => {
            //         var type = snap.child("type")

            // console.log(firebaseTypeVal)
            // })
            

        }

        
    


      handleClick(ev){
                  ev.preventDefault();
                

            const signinEmail = this.refs.email.value;
            const signinPassword = this.refs.password.value;
            const auth = firebase.auth();

            // sign in
           const promise = auth.signInWithEmailAndPassword(signinEmail,signinPassword);

           promise.then(this.handleUsertype)
            //    {firebase.database().ref("User"+"/"+firebase.auth().currentUser.uid)})
               
            //    window.location.href="/SignupComponent")  

           promise.catch(ev => console.log(ev.message));
        //    
        
      }  
           addhideClass(){
             firebase.database().ref('User/'+firebase.auth().currentUser.uid).once('value').then((snap)=>{
                var username = snap.val().username
                this.setState({
                    username
                })
                console.log(username)

                var d =document.querySelector("#alertBox")
                
                // d.innerHTML = "Welcome "+username
                d.classList.remove('hide')
                d.innerHTML = '<div id="alertMsg" className="alert alert-success" role="alert">'+'Welcome '+ this.state.username+'</div>'

                setTimeout(function(){d.classList.add('hide')},2000)
            })
            
        }

    render() {
        return (
            <div>
                
            
            <div className="container text-center" style={{ marginTop: "30px" }}>
                <h2 className="form-signin-heading col-sm-4 col-sm-offset-4">Please Sign in</h2>
                <form className="col-sm-4 col-sm-offset-4 auth-form-body" 
                onSubmit={this.handleClick.bind(this)}
                >
                    <div>
                        <label htmlFor="inputEmail" >Email address</label>
                        <input type="email" ref="email"
                            id="inputEmail" className="form-control"
                            placeholder="Email address"
                            required autoFocus
                        />
                            {/*onChange={this.props._inputHandler}*/}
                    </div>
                    <br />
                    <div >
                        <label htmlFor="inputPassword" className="pull-left">Password</label>
                        <input type="password" ref="password"
                            id="inputPassword" className="form-control"
                            placeholder="Password"
                            required
                        />
                            {/*onChange={this.props._inputHandler}*/}
                    </div>
                    <br/>
                  
                    <br />
                    <button className="btn btn-lg btn-primary btn-block"  type="submit">Sign in</button>
                </form>
                <div className="col-sm-4 col-sm-offset-4 text-center" style={{ marginTop: "10px" }}> Don't have account?? <Link to="/SignupComponent" style={{cursor:"pointer"}}>Create an account.</Link>
                </div>
                  
                  
            </div>
            </div>
        )
    }
    
}


export  default SigninComponent