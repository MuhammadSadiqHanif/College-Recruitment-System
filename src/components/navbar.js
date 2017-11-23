import * as React from "react";
import { Link} from "react-router"
import * as firebase from 'firebase'


    

    class NavLoginBar extends React.Component{
        constructor(){
            super();

            this.state={
                loginType : ''
            }
        
            this.loginState=this.loginState.bind(this);
            this.logoutState=this.loginState.bind(this);
            
        }
            

            handleLogout=(ev)=>{
                firebase.auth().signOut();


            }
            
                    componentWillMount(){


                            firebase.auth().onAuthStateChanged(firebaseUser=>{
                            if(firebaseUser){
                                console.log(firebaseUser)
                                 this.setState({
                                    loginType : "Logged In"
                                })

                            }else{
                                console.log("not logged in");
                                this.setState({
                                    loginType : "Logged Out"
                                })
                            }
                            

                        })
                }   

                loginState(){
                    this.setState({
                        loginType : "Logged In"
                    })

                }
                logoutState(){
                    this.setState({
                        loginType : "Logged Out"
                    })
                    
                }

      
    
            
    

        render(){
            

        

            return (
                <div className="navbar-wrapper">
                        <div className="">
                            <nav className="navbar navbar-inverse navbar-static-top">
                                <div className="flex">
                                    <div className="navbar-header">
                                        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false"
                                            aria-controls="navbar">
                                            <span className="sr-only">Toggle navigation</span>
                                            <span className="icon-bar"></span>
                                            <span className="icon-bar"></span>
                                            <span className="icon-bar"></span>
                                        </button>
                                        <a className="navbar-brand" >Online Recruitment System</a>
                                    </div>

                                    <div id="navbar" className="navbar-collapse collapse">
                                        <ul className="nav navbar-nav">
                                            {this.state.loginType==="Logged Out"?
                                            <li><Link to="/"> Login </Link> </li>
                                            :""
                                            }
                                             {this.state.loginType==="Logged In"?
                                            <li onClick={(ev)=>{firebase.auth().signOut()}}><Link to ="/">Logout</Link> </li>
                                            : ""                                   
                                                
                                            }
                                            {/*<li onClick={(ev)=>{firebase.auth().signOut()}}><Link to ="/">Logout</Link> </li>*/}
                                            
                                            <li ><Link to="/SignupComponent"> Signup </Link></li>
                                        </ul>
                                    </div>
                            </div>
                        </nav>
                                    {/*<div id="alertBox" className="alertDiv">
                                        <div id="alertMsg" className="alert alert-success" role="alert">Welcome Muhammad Sadiq</div>

                                    </div>    */}

                    </div>
                </div>
            )
        }
        
}


export default NavLoginBar