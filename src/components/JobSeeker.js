import React from 'react'
// import {Link} from 'react-router'
import NavLoginBar from './navbar.js'

import * as firebase from 'firebase'



// class JobSeeker extends React.Component {




//     render() {
//         return (
//             <div>
//                 <div className="header">
//                     {/*<NavHeader/>*/}
//                 </div>
                
//                 <ul className="nav nav-tabs liForActive">
//                     <li role="presentation" className="active"><Link to ="/Resume">JobSeeker</Link></li>
//                     <li role="presentation"><Link to ="/company" >Company</Link></li>
//                 </ul>
//                 <div className="">
                    
//                 </div>
//             </div>
//         )
//     }
// }


class HeadingResume extends React.Component{
    render(){
        return(
            <div>
                 <li id="cid_13" className="form-input-wide" data-type="control_head">
                                        <div >
                                            <h1 >
                                                Submit a Resume
                                            </h1>
                                        </div>
                                </li>
            </div>
        )
    }

}

class Resume extends React.Component{
    
     render(){
        return(
            <div>
                <HeadingResume/>
                <Resume2/>
            </div>
        )
    }
}


class Resume2 extends React.Component{
        
       constructor() {
        super();

        // var UserUid= firebase.auth().currentUser.email

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
    }

componentWillMount(){
    firebase.auth().onAuthStateChanged((user)=>{
        if(user){
        firebase.database().ref('User/'+firebase.auth().currentUser.uid).once('value').then((snap)=>{
            var uids = firebase.auth().currentUser.uid;
            var email=firebase.auth().currentUser.email;
            var firstname=snap.val().firstname;
            var lastname=snap.val().lastname;
            var type =snap.val().type;
            var username = snap.val().username;
            var fullname = snap.val().fullname;
            var addressLn1 =snap.val().addressLn1;
            var addressLn2 = snap.val().addressLn2;
            var city = snap.val().city;
            var stateProvince = snap.val().stateProvince;
            var zipCode = snap.val().zipCode;
            var country = snap.val().country;
            var areaCode = snap.val().areaCode;
            var phoneNo = snap.val().phoneNo;
            var areaOfInterest=snap.val().areaOfInterest;
            var skill = snap.val().skill;
            var coverletter = snap.val().coverletter;
            
        console.log(uids,email,firstname)

            this.refs.fullName.value=fullname
            this.refs.addressLn1.value=addressLn1
            this.refs.addressLn2.value=addressLn2
            this.refs.city.value=city
            this.refs.stateProvince.value=stateProvince;
            
            this.refs.zipCode.value=zipCode
            this.refs.country.value=country
            this.refs.areaCode.value=areaCode
            this.refs.phoneNo.value=phoneNo
            this.refs.areaOfInterest.value=areaOfInterest
            this.refs.skill.value=skill
            this.refs.coverletter.value=coverletter
            //form State
            // email:this.state.email,
            // firstname:this.state.firstname,
            // username:this.state.username,
            // type:this.state.type,
            // lastname:this.state.lastname
            

         this.setState({
             email,
             firstname,
             lastname,
             username,
             type,

         })})}
    })
        

    
}
       


            handelsubmit(ev){
                    ev.preventDefault();
                    console.log(this.state.email)
                    
                   
                    let objResume = {
               
                fullname:this.refs.fullName.value,
                addressLn1:this.refs.addressLn1.value,
                addressLn2:this.refs.addressLn2.value,
                city:this.refs.city.value,
                stateProvince:this.refs.stateProvince.value,
                
                zipCode:this.refs.zipCode.value,
                country:this.refs.country.value,
                areaCode:this.refs.areaCode.value,
                phoneNo:this.refs.phoneNo.value,
                areaOfInterest:this.refs.areaOfInterest.value,
                skill:this.refs.skill.value,
                coverletter:this.refs.coverletter.value,
                //form State
                email:this.state.email,
                firstname:this.state.firstname,
                username:this.state.username,
                type:this.state.type,
                lastname:this.state.lastname

                      
                    
                
                }
                    

                    firebase.database().ref("User").child(firebase.auth().currentUser.uid).set(objResume).then(()=>{
                        alert('posted');
                        // console.log("posted")
                    })
                    .catch((err)=>{
                        console.log(err)
                    })


            }






    render(){
        return(
            <div>
                {/*<JobSeeker/>*/}
                {/*{ console.log(uid)}*/}
                
              
                    <form className="jotform-form" onSubmit={this.handelsubmit.bind(this)}>
                       
                        <div className="form-all">
                            <ul className="form-section page-section">
                               
                               
                               

                                <li >
                                    <label className="form-label form-label-left form-label-auto" id="label_1">
                                        Full Name:
                                        <span className="form-required">
                                            *
                                        </span>
                                    </label>
                                    <div id="cid_1" className="form-input jf-required">
                                        <div data-wrapper-react="true">
                                            <span className="form-sub-label-container" >
                                                {/*//style="vertical-align:top;"*/}
                                                <input type="text" id="first_1" name="fullname"  className="form-textbox validate[required]" size="10" ref="fullName" data-component="first" required="" />
                                                
                                            </span>
                                            
                                        </div>
                                    </div>
                                </li>
                                <li className="form-line jf-required" data-type="control_address" id="id_3">
                                    <label className="form-label form-label-left form-label-auto" id="label_3" >
                                        Address:
                                            <span className="form-required">
                                            *
                                            </span>
                                    </label>
                                    <div id="cid_3" className="form-input jf-required">
                                        <table summary="" className="form-address-table" >
                                            <tbody>
                                                <tr>
                                                    <td > 
                                                        {/*colspan="2"*/}
                                                        <span className="form-sub-label-container"  >
                                                            <label className="form-sub-label" id="sublabel_3_addr_line1"  > Street Address </label>
                                                            <input type="text" id="input_3_addr_line1" name="q3_address[addr_line1]" className="form-textbox validate[required] form-address-line" ref="addressLn1" data-component="address_line_1" required="" />
                                                        </span>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td >
                                                        {/*colspan="2"*/}
                                                        <span className="form-sub-label-container"  >
                                                            <label className="form-sub-label"  id="sublabel_3_addr_line2"  > Street Address Line 2 </label>
                                                            <input type="text" id="input_3_addr_line2" name="q3_address[addr_line2]" className="form-textbox form-address-line" size="30" ref="addressLn2" data-component="address_line_2" required="" />
                                                        </span>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <span className="form-sub-label-container"  >
                                                            <label className="form-sub-label"  id="sublabel_3_city"  > City </label>
                                                            <input type="text" id="input_3_city" name="q3_address[city]" className="form-textbox validate[required] form-address-city" size="21" ref="city" data-component="city" required="" />
                                                        </span>
                                                    </td>
                                                    <td>
                                                            <label className="form-sub-label"  id="sublabel_3_state"  > State / Province </label>
                                                            <input type="text" id="input_3_state" name="q3_address[state]" className="form-textbox validate[required] form-address-state" size="22" ref="stateProvince" data-component="state" required="" />
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td width="50%">
                                                            <label className="form-sub-label"  id="sublabel_3_postal"  > Postal / Zip Code </label>
                                                            <input type="text" id="input_3_postal" name="q3_address[postal]" className="form-textbox validate[required] form-address-postal" size="10" ref="zipCode" data-component="zip" required="" />
                                                    </td>
                                                    <td>
                                                            <label className="form-sub-label"  id="sublabel_3_country"  > Country </label>
                                                            <select className="form-dropdown validate[required] form-address-country" name="q3_address[country]" id="input_3_country" ref="country" required="">
                                                                <option value=""> Please Select </option>
                                                                <option value="United States"> United States </option>
                                                                <option value="Afghanistan"> Afghanistan </option>
                                                                <option value="Albania"> Albania </option>
                                                                <option value="Algeria"> Algeria </option>
                                                                <option value="American Samoa"> American Samoa </option>
                                                                <option value="Andorra"> Andorra </option>
                                                                <option value="Angola"> Angola </option>
                                                                <option value="Anguilla"> Anguilla </option>
                                                                <option value="Antigua and Barbuda"> Antigua and Barbuda </option>
                                                                <option value="Argentina"> Argentina </option>
                                                                <option value="Armenia"> Armenia </option>
                                                                <option value="Aruba"> Aruba </option>
                                                                <option value="Australia"> Australia </option>
                                                                <option value="Austria"> Austria </option>
                                                                <option value="Azerbaijan"> Azerbaijan </option>
                                                                <option value="The Bahamas"> The Bahamas </option>
                                                                <option value="Bahrain"> Bahrain </option>
                                                                <option value="Bangladesh"> Bangladesh </option>
                                                                <option value="Barbados"> Barbados </option>
                                                                <option value="Belarus"> Belarus </option>
                                                                <option value="Belgium"> Belgium </option>
                                                                <option value="Belize"> Belize </option>
                                                                <option value="Benin"> Benin </option>
                                                                <option value="Bermuda"> Bermuda </option>
                                                                <option value="Bhutan"> Bhutan </option>
                                                                <option value="Bolivia"> Bolivia </option>
                                                                <option value="Bosnia and Herzegovina"> Bosnia and Herzegovina </option>
                                                                <option value="Botswana"> Botswana </option>
                                                                <option value="Brazil"> Brazil </option>
                                                                <option value="Brunei"> Brunei </option>
                                                                <option value="Bulgaria"> Bulgaria </option>
                                                                <option value="Burkina Faso"> Burkina Faso </option>
                                                                <option value="Burundi"> Burundi </option>
                                                                <option value="Cambodia"> Cambodia </option>
                                                                <option value="Cameroon"> Cameroon </option>
                                                                <option value="Canada"> Canada </option>
                                                                <option value="Cape Verde"> Cape Verde </option>
                                                                <option value="Cayman Islands"> Cayman Islands </option>
                                                                <option value="Central African Republic"> Central African Republic </option>
                                                                <option value="Chad"> Chad </option>
                                                                <option value="Chile"> Chile </option>
                                                                <option value="China"> China </option>
                                                                <option value="Christmas Island"> Christmas Island </option>
                                                                <option value="Cocos (Keeling) Islands"> Cocos (Keeling) Islands </option>
                                                                <option value="Colombia"> Colombia </option>
                                                                <option value="Comoros"> Comoros </option>
                                                                <option value="Congo"> Congo </option>
                                                                <option value="Cook Islands"> Cook Islands </option>
                                                                <option value="Costa Rica"> Costa Rica </option>
                                                                <option value="Cote d&#x27;Ivoire"> Cote d&#x27;Ivoire </option>
                                                                <option value="Croatia"> Croatia </option>
                                                                <option value="Cuba"> Cuba </option>
                                                                <option value="Cyprus"> Cyprus </option>
                                                                <option value="Czech Republic"> Czech Republic </option>
                                                                <option value="Democratic Republic of the Congo"> Democratic Republic of the Congo </option>
                                                                <option value="Denmark"> Denmark </option>
                                                                <option value="Djibouti"> Djibouti </option>
                                                                <option value="Dominica"> Dominica </option>
                                                                <option value="Dominican Republic"> Dominican Republic </option>
                                                                <option value="Ecuador"> Ecuador </option>
                                                                <option value="Egypt"> Egypt </option>
                                                                <option value="El Salvador"> El Salvador </option>
                                                                <option value="Equatorial Guinea"> Equatorial Guinea </option>
                                                                <option value="Eritrea"> Eritrea </option>
                                                                <option value="Estonia"> Estonia </option>
                                                                <option value="Ethiopia"> Ethiopia </option>
                                                                <option value="Falkland Islands"> Falkland Islands </option>
                                                                <option value="Faroe Islands"> Faroe Islands </option>
                                                                <option value="Fiji"> Fiji </option>
                                                                <option value="Finland"> Finland </option>
                                                                <option value="France"> France </option>
                                                                <option value="French Polynesia"> French Polynesia </option>
                                                                <option value="Gabon"> Gabon </option>
                                                                <option value="The Gambia"> The Gambia </option>
                                                                <option value="Georgia"> Georgia </option>
                                                                <option value="Germany"> Germany </option>
                                                                <option value="Ghana"> Ghana </option>
                                                                <option value="Gibraltar"> Gibraltar </option>
                                                                <option value="Greece"> Greece </option>
                                                                <option value="Greenland"> Greenland </option>
                                                                <option value="Grenada"> Grenada </option>
                                                                <option value="Guadeloupe"> Guadeloupe </option>
                                                                <option value="Guam"> Guam </option>
                                                                <option value="Guatemala"> Guatemala </option>
                                                                <option value="Guernsey"> Guernsey </option>
                                                                <option value="Guinea"> Guinea </option>
                                                                <option value="Guinea-Bissau"> Guinea-Bissau </option>
                                                                <option value="Guyana"> Guyana </option>
                                                                <option value="Haiti"> Haiti </option>
                                                                <option value="Honduras"> Honduras </option>
                                                                <option value="Hong Kong"> Hong Kong </option>
                                                                <option value="Hungary"> Hungary </option>
                                                                <option value="Iceland"> Iceland </option>
                                                                <option value="India"> India </option>
                                                                <option value="Indonesia"> Indonesia </option>
                                                                <option value="Iran"> Iran </option>
                                                                <option value="Iraq"> Iraq </option>
                                                                <option value="Ireland"> Ireland </option>
                                                                <option value="Israel"> Israel </option>
                                                                <option value="Italy"> Italy </option>
                                                                <option value="Jamaica"> Jamaica </option>
                                                                <option value="Japan"> Japan </option>
                                                                <option value="Jersey"> Jersey </option>
                                                                <option value="Jordan"> Jordan </option>
                                                                <option value="Kazakhstan"> Kazakhstan </option>
                                                                <option value="Kenya"> Kenya </option>
                                                                <option value="Kiribati"> Kiribati </option>
                                                                <option value="North Korea"> North Korea </option>
                                                                <option value="South Korea"> South Korea </option>
                                                                <option value="Kosovo"> Kosovo </option>
                                                                <option value="Kuwait"> Kuwait </option>
                                                                <option value="Kyrgyzstan"> Kyrgyzstan </option>
                                                                <option value="Laos"> Laos </option>
                                                                <option value="Latvia"> Latvia </option>
                                                                <option value="Lebanon"> Lebanon </option>
                                                                <option value="Lesotho"> Lesotho </option>
                                                                <option value="Liberia"> Liberia </option>
                                                                <option value="Libya"> Libya </option>
                                                                <option value="Liechtenstein"> Liechtenstein </option>
                                                                <option value="Lithuania"> Lithuania </option>
                                                                <option value="Luxembourg"> Luxembourg </option>
                                                                <option value="Macau"> Macau </option>
                                                                <option value="Macedonia"> Macedonia </option>
                                                                <option value="Madagascar"> Madagascar </option>
                                                                <option value="Malawi"> Malawi </option>
                                                                <option value="Malaysia"> Malaysia </option>
                                                                <option value="Maldives"> Maldives </option>
                                                                <option value="Mali"> Mali </option>
                                                                <option value="Malta"> Malta </option>
                                                                <option value="Marshall Islands"> Marshall Islands </option>
                                                                <option value="Martinique"> Martinique </option>
                                                                <option value="Mauritania"> Mauritania </option>
                                                                <option value="Mauritius"> Mauritius </option>
                                                                <option value="Mayotte"> Mayotte </option>
                                                                <option value="Mexico"> Mexico </option>
                                                                <option value="Micronesia"> Micronesia </option>
                                                                <option value="Moldova"> Moldova </option>
                                                                <option value="Monaco"> Monaco </option>
                                                                <option value="Mongolia"> Mongolia </option>
                                                                <option value="Montenegro"> Montenegro </option>
                                                                <option value="Montserrat"> Montserrat </option>
                                                                <option value="Morocco"> Morocco </option>
                                                                <option value="Mozambique"> Mozambique </option>
                                                                <option value="Myanmar"> Myanmar </option>
                                                                <option value="Nagorno-Karabakh"> Nagorno-Karabakh </option>
                                                                <option value="Namibia"> Namibia </option>
                                                                <option value="Nauru"> Nauru </option>
                                                                <option value="Nepal"> Nepal </option>
                                                                <option value="Netherlands"> Netherlands </option>
                                                                <option value="Netherlands Antilles"> Netherlands Antilles </option>
                                                                <option value="New Caledonia"> New Caledonia </option>
                                                                <option value="New Zealand"> New Zealand </option>
                                                                <option value="Nicaragua"> Nicaragua </option>
                                                                <option value="Niger"> Niger </option>
                                                                <option value="Nigeria"> Nigeria </option>
                                                                <option value="Niue"> Niue </option>
                                                                <option value="Norfolk Island"> Norfolk Island </option>
                                                                <option value="Turkish Republic of Northern Cyprus"> Turkish Republic of Northern Cyprus </option>
                                                                <option value="Northern Mariana"> Northern Mariana </option>
                                                                <option value="Norway"> Norway </option>
                                                                <option value="Oman"> Oman </option>
                                                                <option value="Pakistan"> Pakistan </option>
                                                                <option value="Palau"> Palau </option>
                                                                <option value="Palestine"> Palestine </option>
                                                                <option value="Panama"> Panama </option>
                                                                <option value="Papua New Guinea"> Papua New Guinea </option>
                                                                <option value="Paraguay"> Paraguay </option>
                                                                <option value="Peru"> Peru </option>
                                                                <option value="Philippines"> Philippines </option>
                                                                <option value="Pitcairn Islands"> Pitcairn Islands </option>
                                                                <option value="Poland"> Poland </option>
                                                                <option value="Portugal"> Portugal </option>
                                                                <option value="Puerto Rico"> Puerto Rico </option>
                                                                <option value="Qatar"> Qatar </option>
                                                                <option value="Republic of the Congo"> Republic of the Congo </option>
                                                                <option value="Romania"> Romania </option>
                                                                <option value="Russia"> Russia </option>
                                                                <option value="Rwanda"> Rwanda </option>
                                                                <option value="Saint Barthelemy"> Saint Barthelemy </option>
                                                                <option value="Saint Helena"> Saint Helena </option>
                                                                <option value="Saint Kitts and Nevis"> Saint Kitts and Nevis </option>
                                                                <option value="Saint Lucia"> Saint Lucia </option>
                                                                <option value="Saint Martin"> Saint Martin </option>
                                                                <option value="Saint Pierre and Miquelon"> Saint Pierre and Miquelon </option>
                                                                <option value="Saint Vincent and the Grenadines"> Saint Vincent and the Grenadines </option>
                                                                <option value="Samoa"> Samoa </option>
                                                                <option value="San Marino"> San Marino </option>
                                                                <option value="Sao Tome and Principe"> Sao Tome and Principe </option>
                                                                <option value="Saudi Arabia"> Saudi Arabia </option>
                                                                <option value="Senegal"> Senegal </option>
                                                                <option value="Serbia"> Serbia </option>
                                                                <option value="Seychelles"> Seychelles </option>
                                                                <option value="Sierra Leone"> Sierra Leone </option>
                                                                <option value="Singapore"> Singapore </option>
                                                                <option value="Slovakia"> Slovakia </option>
                                                                <option value="Slovenia"> Slovenia </option>
                                                                <option value="Solomon Islands"> Solomon Islands </option>
                                                                <option value="Somalia"> Somalia </option>
                                                                <option value="Somaliland"> Somaliland </option>
                                                                <option value="South Africa"> South Africa </option>
                                                                <option value="South Ossetia"> South Ossetia </option>
                                                                <option value="South Sudan"> South Sudan </option>
                                                                <option value="Spain"> Spain </option>
                                                                <option value="Sri Lanka"> Sri Lanka </option>
                                                                <option value="Sudan"> Sudan </option>
                                                                <option value="Suriname"> Suriname </option>
                                                                <option value="Svalbard"> Svalbard </option>
                                                                <option value="Swaziland"> Swaziland </option>
                                                                <option value="Sweden"> Sweden </option>
                                                                <option value="Switzerland"> Switzerland </option>
                                                                <option value="Syria"> Syria </option>
                                                                <option value="Taiwan"> Taiwan </option>
                                                                <option value="Tajikistan"> Tajikistan </option>
                                                                <option value="Tanzania"> Tanzania </option>
                                                                <option value="Thailand"> Thailand </option>
                                                                <option value="Timor-Leste"> Timor-Leste </option>
                                                                <option value="Togo"> Togo </option>
                                                                <option value="Tokelau"> Tokelau </option>
                                                                <option value="Tonga"> Tonga </option>
                                                                <option value="Transnistria Pridnestrovie"> Transnistria Pridnestrovie </option>
                                                                <option value="Trinidad and Tobago"> Trinidad and Tobago </option>
                                                                <option value="Tristan da Cunha"> Tristan da Cunha </option>
                                                                <option value="Tunisia"> Tunisia </option>
                                                                <option value="Turkey"> Turkey </option>
                                                                <option value="Turkmenistan"> Turkmenistan </option>
                                                                <option value="Turks and Caicos Islands"> Turks and Caicos Islands </option>
                                                                <option value="Tuvalu"> Tuvalu </option>
                                                                <option value="Uganda"> Uganda </option>
                                                                <option value="Ukraine"> Ukraine </option>
                                                                <option value="United Arab Emirates"> United Arab Emirates </option>
                                                                <option value="United Kingdom"> United Kingdom </option>
                                                                <option value="Uruguay"> Uruguay </option>
                                                                <option value="Uzbekistan"> Uzbekistan </option>
                                                                <option value="Vanuatu"> Vanuatu </option>
                                                                <option value="Vatican City"> Vatican City </option>
                                                                <option value="Venezuela"> Venezuela </option>
                                                                <option value="Vietnam"> Vietnam </option>
                                                                <option value="British Virgin Islands"> British Virgin Islands </option>
                                                                <option value="Isle of Man"> Isle of Man </option>
                                                                <option value="US Virgin Islands"> US Virgin Islands </option>
                                                                <option value="Wallis and Futuna"> Wallis and Futuna </option>
                                                            
                                                                <option value="Western Sahara"> Western Sahara </option>
                                                                <option value="Yemen"> Yemen </option>
                                                                <option value="Zambia"> Zambia </option>
                                                                <option value="Zimbabwe"> Zimbabwe </option>
                                                                <option value="other"> Other </option>
                                                            </select>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </li>
                                <li className="form-line jf-required" data-type="control_phone" id="id_9">
                                    <label className="form-label form-label-left form-label-auto" id="label_9" >
                                        Phone:
                                        <span className="form-required">
                                            *
                                         </span>
                                    </label>
                                    <div id="cid_9" className="form-input jf-required">
                                        <div data-wrapper-react="true">
                                            <span className="form-sub-label-container"  ><br/>
                                                <label className="form-sub-label" id="sublabel_area"  > Area Code </label>
                                                <input type="tel" id="input_9_area" name="q9_phone[area]" className="form-textbox validate[required]" size="3" ref="areaCode" data-component="areaCode" required="" />
                                            </span>
                                            <span className="form-sub-label-container"  >
                                                <label className="form-sub-label"  id="sublabel_phone"  > Phone Number </label>
                                                <input type="tel" id="input_9_phone" name="q9_phone[phone]" className="form-textbox validate[required]" size="8" ref="phoneNo" data-component="phone" required="" />
                                            </span>
                                        </div>
                                    </div>
                                </li>
                                <li className="form-line jf-required" data-type="control_email" id="id_4">
                                </li>
                                <li className="form-line" data-type="control_checkbox" id="id_6">
                                    <label className="form-label form-label-left form-label-auto" id="label_6" > Areas Of Interest: </label>
                                    <div id="cid_6" className="form-input jf-required">
                                        <div>
                                        <select className="form-dropdown validate[required]" id="input_5" ref="skill" name="q5_skillLevel" ref="areaOfInterest"  data-component="dropdown" required="">
                                           
                                            <option  value="Performance Coach"> Performance Coach </option>
                                            <option value="Account Manager"> Account Manager </option>
                                            <option  value="Administrative"> Administrative </option>
                                            <option  value="Human Resources"> Human Resources </option>
                                            <option  value="Sale"> Sale </option>
                                            
                                        </select>
                                        </div>
                                    </div>
                                </li>
                                <li className="form-line jf-required" data-type="control_dropdown" id="id_5">
                                    <label className="form-label form-label-left form-label-auto" id="label_5" >
                                        Skill Level:
                                         <span className="form-required">
                                            *
                                         </span>
                                    </label>
                                    <div id="cid_5" className="form-input jf-required">
                                        <select className="form-dropdown validate[required]" id="input_5" ref="skill" name="q5_skillLevel"  data-component="dropdown" required="">
                                           
                                            <option  value="College Graduate"> College Graduate </option>
                                            <option value="Career Changer"> Career Changer </option>
                                            <option  value="Inexperienced"> Inexperienced </option>
                                            <option  value="Experienced"> Experienced </option>
                                        </select>
                                    </div>
                                </li>
                                <li className="form-line" data-type="control_textarea" id="id_7">
                                    <label className="form-label form-label-left form-label-auto" id="label_7" > Cover Letter: </label>
                                    <div id="cid_7" className="form-input jf-required">
                                        <textarea id="input_7" className="form-textarea" name="q7_coverLetter" cols="40" ref="coverletter" rows="6" data-component="textarea"></textarea>
                                    </div>
                                </li>
                                {/*<li className="form-line" data-type="control_fileupload" id="id_12">
                                    <label className="form-label form-label-left form-label-auto" id="label_12" > Resume </label>
                                    <div id="cid_12" className="form-input jf-required">
                                        <input type="file" id="input_12" name="q12_resume" className="form-upload" data-imagevalidate="yes" data-file-accept="pdf, doc, docx, xls, csv, txt, rtf, html, zip, mp3, wma, mpg, flv, avi, jpg, jpeg, png, gif" data-file-maxsize="10240" data-file-minsize="0" data-file-limit="0" data-component="fileupload" />
                                    </div>
                                </li>*/}
                                <li className="form-line" data-type="control_button" id="id_11">
                                    <div id="cid_11" className="form-input-wide">
                                        <div  className="form-buttons-wrapper">
                                            <input id="input_11" type="submit" className="form-submit-button form-submit-button-light" />
                                        </div>
                                    </div>
                                </li>
                                {/*<li >
                                    Should be Empty:
                                <input type="text" name="website" value="" />
                                </li>*/}
                            </ul>
                        </div>
                    </form>
            </div>
        )
    }
}


export  {Resume,Resume2}

