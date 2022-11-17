import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import axios from 'axios';

import "../styles/TodoList.css"

const Todo = props => (
    <tr>
        <td className={props.todo.todo_completed ? 'completed' : ''}>{props.todo.todo_description}</td>
        <td className={props.todo.todo_completed ? 'completed' : ''}>{props.todo.todo_responsible}</td>
        <td className={props.todo.todo_completed ? 'completed' : ''}>{props.todo.todo_priority}</td>
        <td>
            <Link to={"/edit/"+props.todo._id}>Edit</Link>
        </td>
    </tr>
)

export const TodoList = () => {
    const [todosObj, setState] = useState({todos: []});

    const todoList = () => {
        return todosObj.todos.map((currentTodo, i)=> {
            return <Todo todo={currentTodo} key={i}/>
        })
    }

    useEffect(() => {
        axios.get('http://localhost:4000/todos/')
            .then(response => {
                setState({todos: response.data}); 
            })
            .catch(error => console.log(error));
    },[]);

    return(
        <div className="container">
            <div className="table-responsive">
                <div className="jumbotron jumbotron-fluid">
                    <h3 className="display-4">Todos List</h3>
                    <p className="lead">Welcome to your todo list dashboard</p>
                </div>
                <table className="table table-hover" style={{marginTop: 20}}>
                    <thead>
                        <tr>
                            <th>Description</th>
                            <th>Responsible</th>
                            <th>Priority</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {todoList()}
                    </tbody>
                </table>
            </div>
        </div>
    );


};

// export default class TodoList extends Component {
//     constructor(props){
//         super(props)
//         this.state = {todos: []};
//     }

//     componentDidMount(){
//         axios.get('http://localhost:4000/todos/')
//             .then(response => {
//                 this.setState({todos: response.data});
//             })
//             .catch(function(error){
//                 console.log(error);
//             });
//     }

//     todoList() {
//         return this.state.todos.map((currentTodo, i) => {
//             return <Todo todo={currentTodo} key={i}/>
//         });
//     }


//     render() {
//         return(
            // <div>
            //     <h3>Todos List</h3>
            //     <table className="table table-striped" style={{marginTop: 20}}>
            //         <thead>
            //             <tr>
            //                 <th>Description</th>
            //                 <th>Responsible</th>
            //                 <th>Priority</th>
            //                 <th>Action</th>
            //             </tr>
            //         </thead>
            //         <tbody>
            //             {this.todoList()}
            //         </tbody>
            //     </table>
            // </div>
//         )
//     }
// }