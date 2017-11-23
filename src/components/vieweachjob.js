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



export default class ViewEachJob extends React.Component{
    constructor(props){
        super(props)
        this.state= {
            Jobs : [],
            JobsObj:{},
            JobsKeys : [],
            
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
                
                
                firebase.database().ref('Job').orderByChild("UserID").equalTo(uids).on('value',(snap)=>{
                    var snapObj = snap.val();
                    var snapVals = [];
                    var snapKeys = [];
                    for(let key in snapObj){
                        snapVals.push((snapObj[key]))
                        snapKeys.push(key)
                    }
                    this.setState({
                        Jobs : snapVals,
                        JobsKeys : snapKeys,
                        JobsObj: snapObj,
                        
                    })
                    console.log(this.state.Jobs)
                })
        })
    }
    render(){
        return(
            <div>

                            
                            <Userpanel/>
                            <div className="page-header">
                                All Jobs's
                            </div>
                            {  !this.state.Jobs.length?
                                    <h1 className="text-center">No Jobs In This </h1>
                                :
                                <div className="flexing">
                                        {this.state.Jobs.map((Job,ind)=>(
                                           
                                            <div key={ind}>
                                                <div className="jumbotron squareTable">
                                                <table className="">
                                                    <tbody>
                                                        {Job.companyname &&
                                                            <tr>
                                                                <th>Company</th>
                                                                <td>{Job.companyname}</td>
                                                            </tr>
                                                        }
                                                        {Job.jobTitle &&
                                                            <tr>
                                                                <th>Job Title:</th>
                                                                <td>{Job.jobTitle}</td>
                                                            </tr>
                                                        }{Job.jobOffer &&
                                                            <tr>
                                                                <th>Job Offer:</th>
                                                                <td>{Job.jobOffer}</td>
                                                            </tr>
                                                        }

                                                        {Job.salaryOffer &&
                                                            <tr>
                                                                <th>Salary Offer:</th>
                                                                <td>{Job.salaryOffer}</td>
                                                            </tr>
                                                        }
                                                        {Job.jobDes &&
                                                            <tr>
                                                                <th>Description:</th>
                                                                <td>{Job.jobDes}</td>
                                                            </tr>
                                                        }
                                                    </tbody>
                                                </table>
                                                <button className="btn btn-danger pull-right" onClick={this.onDelete.bind(this, ind)} > delete </button>
                                                
                                            </div>
                                            </div>
                                        ))}
                                </div>
                            }
            </div>
        )
    }
}