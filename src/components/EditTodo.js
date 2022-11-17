import React, { useEffect, useState } from "react";
import axios from 'axios';
import { useNavigate, useParams } from "react-router-dom";


// in react-router-dom v6 .params and .history has been changed to
// useParams and useNavigate (React Hooks)


export const EditTodo = () => {

    const initialState = {
        todo_description: "",
        todo_responsible: "", 
        todo_priority: "", 
        todo_completed: false
    }

    // Grabs the id from the current url
    const { id } = useParams();

    let navigate = useNavigate();

    // useState to handle values in form
    const [values, setState] = useState(initialState);

    // keep track of user input 
    const handleChange = (e) => {
        const {name, value} = e.target;
        setState((prevState) => ({...prevState, [name]: value }));
    };

    const handleComplete = (e) => {
        
        setState({
                todo_description: values.todo_description,
                todo_responsible: values.todo_responsible,
                todo_priority: values.todo_priority,
                todo_completed: !values.todo_completed
        });
    }

    // On component mount
    useEffect(() => {
        axios.get(`http://localhost:4000/todos/${id}`)
            .then(response => {
                setState({
                    todo_description: response.data.todo_description,
                    todo_responsible: response.data.todo_responsible,
                    todo_priority: response.data.todo_priority,
                    todo_completed: response.data.todo_completed
                });
            })
            .catch(err => console.log(err));
    }, [id]);

    const onSubmit = (e) => {
        e.preventDefault();

        const obj = {
            todo_description: values.todo_description,
            todo_responsible: values.todo_responsible,
            todo_priority: values.todo_priority,
            todo_completed: values.todo_completed
        };
        console.log(obj);
        axios.post(`http://localhost:4000/todos/update/${id}`,obj)
            .then(res => console.log(res.data))

        setTimeout(()=> {
            navigate('/');
        }, 500);
        
    };



    return(
        <div>
            <h3 align="center">Edit Todo</h3>
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <label>Description: </label>
                    <input
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
                    <div className="form-check form-check-inline">
                        <input
                            className="form-check-input"
                            type="radio"
                            name="todo_priority"
                            id="priorityLow"
                            value="Low"
                            checked={values.todo_priority === 'Low'}
                            onChange={handleChange}
                        />
                        <label>Low</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input
                            className="form-check-input"
                            type="radio"
                            name="todo_priority"
                            id="priorityMedium"
                            value="Medium"
                            checked={values.todo_priority === 'Medium'}
                            onChange={handleChange}
                        />
                        <label>Medium</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input
                            className="form-check-input"
                            type="radio"
                            name="todo_priority"
                            id="priorityHigh"
                            value="High"
                            checked={values.todo_priority === 'High'}
                            onChange={handleChange}
                        />
                        <label>High</label>
                    </div>
                </div>
                <div className="form-check">
                    <input
                        className="form-check-input"
                        id="completedCheckbox"
                        type="checkbox"
                        name="todo_completed"
                        onChange={handleComplete}
                        checked={values.todo_completed}
                        value={values.todo_completed}
                    />
                    <label className="form-check-label" htmlFor="completedCheckbox">Completed</label>
                </div>
                <br/>
                <div className="form-group">
                    <input type="submit" value="Update Todo" className="btn btn-primary"/>
                </div>
            </form>
        </div>
    )
};

