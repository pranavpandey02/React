import AddTodo from "./componets/Addtodo";
import AppName from "./componets/AppName";
import TodoItem from "./componets/Todoitem1";
import TodoIte from "./componets/Todoitem";
import TodoItem2 from "./componets/Todoitem2";
import "./app.css";

function App() {
  return (
    <center className="todo-contentinor">
    <AppName></AppName>
    <AddTodo></AddTodo>
    <div className="itemcontainer">
    <TodoItem></TodoItem>
    <TodoItem2></TodoItem2>
    </div>
    </center>
  );
}
export default App;
