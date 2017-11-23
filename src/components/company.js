import React from 'react'
import {Link} from 'react-router'
import NavHeader from '../index.js'
// import {Resume,JobSeeker} from './JobSeeker.js'
import * as firebase from 'firebase'
import NavLoginBar from './navbar.js'
import {Router ,Route ,browserHistory } from 'react-router'




class Company extends React.Component{




    handelsubmit(ev){
        ev.preventDefault();
        let uids =firebase.auth().currentUser.uid
        let objCompany = {
            UserID:uids,
            companyname:this.refs.companyname.value,
            jobTitle:this.refs.jobTitle.value,
            salaryOffer:this.refs.salaryOffer.value,
            jobOffer:this.refs.jobOffer.value,
            jobDes:this.refs.jobDes.value
}
        firebase.database().ref("Job").push(objCompany).then(()=>{
            alert("Job Posted")
            browserHistory.push("/Userpanel")
        })
        .catch((err)=>{
            console.log(err)
        })


    }


    
  
    
    myfunc(ev){
        ev.preventDefault();
        this.setState({
            company:this.refs.companyname.value
        })
    }
    
    render(){
        return(
            <div>
                    <NavLoginBar/>
                <div className="containerCompany">
                    <form onSubmit={this.handelsubmit.bind(this)}><br/><br/>
                    <div className="form-group">
                        <label >Company Name:</label>
                        <input type="text" ref="companyname" className="form-control" id="CompanyName"/>
                    </div>
                    <div className="form-group">
                            <label >Job Title:</label>
                            <select className="form-control" ref="jobTitle" id="sel1">
                                <option>Account Manager</option>
                                <option>Administrative</option>
                                <option>Human Resources</option>
                                <option>Sales</option>
                            </select>
                    </div>
                     <div className="form-group">
                            <label >Salary Offer:</label>
                            <select className="form-control" ref="salaryOffer" id="sel1">
                                <option value="10000-20000">10000-20000 /Rs</option>
                                <option value="20000-30000">20000-30000 /Rs</option>
                                <option value="300000-40000">30000-40000 /Rs</option>
                                <option value="40000-50000">40000-50000 /Rs</option>
                            </select>
                    </div>
                    <div className="form-group">
                        <label >Job Offer</label>
                            <select className="form-control" ref="jobOffer" id="sel1">
                                <option value="PartTime">Part Time</option>
                                <option value="FullTime" >Full Time</option>
                                
                            </select>
                    </div>
                    <div className="form-group">
                        <label >Job Description:</label>
                        <input type="text" className="form-control" ref="jobDes" id="JobDes"/>
                    </div>
                    
                    <button type="submit" className="btn btn-default">Submit</button>
                    </form>
                    </div>
            </div>
            
        )
    }

}

export default Company