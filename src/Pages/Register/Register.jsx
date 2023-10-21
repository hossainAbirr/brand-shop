import { useContext } from "react";
import { AuthContext } from "../../ProvidersForBrandShop/AuthProvider";
import { useState } from "react";
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { FcGoogle } from "react-icons/fc";
import { AiFillGithub } from "react-icons/ai";
const Register = () => {
    const { createUser, googleLogIn, githubLogIn, logOut } = useContext(AuthContext);
    const [registrationError, setError] = useState(null);
    const navigate = useNavigate();
    const [show, setShow] = useState(false);

    const handleRegisterSubmit = e => {
        e.preventDefault();

        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        setError('');
        if (password.length < 6) {
            return setError("Password should be at least 6 characters (auth/weak-password).")
        }
        if (!/.*[A-Z].*/.test(password)) {
            return setError('Password must contain a capital letter')
        }
        if (!/^(?![\W_]*$)/.test(password)) {
            return setError('Password must contain a special character')
        }
        createUser(email, password)
            .then(result => {
                console.log(result, 'Registration Successfull');
                if (result.user) {
                    logOut()
                    navigate('/login')
                }
                if (result.user) {
                    Swal.fire(
                        'Congratulation!',
                        'Registration Successfull, Please Log In!',
                        'success'
                    )
                }
                const user = { email, password, name }

                fetch('https://brand-shop-server-b8-a10.vercel.app/users', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(user)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data, 'Posted Successfully');
                    })
            })
            .catch(error => {
                console.error(error.message);
            })
    };

    const handleGoogleLogIn = () => {
        return googleLogIn()
            .then(result => {
                console.log(result.user);
                if (result.user) {
                    navigate('/')
                }
                if (result.user) {
                    Swal.fire(
                        'Congratulation!',
                        'Registration Successfull by Google!',
                        'success'
                    )
                }
            })
            .catch(error => {
                console.error(error.message);
                console.error(error.code);
            })
    };

    const handleGithubLogIn = () => {
        return githubLogIn()
            .then(result => {
                console.log(result);
                if (result.user) {
                    Swal.fire(
                        'Congratulation!',
                        'Registration Successfull by GitHub!',
                        'success'
                    )
                    navigate('/')
                }
            })
            .catch(error => {
                console.error(error.message);
                console.error(error.code);
            })
    };



    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <h3 className="text-4xl font-semibold">Registration Now!</h3>
                    <form onSubmit={handleRegisterSubmit} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="name" name="name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" name="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control relative">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>

                            <input type={show ? "text" : "password"} placeholder="password" name="password" className="input input-bordered relative" required />

                            <button onClick={() => setShow(!show)} className="absolute right-2 top-12 btn btn-ghost btn-xs normal-case">{show ? 'Hidden' : "Show"}</button>
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <p>Already have an account? Please <Link className={`font-bold text-blue-800 underline`} to={`/login`}>Login</Link></p>

                        <div className="mt-3 flex justify-center gap-5">
                            <button onClick={handleGoogleLogIn} className="text-4xl"> <FcGoogle></FcGoogle> </button>
                            <button onClick={handleGithubLogIn} className="text-4xl"> <AiFillGithub></AiFillGithub> </button>
                        </div>
                        <div className="form-control mt-3">
                            <button className="btn btn-primary text-white">Registration</button>
                        </div>
                        {registrationError && <p className="text-red-600">{registrationError}</p>

                        }
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;