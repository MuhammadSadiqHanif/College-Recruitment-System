import React from 'react'
import ReactDOM from 'react-dom';

import Userpanel from './userpanel.js'
import NavLoginBar from './navbar.js'


import {Router ,Route ,browserHistory } from 'react-router'
import { Link} from "react-router"
import * as firebase from 'firebase'

// Applied User
export default class JobsView extends React.Component{

        componentWillMonut(){
            firebase.database().ref('Job').on('child_added')
        }



    render(){
        return(

        )
    }
           
}