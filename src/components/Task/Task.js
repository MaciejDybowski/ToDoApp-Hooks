import React from 'react'
import './Task.css';
import { Checkbox } from '@material-ui/core';

function Task({data}) {
    return (
        <div className='task'>
            <Checkbox/>
            <p>{data.value}</p>
            <p>{data.date}</p>
        </div>
    )
}

export default Task
