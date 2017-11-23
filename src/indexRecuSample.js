import React from 'react'
import ReactDOM from 'react-dom';
import './indexJobApp.css';
import {Resume,JobSeeker} from './components/JobSeeker.js'
import Navbar from './components/companyUI.js'
import JobseekerUI from './components/jobseekerUI.js'

import {Router ,Route ,browserHistory ,Link} from 'react-router'

import Company from './components/company.js'
import SigninComponent from './components/signinForm.js'
import SignupComponent from './components/signupForm.js'



import * as firebase from 'firebase'





  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyAU_gLkpOJIRih1UjUqINXMiA_MuzxBSyg",
    authDomain: "job-list-f1cb9.firebaseapp.com",
    databaseURL: "https://job-list-f1cb9.firebaseio.com",
    projectId: "job-list-f1cb9",
    storageBucket: "job-list-f1cb9.appspot.com",
    messagingSenderId: "1047331177643"
  };
  firebase.initializeApp(config);





 
class MainPage extends React.Component {

    constructor(){
        super();
            this.updateUser = this.updateUser.bind(this);
            this.updateEmail = this.updateEmail.bind(this);
            this.updatePass = this.updatePass.bind(this);

            
            // this.loginClick = this.loginClick.bind(this),

        this.state = {
            Users:[{
                email:"Abdullah@gmail.com",
                password:"sadiq"
            },
            {   
                Email:"samad@gmail.com",
                password:"sadiq"
                
            }
            ], 
            companys:[{
                id:"company001",
                name:"Pepsi",
                jobtitle:"Account Manager",
                salary:"20000-30000 /Rs",
                jobOffer:"Part Time",
                jobDes:"required a Male"
                
            },
            {   id:"company002",
                name:"Coca",
                jobtitle:"Administrative",
                salary:"30000-40000 /Rs",
                jobOffer:"Full Time",
                jobDes:"required a Male"
                
            },
            {   id:"company001",
                name:"Pepsi",
                jobtitle:"Administrative",
                salary:"30000-40000 /Rs",
                jobOffer:"Full Time",
                jobDes:"required a Male"
                
            }
            ],
            MainCenter: true,
            currentEmail : '',
            currentPass : '',
            currentUser :'',
            
        }




    }

        updateEmail(email){
            this.setState({
                currentEmail:email.target.value,
            })
            console.log(email.target.value);
        }    

         updatePass(pass){
            this.setState({
                currentPass:pass.target.value
            })
            console.log(this.state.currentPass)

        } 
        updateUser(user){
            this.setState({
                currentUser:user.target.value
            })
            console.log(this.state.currentUser)
            
        }
           

  


    // handleClick(){
        
    //     var d = document.getElementsByClassName("main-center");
    //     d.className = "main-center show"
        
        
    // }


    render() {
        return (
            <div>
                <div>
                    
                </div>

            
                <div className="main-center">
                    
                    <SignInForm />
                        {/*currentUser = {this.state.currentUser}
                        currentEmail={this.state.currentEmail}
                        currentPass = {this.state.currentPass}
                        updateEmail={this.updateEmail}
                        updatePass={this.updatePass}
                        updateUser={this.updateUser}*/}
                        
                     
                </div>
                

                <div className="footer">

                </div>
            </div>
        )
    }
}


class NavHeader extends React.Component{
    
    render(props){
        return(
            <div>
                {/*<img className="logo" src={logo} alt="logo" />*/}
                    <b>Online Jobs</b>

                    <div className="nav-bar">
                        <Link to="/"><a className="" >Home</a></Link>
                        <Link to ="/Resume"><a>JobSeeker/Employer</a></Link>
                        {/*<a>Employer</a>*/}
                        <Link to="/SigninComponent"><a>Job</a></Link>
                        <Link to="/JobseekerUI"><a>People</a></Link>
                        <Link to="/Navbar"><a>Compaines</a></Link>
                    </div>
                    <div>
                        <div className="btn-group">
                            <button type="button" className="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Action <span className="caret"></span>
                            </button>
                            <ul className="dropdown-menu">
                                <li><a href="">Action</a></li>
                                <li><a href="">Another action</a></li>
                                <li><a href="">Something else here</a></li>
                                <li role="separator" className="divider"></li>
                                <li><a href="">Separated link</a></li>
                            </ul>
                        </div>
                    </div>
            </div>
        )
    }


}

class SignInForm extends React.Component {
    
    render(props){
        return(
            <div>
                <div className="header">
                    <NavHeader currentcompany={this.props.companys}/>
                </div>
                <form>
                
                <h2>SignIn Form</h2>
                    <input type="Email" 
                        
                        placeholder="Email"/><br/>
                    <input type="Password" 
                        
                        placeholder="Password"/>
                        <br/>
                    <button>Login</button>
                    <Link to ="/SignUpForm"><button>SignUp</button></Link>
                    {/*<button>LogOut</button>*/}
                </form>
            </div>
        )
}
}

    // const logedin = <div>You are logged In</div>

class SignUpForm extends React.Component {


    signup(ev){
        ev.preventDefault();
        firebase.auth().createUserWithEmailAndPassword(this.refs.email.value,this.refs.password.value).then(() => {
            firebase.auth().currentUser.updateProfile({
                displayName:this.refs.username.value
            })
            
            alert("Sign up Done");

        })
    }


    render(props){
        return(
            <div>
                <div className="header">
                    <NavHeader/>
                </div>
                {/*<form onSubmit={ev=>{ev.preventDefault()}}>*/}
                
               
               
                <h2>Signup Form</h2>
                <form onSubmit={this.signup.bind(this)} >
                    <input type="text"
                    ref="username"
                     placeholder="User Name"/>
                    {/*onChange={this.props.updateUser}
                    value ={this.props.currentUser}*/}
                     <br/>
                    <input type="email"
                    ref="email"
                     placeholder="Email"/>
                    {/*onChange={this.props.updateEmail} 
                    value={this.props.currentEmail}*/}
                    <br/>
                    <input type="password" 
                    ref="password"
                    placeholder="Password"/>
                    {/*onChange={this.props.updatePass} 
                    value={this.props.currentPass} */}
                    <br/>
                    <select name="JobOption" id="">
                        <option value="JobSeeker">JobSeeker</option>
						<option value="Company">Company</option>
                    </select>
                    
                    <br/>
                    {/*<button onClick={() => {console.log(this.props.currentEmail+'<br/>'+ this.props.currentUser)} }></button>*/}
                    <input type="submit" value="Submit" />
                </form>
            </div>
       
        )
    }
}

export default NavHeader

ReactDOM.render(<Router history={browserHistory}>
                     
                    <Route path= "/" component={MainPage}/>
                    <Route path="/JobSeeker" component={JobSeeker}/>
                    <Route path="/SignUpForm" component={SignUpForm}/>
                    <Route path="/SignInForm" component={SignInForm}/>
                    
                    <Route path="/company" component={Company}/>
                    <Route path="/Resume" component={Resume}/>
                    <Route path="/renderBoth" component={JobSeeker}/>

                    <Route path="/Navbar" component={Navbar}/>
                    <Route path="/JobseekerUI" component={JobseekerUI}/>
                    
                    <Route path="/SigninComponent" component={SigninComponent}/>
                    
                    <Route path="/SignupComponent" component={SignupComponent}/>
                    
                    
                    
                    
                    

                    
                    
                    
                    
                    
                    
                </Router>
    , document.getElementById('root'))