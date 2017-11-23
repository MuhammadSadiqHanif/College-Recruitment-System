import React from 'react'
import NavHeader from '../index.js'


class Navbar extends React.Component{

    render(){
        return(
            <div>
                <div className="header">
                    <NavHeader/>
                </div>
                <div>
                    <CompanyDeatail/>
                </div>



            </div>
        )
    }


}

class CompanyDeatail extends React.Component{
     constructor(props){
        super(props)


     }


    render(){
        return(
            <div>
                <div className="boxUI">
                    <div className="imgDivUI">
                    {/*<img src="../New folder/company.png" />*/}
                    <img src={require('../New folder/company.png')} 
                    style={{width: 150, height: 150}}
                    />
                    </div>
                    <div className="detailDivUI">
                        <div>
                            Persoal Info<br/>
                            {this.props.companys[0].name}
                            {/*{console.log(this.props)}*/}
                        </div>
                        
                        
                        <div>
                        <li><a>Post Job</a></li>
                        <li><a>Muy Post Jobs</a></li>
                        <li><a>Student</a></li>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

class Postjob extends React.Component{
    constructor(props){
        super(props)


    }
    render(){
        return(
            <div>
                <table>
                    <tr>
                        <td>{this.props.companys[1]}</td>    
                    </tr>    
                 </table> 
            </div>
        )
    }
}



export default Navbar