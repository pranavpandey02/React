import TodoIte from "./Todoitem"; 

const TodoItems = ({item})=>
{
return(
<>
<div className="itemcontainer">
    {item.map((items)=>
    {
        <TodoIte todoDate={items.name} todoName={items.date}></TodoIte>
    })}
        
      </div>
</>
)
}
export default TodoItems;