import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';

const Navbar = () => {
    
    const [user] = useAuthState(auth)
    const logout = () => {
        signOut(auth);
        
    };
    return (
        <div class="navbar bg-lime-500 px-10">
            <div class="navbar-start">

                <Link to='/' class="btn btn-ghost normal-case text-xl">Todo App</Link>
            </div>

            <div class="navbar-end">

                {
                    user ? <Link  onClick={logout} to='/login' class="btn btn-outline rounded-full px-10">SignOut</Link>
                        :
                        <Link to='/login' class="btn btn-outline rounded-full px-10">Login</Link>
                }
            </div>
        </div>
    );
};

export default Navbar;