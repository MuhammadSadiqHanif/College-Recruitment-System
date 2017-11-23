import React from 'react'
import ReactDOM from 'react-dom';

import Userpanel from './userpanel.js'
import NavLoginBar from './navbar.js'


import {Router ,Route ,browserHistory } from 'react-router'
import { Link} from "react-router"
import * as firebase from 'firebase'


// class ViewEachJob extends React.Component{

//     render(){
//         return(
//             <table> 
//                 <tbody>
//                     {for}
//                     <tr>
//                         <td>{this.props.}</td>
//                     </tr>
//                 </tbody>
//             </table>
//         )
//     }
// }

// .catch(err=>{console.log(err)})



 class ViewAllResume extends React.Component{
    constructor(props){
        super(props)
        this.state= {
            Resumes : [],
            ResumeObj:{},
            ResumeKeys : [],
            
        }
        this.updateState = this.updateState.bind(this);
        // this.onDelete = this.onDelete.bind(this);
    }
    // componentWillMount(){
    //     firebase.auth().onAuthStateChanged((user)=>{
    //     if(user){
    //     var uids = firebase.auth().currentUser.uid;
    //     console.log(uids)}
    //     })
    // }
    onDelete(ind){
        var keyForFind = this.state.JobsKeys[ind];
        console.log(keyForFind)
        firebase.database().ref('Job').child(keyForFind).remove(function (error) {
            if (!error) {
                console.log("remove from firebase")
            }
            else{
                console.log('not removed')
            }
        });
        this.updateState()        
    }

    componentDidMount(){
        this.updateState()
    }
    updateState(){

        firebase.auth().onAuthStateChanged((user)=>{
                if(user){
                var uids = firebase.auth().currentUser.uid;
                console.log(uids)}
                
                
                firebase.database().ref('User').orderByChild("type").equalTo("Job Seeker").on('value',(snap)=>{
                    var snapObj = snap.val();
                    var snapVals = [];
                    var snapKeys = [];
                    for(let key in snapObj){
                        snapVals.push((snapObj[key]))
                        snapKeys.push(key)
                    }
                    this.setState({
                        Resumes : snapVals,
                        ResumeKeys : snapKeys,
                        ResumeObj: snapObj,
                        
                    })
                    console.log(this.state.Resumes)
                })
        })
    }
    render(){
        return(
            <div>

                            
                            <Userpanel/>
                            <div className="page-header">
                                All Resumes
                            </div>
                            {  !this.state.Resumes.length?
                                    <h1 className="text-center">No Resume In This </h1>
                                :
                                <div className="flexing">
                                        {this.state.Resumes.map((Resume,ind)=>(
                                           
                                            <div key={ind}>
                                                <div className="jumbotron squareTable">
                                                <table className="">
                                                    <tbody>
                                                        {Resume.fullname &&
                                                            <tr>
                                                                <th>Full Name</th>
                                                                <td>{Resume.fullname}</td>
                                                            </tr>
                                                        }
                                                        {Resume.skill &&
                                                            <tr>
                                                                <th>Skill:</th>
                                                                <td>{Resume.skill}</td>
                                                            </tr>
                                                        }{Resume.areaOfInterest &&
                                                            <tr>
                                                                <th>Interest:</th>
                                                                <td>{Resume.areaOfInterest}</td>
                                                            </tr>
                                                        }

                                                        {Resume.phoneNo &&
                                                            <tr>
                                                                <th>Phone No:</th>
                                                                <td>{Resume.phoneNo}</td>
                                                            </tr>
                                                        }
                                                        {Resume.email &&
                                                            <tr>
                                                                <th>Email:</th>
                                                                <td>{Resume.email}</td>
                                                            </tr>
                                                        }
                                                    </tbody>
                                                </table>
                                               
                                                {/*<button className="btn btn-warning pull-right"  > More... </button>*/}
                                                
                                                
                                            </div>
                                            </div>
                                        ))}
                                </div>
                            }
            </div>
        )
    }
}

export default ViewAllResume