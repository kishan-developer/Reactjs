import React, { useState } from 'react';

const TaskList = ({tasks}) => {

    return (
        <ul>
            {tasks.map(task => (
                <li key={task.id}>
                    <Task task={task} />
                </li>
            ))}
        </ul>
    );
}

// create a Task component
// pass the task with tasklist component sent the task and acess here task 
function Task({task}){

    // i wont to click edit button text convert to input value i am able  to change the value
    // and click the save button input value connvet to text 

    // i want to use useState  and set the initial value is false 

    const [isEditing, setisEditing] = useState(false);
    let taskContent;

//    here  initial value is false or true 
    if(isEditing){ // isEditing is fales then go to else part
        // isEditin is true then go intite the taskContent return some jsx
        taskContent = (
            <>
                <input value={task.text} /> 
                {/* onclick set the setisEditing is  false here  */}
                <button onClick={()=> setisEditing(false)}>Save</button>
            </>
        )
       
    }else{ // isEditing is false then execute else part 
        // isEditing is true other wise  u r not able to access the else part
        taskContent = (
            <>
                {task.text}
                {/* onclick set the setisEditing is  true here */}
                <button onClick={()=> setisEditing(true)} >Edit</button>
            </>
        )
    }

    return (
        <label>
            <input type='checkbox'
            checked={task.done} 
            />

            {taskContent}

            <button>Delete</button>
        </label>
    )
}

export default TaskList;
