
import React, { useState } from "react";

function TodoForm() {
      const [todo, setTodo] = useState('');
      console.log(todo)

      const handleSubmit = (e) => {
            e.preventDefault()

            if(todo) {
                  //logic to add the todo
                  addTodo(todo);
                  setTodo("")

            }
      }
      return(
            <form  className="todo-form" onSubmit={handleSubmit}>
                  <input type="text" onChange={(e) => console.log(e.target.value)} />
                  <button type="submit" className="btn-add">Add Todo</button>
            </form>
      )
}