import React from 'react';
// import AddToList from "./AddToList"

class Todo extends React.Component{
    constructor(props){
        super(props)
        this.state={
            todos:[],
            newTodo: '',
            tableHeading : ['Serial','Todo List','','','','']
        }
    }
    handleChange(e){
        const val = e.target.value;
        this.setState({newTodo: val});
        
        
    }
    handleClick(e){
        e.preventDefault();
        const todos = [...this.state.todos,this.state.newTodo];
        this.setState({todos,newTodo:''}); 

    }
    handleClick2(ind){
        this.setState({
        todos: [...this.state.todos.slice(0,ind),...this.state.todos.slice(ind+1)]
        
    })
}
    // handleClick3(ind){
    //     // const editText = prompt({todos})
    //     this.setState({
    //         todos:target.value=prompt("jjjjj")
            
    //     })
    // }

    render(){
        return(
            <div>
                <div className="Main-Div">
                    <h1>ToDo App</h1>
                    <div className="from-Div">
                    <input type="text" onChange={this.handleChange.bind(this)} value={this.state.newTodo} className="form-control input-text"/>
                    <button onClick={this.handleClick.bind(this)} className="btn btn-warning flt-right">Add to list</button>
                    </div>
                    <hr/>
                    <p>Table Contains List Of ToDos</p>
                    <table className="table table-hover">
                        <tbody>
                            
                                {/*<TableList detail={this.state.tableHeading.map(head =><th> head </th>)} />*/}
                                <tr key>{this.state.tableHeading.map((head,ind) =><th key={'th'+ind}> {head} </th>)}</tr>
                               {this.state.todos.map((todo,ind) =><tr key={ind}>
                                <td>{ind+1}</td>
                                <td>{todo}</td>
                               <td><button className="btn btn-danger" onClick={this.handleClick2.bind(this,ind)}>Delete</button></td>
                               {/*<td><button className="btn btn-primary" >Edit</button></td>*/}
                               {/*<td><input type="checkbox"/></td>*/}
                               <td key={'Done'+ind}></td>
                               {/*{console.log('Done'+ind)}*/}
                               </tr>)}


                            
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}


export default Todo;

//edit ka code

{/*<td contentEditable onBlur={e=> {
                                    console.log(e.target.innerText
                                    )
                                    let text = e.target.value
                                    this.setState((f) => (
                                        {todos:[f.todos.slice(0,ind),text,f.todos.slice(ind+1)]}
                                    )
                                    )    
                                }}>{todo}</td>*/}