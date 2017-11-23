import React from 'react'

const AddtoDoItem =(props) => {
    return(
        
        
         <li onClick={ () => {props.clickHandler(props.index)}} 
             className={props.detail.ban ? 'hide':'show'}>
                 
                {'These are props/Students '+ props.detail.name}
                <br/>
                {'Roll No is :'+props.detail.rollNo}
        </li>
        
         )
}

export default AddtoDoItem;