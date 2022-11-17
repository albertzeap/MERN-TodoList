# MERN Stack Todo List Project
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## My Personal Changes
As I was working on this project, I ran into several errors regarding *react-router-dom*. As it turns out, the tutorial was created before the release of *v6*. Therefore, I was required to refactor the code to meet these new changes. Some of the errors that I ran into included the following:
- *match.params* had been updated into a hook known as useParams
- *.history.push* had been updated into a hook known as useNavigate
- Hooks could not be called in class components

As I finished the tutorial I realized that there were still certain parts of the program that did not function as intended due to updated dependencies. As a result I decided to refactor the whole application. The current tutorial uses features of React such as class components and I wanted to refactor the application so that it did not have to rely on class components. 

As a result, I refactored the application using functional components and instead of keeping the state within class components, I utilized hooks to manage state. This overall resulted in a smoother experience as hooks are becoming the common practice versus class components. 

## About Project 
This project utilizing the MERN stack to create a basic web application that can perform CRUD operations
The early stages of this project were developed with the help of the following tutorial
[The Mern Stack Tutorial](https://medium.com/codingthesmartway-com-blog/the-mern-stack-tutorial-building-a-react-crud-application-from-start-to-finish-part-1-d8d701c2995).

### Frontend
This tutorial utilizes class components and relies heavily on state management within the class components
The three class components that are used are TodoList.js, EditTodo.js, and CreateTodo.js. One can assume what these components are responsible for based on their names.

### Backend
This tutorial utilizes both Node.js and MongoDB to create a reliable backend in which to connect to the frontend and perform CRUD operations
Node.js is used to create a server on which the database can be stored and accessed on. This also allows the frontend to connect to the backend via fetches. MongoDB is then used to store the structure of the Todo object 
