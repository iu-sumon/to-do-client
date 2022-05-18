import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';
const Login = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate()
    let location = useLocation();
    let from = location.state?.from?.pathname || "/";
    if (loading) {

        return <Loading></Loading>
    }

    let getError;

    if (error) {

        getError = <p>{error?.message}</p>
    }
    if (getError) {

        toast(getError)
    }
    if (user) {

        navigate(from, { replace: true });
    }

    return (
        <div className='flex justify-center items-center py-5 h-screen'>
            <div class="card w-96 bg-base-100 shadow border-2">
                <figure class="px-10 pt-10">
                    <img src="https://media.istockphoto.com/photos/to-do-list-text-on-notepad-picture-id1285308242?b=1&k=20&m=1285308242&s=170667a&w=0&h=K-UO77yYEQAKjRNLhgXADlyRIqrPkB8sC-4mKcyMgC4=" alt="Shoes" class="rounded-xl" />
                </figure>
                <div class="card-body items-center text-center">
                    <h2 class="card-title">Please Login</h2>
                     
                    <div class="card-actions mt-5">
                        <button onClick={() => signInWithGoogle()}  class="btn btn-outline rounded-full px-10">CONTINUE WITH GOOGLE</button>
                    </div>
                </div>
            </div>
             
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Login;