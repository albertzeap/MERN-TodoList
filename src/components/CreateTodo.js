import React, { useState } from "react";
import axios from 'axios';
// import { useForm } from "../hooks/useForm";


export const CreateTodo = () =>{

    // Initial state for todo item
    const initialState = {
        todo_description: "",
        todo_responsible: "", 
        todo_priority: "", 
        todo_completed: false
    }

    // Uses custom hook useForm to handle forms
    // const [values, handleChange] = useForm(initialState);

    // useState to handle values in form
    const [values, setState] = useState(initialState);

    // reset the state back to initial value
    const clearState = () => {
        setState({...initialState});
    };

    // keep track of user input 
    const handleChange = (e) => {
        const {name, value} = e.target;
        setState((prevState) => ({...prevState, [name]: value }));
    };


    // Saves the response to an object that is pushed to our backend
    const submit = (e) => {
        e.preventDefault();

        // Create object to post to MongoDB
        const newTodo = {
            todo_description: values.todo_description,
            todo_responsible: values.todo_responsible,
            todo_priority: values.todo_priority,
            todo_completed: false
        };

        console.log(newTodo);

        axios.post('http://localhost:4000/todos/create', newTodo)
            .then(res => console.log(res.data));

        clearState();

        console.log("submit");
    }

    return(
        <div style={{marginTop: 10}}>
        <h3>Create New Todo</h3>
        <form onSubmit={submit}>
            <div className="form-group">
                <label>Description: </label>
                <input required
                    name="todo_description"
                    type="text"
                    className="form-control"
                    value={values.todo_description}
                    onChange={handleChange}
                />
            </div>
            <div className="form-group">
                <label>Responsible: </label>
                <input
                    name="todo_responsible"
                    type="text"
                    className="form-control"
                    value={values.todo_responsible}
                    onChange={handleChange}
                />
            </div>
            <div className="form-group">
                <input 
                    name="todo_priority"
                    className="form-check form-check-inline"
                    type="radio"
                    id="priorityLow"
                    value="Low"
                    checked={values.todo_priority === "Low"}
                    onChange={handleChange}
                />
                <label className="form-check-label">Low</label>
            </div>
            <div className="form-group">
                <input 
                    name="todo_priority"
                    className="form-check form-check-inline"
                    type="radio"
                    id="priorityMedium"
                    value="Medium"
                    checked={values.todo_priority === "Medium"}
                    onChange={handleChange}
                />
                <label className="form-check-label">Medium</label>
            </div>
            <div className="form-group">
                <input 
                    name="todo_priority"
                    className="form-check form-check-inline"
                    type="radio"
                    id="priorityHigh"
                    value="High"
                    checked={values.todo_priority === "High"}
                    onChange={handleChange}
                />
                <label className="form-check-label">High</label>
            </div>
            <div className="form-group">
                <input type="submit" value="Create Todo" className="btn btn-primary"/>
            </div>
        </form>
    </div>
    );

}
