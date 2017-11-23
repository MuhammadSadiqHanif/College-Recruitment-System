import React from 'react'
import ReactDOM from 'react-dom';
import './indexJobApp.css';
import {Resume,Resume2} from './components/JobSeeker.js'
// import JobseekerUI from './components/jobseekerUI.js'

import {Router ,Route ,browserHistory } from 'react-router'
import NavLoginBar from './components/navbar.js'

import SigninComponent from './components/signinForm.js'
import SignupComponent from './components/signupForm.js'
import Userpanel from './components/userpanel.js'
import ViewEachJob from './components/vieweachjob.js'

import ViewAllJob from './components/viewAllJob.js'


import Company from './components/company.js'
import ViewAllResume from './components/viewAllResume.js'
import ViewAllCompany from './components/viewallcompany.js'
import ViewAllJobSeeker from './components/viewalljobseeker.js'




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
            // this.updateUser = this.updateUser.bind(this);
            // this.updateEmail = this.updateEmail.bind(this);
            // this.updatePass = this.updatePass.bind(this);

            
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

        // updateEmail(email){
        //     this.setState({
        //         currentEmail:email.target.value,
        //     })
        //     console.log(email.target.value);
        // }    

        //  updatePass(pass){
        //     this.setState({
        //         currentPass:pass.target.value
        //     })
        //     console.log(this.state.currentPass)

        // } 
        // updateUser(user){
        //     this.setState({
        //         currentUser:user.target.value
        //     })
        //     console.log(this.state.currentUser)
            
        // }
           

  


    // handleClick(){
        
    //     var d = document.getElementsByClassName("main-center");
    //     d.className = "main-center show"
        
        
    // }


    render() {
        return (
            <div>
                <div>
                    <NavLoginBar/>
                    <SigninComponent/>  
                    
                                         

                </div>
            
                     
            </div>
        )
    }
}


   


ReactDOM.render(<Router history={browserHistory}>
                     
                    <Route path= "/" component={MainPage}/>
                    {/*<Route path="/JobSeeker" component={JobSeeker}/>*/}
                    {/*<Route path="/SignUpForm" component={SignUpForm}/>*/}
                    {/*<Route path="/SignInForm" component={SignInForm}/>*/}
                    
                    {/*<Route path="/company" component={Company}/>*/}
                    <Route path="/Resume" component={Resume}/>

                    
                    <Route path="/" component={SigninComponent}/>
                    <Route path="/SignupComponent" component={SignupComponent}/>
                    <Route path="/Userpanel" component={Userpanel}/>
                    <Route path="/Company" component={Company}/>
                    <Route path="/ViewEachJob" component={ViewEachJob}/>
                    <Route path="/ViewAllResume" component={ViewAllResume}/>
                    <Route path="/ViewAllJob" component={ViewAllJob}/>
                    <Route path="/ViewAllCompany" component={ViewAllCompany}/>
                    <Route path="/ViewAllJobSeeker" component={ViewAllJobSeeker}/>
                    
                   
                    
                 
                    
                    
                    
                    

                    
                    
                    
                    
                    
                    
                </Router>
    , document.getElementById('root'))