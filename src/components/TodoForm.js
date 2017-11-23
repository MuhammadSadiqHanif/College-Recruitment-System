import React from 'react';

const TodoForm = (props) =>{
    return  (
        <div>
            <h1>Todo Form</h1>
            <form onSubmit={props.addStudent}>
                <input type="text" value={props.currentStudent}
                onChange={props.updateStudent}
                />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}
export default TodoForm