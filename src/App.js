import React, { Component } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import TodoList from "./components/TodoList";
import EditTodo from "./components/EditTodo";

import logo from "./logo.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import { CreateTodo } from "./components/CreateTodo";

// class App extends Component {
//   render() {
//     return (
//       <Router>
//         <div className="container">
//           <nav className="navbar navbar-expand-lg navbar-light bg-light">
//             <a 
//               className="navbar-brand"
//               href="https://codingthesmartway.com" 
//               target="_blank" rel="noreferrer"
//             >
//               <img src={logo} width="30" height="30"
//                    alt="CodingTheSmartWay.com"
//               />
//             </a>
//             <Link to="/" className="navbar-brand">MERN Todo App</Link>
//             <div className="collapse navbar-collapse">
//               <ul className="navbar-nav mr-auto">
//                 <li className="navbar-item">
//                   <Link to="/" className="nav-link">Todos</Link>
//                 </li>
//                 <li className="navbar-item">
//                   <Link to="/create" className="nav-link">Create Todo</Link>
//                 </li>
//               </ul>
//             </div>
//           </nav>
//           <br/>
//           <Routes>
//             <Route path="/" exact element={<TodoList/>}/>
//             <Route path="/edit/:id" element={<EditTodo/>}/>
//             <Route path="/create" element={<CreateTodo/>}/>
//           </Routes>
//         </div>
//       </Router>
//     );
//   }
// }

const App = () => {
  return(
    <div>
      <CreateTodo/>
    </div>
  )
}

export default App;