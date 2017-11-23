import React from 'react'
import ReactDOM from 'react-dom';
// import './components/indexJobApp.css';
import {Resume,Resume2} from './JobSeeker.js'

import Company from './company.js'
import NavLoginBar from './navbar.js'


import {Router ,Route ,browserHistory } from 'react-router'
import { Link} from "react-router"
import * as firebase from 'firebase'


import ViewEachJob from './vieweachjob.js'
import ViewAllJob from './viewAllJob.js'
// import Logout from './components/signinForm.js'










class Userpanel extends React.Component{
    constructor(props){
        super(props)
       

        this.state= {

            
        email:"",
        firstname:"",
        lastname:"",
        username:"",
        type:"",


        fullname:'',
        addressLn1:'',
        addressLn2:'',
        city:"",
        stateProvince:"",
        
        zipCode:"",
        country:"",
        areaCode:"",
        phoneNo:"",
        areaOfInterest:"",
        skill:"",
        coverletter:"",
        // UserUid: firebase.auth().currentUser.uid

        
    }
            this.addhideClass=this.addhideClass.bind(this)
    }
    

    componentWillMount(){
    firebase.auth().onAuthStateChanged((user)=>{
        if(user){
        firebase.database().ref('User/'+firebase.auth().currentUser.uid).once('value').then((snap)=>{
            var uids = firebase.auth().currentUser.uid;
            var email=firebase.auth().currentUser.email;
            var type =snap.val().type;
            var fullname=snap.val().fullname;

            var firstname=snap.val().firstname;
            var lastname=snap.val().lastname;
            var username = snap.val().username;
            var addressLn1=snap.val().addressLn1;
            var addressLn2=snap.val().addressLn2;
            var city=snap.val().city;
            var stateProvince=snap.val().stateProvince;
            
            var zipCode=snap.val().zipCode;
            var country=snap.val().country;
            var areaCode=snap.val().areaCode;
            var phoneNo=snap.val().phoneNo;
            var areaOfInterest=snap.val().areaCode;
            var skill=snap.val().skill;
            var coverletter=snap.val().coverletter;
            
            // firebase.database().ref('Job').on('child_added',(snapdata)=>{
            //     snapdata.forEach(function(child_snapdata) {
            //         var obj= (child_snapdata.key,child_snapdata.val());
            //         var output = [];
                    // for (var property in obj) {
                    //    console.log(obj.companyname.val())
                    // output.push( property + ': ' + obj[property]+'; ');
                    // }
                    // alert(output);
                    
                    
                    // console.log(pro);
                // });

            // console.log(snapdata.val())
            // })

            // firebase.database().ref('Job').orderByKey().on('child_added',(snapdata)=>{

            // console.log(snapdata.val())
            // })


            // firebase.database().ref('users/').once('value').then(function(snapshot) {
            //     snapshot.forEach(function(userSnapshot) {
            //         var username = userSnapshot.val();}
            //         console.log(username.first_name);
            //     });
            // });



        console.log(uids,email,fullname)
        
         this.setState({
             email,
             fullname,
             type,

            firstname,
            lastname,
            username,


            addressLn1,
            addressLn2,
            city,
            stateProvince,
            
            zipCode,
            country,
            areaCode,
            phoneNo,
            areaOfInterest,
            skill,
            coverletter,
             

         })
        })}
    })
  
}
 


    addhideClass(){
                var d =document.getElementById("alertBox")
                
                d.classList.remove('hide')

                setTimeout(function(){d.classList.add('hide')},3000)

        }
        





            // {this.state.resume === true?
            //                                 <div>
            //                                     <br/>
            //                                     <Resume2 {...this.state}/>
                                                
            //                                 </div>
            //                                 :
            //                                 <div></div>
                                            
            //                                       



            


       

    render(){
        return (
            <div>
                <NavLoginBar/>
                <div className="container">
                    <div className="container ">
                        <div className="navBar">
                            <div className="col-xs-5">

                                <div className="profileImg "></div>
                            </div>
                    <div className="">
                            <div style={{ fontSize: "120%" }} className="col-xs-5" >
                                <table className="table userpanel">
                                    <tbody>
                                        <tr>
                                            <th>User Type:</th>
                                            <th> {this.state.type}</th>
                                        </tr>
                                        <tr>
                                            <th>User Email:</th>
                                            <th>{this.state.email}</th>
                                        </tr>
                                        {this.state.type==="Job Seeker"?
                                        <tr>
                                            <th>User Full Name:</th>
                                            <th>{this.state.fullname}</th>
                                        </tr>
                                        : <tr></tr>                                     
                                        
                                        }
                                    </tbody>
                                </table>
                            </div>

                        </div>
                            <div className= "userpanel col-xs-2">
                                     {this.state.type === "admin" ?
                                                    <div className= "">
                                                        <Link className="btn" to="/ViewAllJob">View All Jobs</Link>
                                                        <Link className="btn" to="/ViewAllResume">View All Resume</Link>
                                                        <Link className="btn" to="/ViewAllJobSeeker">View All JobSeeker</Link>
                                                        <Link className="btn" to="/ViewAllCompany">View All Companies</Link>
                                                    </div>
                                    : this.state.type === "Job Seeker" ?
                                                    <div>
                                                        <Link className="btn" to="/ViewAllJob">All Jobs</Link>
                                                        <Link className="btn" to="/Resume">Resume</Link>

                                                    </div>
                                    :
                                                    <div>
                                                        <Link className="btn" to="/Company">Post A Job</Link>
                                                        <Link className="btn" to="/ViewEachJob">View My Jobs</Link>
                                                        <Link className="btn" to="/ViewAllResume">All CV's</Link>
                                                    </div>}
                                    
                                    </div>
                            </div>
                                                       {/*{browserHistory.push('/ViewEachJob')}*/}
                                                       {/*<ViewEachJob/>*/}

                    </div>
                </div>
            </div>
            
        )
    }
}


export default Userpanel