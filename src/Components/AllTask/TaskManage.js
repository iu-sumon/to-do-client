import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';

const TaskManage = ({ index, t, handleDeleteTask }) => {

    const [line, setLine] = useState(false);
    return (
        <tr>

            <th>{index + 1}</th>
            <td className={line && 'line-through'}>{t.taskName}</td>
            <td className={line && 'line-through'}>{t.description.slice(0,10)}</td>

            <td><button onClick={() => {
                setLine(!line)
                toast('Task Successfully completed')
            }} class="btn btn-xs">Complete</button></td>

            <td><button onClick={() => handleDeleteTask(t._id)} class="btn btn-error btn-xs">Delete</button></td>
            <ToastContainer></ToastContainer>
        </tr>
    );
};

export default TaskManage;