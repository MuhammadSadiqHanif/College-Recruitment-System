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



export default class ViewAllCompany extends React.Component{
    constructor(props){
        super(props)
        this.state= {
            Company : [],
            CompanyObj:{},
            CompanyKeys : [],
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


        var keyForFind = this.state.CompanyKeys[ind];
        console.log(keyForFind)


        // firebase.database().ref('Job').orderByChild("UserID").equalTo(keyForFind).remove(function(error){
        

        // firebase.database().ref('Job').on('value',(snapdata)=>{
        // console.log(snapdata.val())

        // })
        // .orderByChild("UserID").equalTo(keyForFind)
        // .remove(function(error){
        //   if (!error) {
        //         console.log("remove from firebase")
        //     }
        //     else{
        //         console.log('not removed')
        //     }
        // });  
        // var abd= firebase.database().ref('User')
        // console.log(abd)
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


               

                
                firebase.database().ref('User').orderByChild("type").equalTo("Company").on('value',(snap)=>{
                    var snapObj = snap.val();
                    var snapVals = [];
                    var snapKeys = [];
                    for(let key in snapObj){
                        snapVals.push((snapObj[key]))
                        snapKeys.push(key)
                    }
                    this.setState({
                        Company : snapVals,
                        CompanyKeys : snapKeys,
                        CompanyObj: snapObj,
                        
                    })
                    console.log(this.state.Company)
                })


                
        })
    }
    render(){
        return(
            <div>

                            
                            <Userpanel/>
                            <div className="tableWidth">
                            <div className="page-header">
                               All Companies
                            </div>
                            {  !this.state.Company.length?
                                    <h1 className="text-center">No Jobs In This </h1>
                                :
                                <div className="">
                                           
                                            <div >
                                                <div className="">
                                                <table className="table table-hover">
                                                        <thead>
                                                            <tr>
                                                                <th>Company</th>
                                                                <th>Fisrt Name</th>
                                                                <th>Last Name</th>
                                                                <th>Company Email:</th>
                                                                <th></th>
                                                                
                                                            </tr>
                                                        </thead>
                                                    <tbody>
                                        {this.state.Company.map((Company,ind)=>(
                                                       
                                                        
                                                            <tr key={ind}>
                                                                <td>{Company.username}</td>
                                                                <td>{Company.firstname}</td>
                                                                <td>{Company.lastname}</td>
                                                                <td>{Company.email}</td>
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