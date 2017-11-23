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



export default class ViewAllJobSeeker extends React.Component{
    constructor(props){
        super(props)
        this.state= {
            JobSeeker : [],
            JobSeekerObj:{},
            JobSeekerKeys : [],
            Jobs : [],
            JobsKeys : [],
            JobsObj: {},
            
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

        
        var keyForFind = this.state.JobSeekerKeys[ind];
        console.log(keyForFind)
       

        //deleting extra item of jobseeker
        // firebase.database().ref('User').child(keyForFind).remove(function (error) {
        //     if (!error) {
        //         console.log("remove from firebase")
        //     }
        //     else{
        //         console.log('not removed')
        //     }
        // });
        // this.updateState()        
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
                        JobSeeker : snapVals,
                        JobSeekerKeys : snapKeys,
                        JobSeekerObj: snapObj,
                        
                    })
                })


                
        })
    }
    render(){
        return(
            <div>

                            
                            <Userpanel/>
                            <div className="tableWidth">
                            <div className="page-header">
                               All JobSeeker
                            </div>
                            {  !this.state.JobSeeker.length?
                                    <h1 className="text-center">No JobSeeker In This </h1>
                                :
                                <div className="">
                                           
                                            <div >
                                                <div className="">
                                                <table className="table table-hover">
                                                        <thead>
                                                            <tr>
                                                                <th>JobSeeker</th>
                                                                <th>Fisrt Name</th>
                                                                <th>Last Name</th>
                                                                <th>JobSeeker Email:</th>
                                                                <th></th>
                                                                
                                                            </tr>
                                                        </thead>
                                                    <tbody>
                                        {this.state.JobSeeker.map((JobSeeker,ind)=>(
                                                       
                                                        
                                                            <tr key={ind}>
                                                                <td>{JobSeeker.username}</td>
                                                                <td>{JobSeeker.firstname}</td>
                                                                <td>{JobSeeker.lastname}</td>
                                                                <td>{JobSeeker.email}</td>
                                                                <td>
                                                                    {/*<button className="btn btn-danger pull-right" onClick={this.onDelete.bind(this, ind)} > delete </button>*/}
                                                                </td>
                                                            </tr>
                                                            ))}
                                                       
                                                    
                                                    </tbody>
                                                </table>

                                                
                                            </div>
                                            </div>
                                        
                                </div>
                            }
                     </div>       
            </div>
        )
    }
}