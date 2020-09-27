import React, {useState} from 'react'
import './AddTask.css'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

function AddTask({tasks, addTask}) {
    const [inputValue, setInputValue] = useState("");

    const handleInput = (e) => {
        setInputValue(e);
    }

    const handleButton = () =>{
        let obj = {
            done : false,
            value: inputValue,
            date : new Date(),
        }

        addTask([obj,...tasks])
        setInputValue("");
    }

    return (
        <div className='addTask'>
            <TextField value ={inputValue} onChange={(e) => handleInput(e.currentTarget.value)}  id="standard-basic" label="Add some task to list" />
            <Button onClick={handleButton} variant="contained">Add task</Button>
        </div>
    )
}

export default AddTask
