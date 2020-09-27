import React, { useState } from 'react'
import './Task.css';
import { Checkbox } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';


function Task({ data , deleteTask}) {
    const time = data.date;
    return (
        <div className='task'>
            <Checkbox/>
            <p>{data.value}</p>
            <p>{time.getHours()} : {time.getMinutes()} : {time.getSeconds()}</p>
            <CloseIcon  onClick={() => deleteTask(data.value)}/>
        </div>
    )
}

export default Task
