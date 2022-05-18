import React, { useEffect, useState } from 'react';

const AllTask = () => {
    const [line, setLine] = useState(false);
    const [tasks, setTasks] = useState([])

    useEffect(() => {

        fetch('http://localhost:5000/tasks')
            .then(res => res.json())
            .then(data => setTasks(data))

    }, [])


    const handleDeleteProduct = id => {

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
                            <th></th>
                            <th>Task Name</th>
                            <th>Task Complete</th>
                            <th>Action</th>

                        </tr>
                    </thead>

                    <tbody>
                        {
                            tasks.map((t, index) => <tr>

                                <th>{index + 1}</th>
                                <td className={line && 'line-through'}>{t.taskName}</td>

                                <td><button onClick={() => setLine(!line)} class="btn btn-xs">Complete</button></td>
                                
                                <td><button onClick={() => handleDeleteProduct(t._id)} class="btn btn-error btn-xs">Delete</button></td>

                            </tr>)
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllTask;