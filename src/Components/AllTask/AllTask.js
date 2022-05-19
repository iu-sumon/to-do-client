import React, { useEffect, useState } from 'react';
import TaskManage from './TaskManage';

const AllTask = () => {

    const [tasks, setTasks] = useState([])

    useEffect(() => {

        fetch('http://localhost:5000/tasks')
            .then(res => res.json())
            .then(data => setTasks(data))

    }, [])


    const handleDeleteTask = id => {

        const proceed = window.confirm('Are you sure?')

        if (proceed) {
            const url = `http://localhost:5000/taskDetails/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {

                    const remaining = tasks.filter(t => t._id !== id)
                    setTasks(remaining)
                    alert('Deleted Successfully!')
                })
        }

    }

    return (
        <div>
            <h2 className='text-xl py-5 font-bold'>Total Tasks: {tasks.length}</h2>

            <div class="overflow-x-auto">

                <table class="table w-full">

                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Task Name</th>
                            <th>Description</th>
                            <th>Task Complete</th>
                            <th>Action</th>

                        </tr>
                    </thead>

                    <tbody>
                        {
                            tasks.map((t, index) => <TaskManage
                                t={t}
                                index={index}
                                handleDeleteTask={handleDeleteTask}


                            ></TaskManage>)
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllTask;