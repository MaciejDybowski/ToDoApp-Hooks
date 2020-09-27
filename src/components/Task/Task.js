import React, { forwardRef } from 'react'
import './Task.css';
import { Checkbox } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';


const Task = forwardRef(({ data, deleteTask, updateTask }, ref) => {
        const time = data.date;
        if (!data.checked) {
            return (
                <div ref={ref} className='task'>
                    <Checkbox checked={data.checked} onClick={() => updateTask(data.id)} />
                    <p>{data.id}</p>
                    <p>{data.value}</p>
                    <p>{time.getHours()} : {time.getMinutes()} : {time.getSeconds()}</p>
                    <CloseIcon onClick={() => deleteTask(data.value)} />
                </div>
            )
        } else {
            return (
                <div ref={ref} className='task'>
                    <Checkbox checked={data.checked} onClick={() => updateTask(data.id)} />
                    <p className='done'>{data.value}</p>
                    <p className='done'>{time.getHours()} : {time.getMinutes()} : {time.getSeconds()}</p>
                    <CloseIcon onClick={() => deleteTask(data.value)} />
                </div>
            )
        }
    }
)

export default Task
