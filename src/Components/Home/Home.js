import React from 'react';
import AddTask from '../AddTask/AddTask';
import AllTask from '../AllTask/AllTask';

const Home = () => {

    return (
        <div>
           <AllTask></AllTask>
           <AddTask></AddTask>
        </div>
    );
};

export default Home;