import React, { useState } from 'react';

const AddTask = () => {

    const [taskName, setTaskName] = useState('')
    const [description, setDescription] = useState('')


    const handleAddTask = event => {

        event.preventDefault();
        const addTask = { taskName, description }

        fetch(`http://localhost:5000/tasks`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(addTask)
        })
            .then(res => res.json())
            .then(result => {

                alert('Product Added Successfully')
                
            })

    }

    return (
        <div className='flex justify-center items-center my-12'>
            <div class="card flex-shrink-0 w-full max-w-sm shadow  border-2">
                <div class="card-body">
                    <form onSubmit={handleAddTask}>
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Task Name</span>
                            </label>
                            <input onBlur={(e) => setTaskName(e.target.value)} type="name" placeholder="" class="input input-bordered" />
                        </div>
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Description</span>
                            </label>
                            <textarea onBlur={(e) => setDescription(e.target.value)} type="text" placeholder="" class="input input-bordered" />

                        </div>
                        <div class="form-control mt-6">
                            <button class="btn rounded-full px-10">ADD TASK</button>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddTask;