import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AddtoDoItem from './components/AddTodo.js'
import TodoForm from './components/TodoForm.js'




class TodoList extends React.Component{
    constructor() {
        super();
        this.changeStatus=this.changeStatus.bind(this);
        this.updateStudent=this.updateStudent.bind(this);
        this.addstudent=this.addstudent.bind(this);
        
        this.state = {
            Student:[{
                name:"Abdullah",
                rollNo:1,
                age:'16',
                class:'9',
                Subject:['Maths',"English","Urdu","Physics",'Statistics'],
                totalmarks:500,
                ban:false
            },
            {
                name:"Samad",
                rollNo:2,
                age:'17',
                class:'9',
                Subject:['Maths',"English","Urdu","Physics",'Statistics'],
                totalmarks:500,
                ban:false
            },
            {
                name:"Abdul Waris",
                rollNo:3,
                age:'16',
                class:'9',
                Subject:['Maths',"English","Urdu","Physics",'Statistics'],
                totalmarks:500,
                ban:false
            },
            {
                name:"Sadiq",
                rollNo:4,
                age:'16',
                class:'9',
                Subject:['Maths',"English","Urdu","Physics",'Statistics'],
                totalmarks:500,
                ban:false
            },

            ],
            currentStudent:''
        }
    }

    changeStatus(index){
        var students = this.state.Student;
        var student = students[index];
        student.ban = !student.ban;
        this.setState({
            students : students
        })
            // console.log(this.state.Student);
    }
    updateStudent(newVal){
        this.setState({
            currentStudent:newVal.target.value
        })

    }
    addstudent(evt){
        evt.preventDefault();
        let Students = this.state.Student;
        let currentStudent = this.state.currentStudent;
            Students.push({
                name:currentStudent,
                rollNo:1,
                age:'16',
                class:'9',
                Subject:['Maths',"English","Urdu","Physics",'Statistics'],
                totalmarks:500,
                ban:false
            })

    }

    render(){
        return(
            <section>
                <TodoForm 
                    currentStudent={this.state.currentStudent}
                    updateStudent ={this.updateStudent}
                    addstudent ={this.addstudent}
                    
                />
                <ul>
                    {this.state.Student.map((e,index) =>
                    <AddtoDoItem key={e.rollNo} clickHandler={this.changeStatus} index={index} detail={e} />
                    )}
                    
                </ul>
            </section>
        )
    }
}



ReactDOM.render(<TodoList />,document.getElementById('root'))
