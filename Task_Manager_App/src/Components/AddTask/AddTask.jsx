import React, { useState } from 'react';

const AddTask = () => {
    const [text , setText] = useState('');

    return (
        <>
            <input 
                placeholder='Add task'
                value={text}
                onChange={e=> setText(e.target.value)}
            />
            <button  onClick={()=>{
                // after onclick set the  setText value is empty
                setText('')
            }}>Add</button>
        </>
    );
}

export default AddTask;
