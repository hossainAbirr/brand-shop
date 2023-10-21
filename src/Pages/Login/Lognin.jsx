import { useContext } from "react";
import { AuthContext } from "../../ProvidersForBrandShop/AuthProvider";
import { useState } from "react";
import { Link } from 'react-router-dom';
import Swal from "sweetalert2";
import { useLocation } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { AiFillGithub } from "react-icons/ai";
const Lognin = () => {
    const { logIn, googleLogIn, githubLogIn } = useContext(AuthContext);
    const [registrationError, setError] = useState(null);
    const location = useLocation();
    console.log(location);
    const navigate = useNavigate();
    const [show, setShow] = useState(false);

    const handleLogInSubmit = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        setError('');
        logIn(email, password)
            .then(result => {
                console.log(result);

                if (result.user) {
                    navigate(location.state ? location.state : '/')
                }

            })
            .catch(error => {
                console.error(error.message);
                console.error(error.code);
                if (error) {
                    setError('Your password or email address is incorrect!')
                    Swal.fire(
                        'Oops!!',
                        `${registrationError}!`,
                        'error'
                    )
                }

            })

    }
    const handleGoogleLogIn = () => {
        return googleLogIn()
            .then(result => {
                console.log(result.user);
                if (result.user) {
                    navigate(location.state ? location.state : '/')
                }
                if (result.user) {
                    Swal.fire(
                        'Congratulation!',
                        'Successfully Logged In by Google!',
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
                        'Successfully Logged In by GitHub!',
                        'success'
                    )
                    navigate(location.state ? location.state : '/')
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
                    <h3 className="text-4xl font-semibold">Log In Now!</h3>
                    <form onSubmit={handleLogInSubmit} className="card-body">
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
                        <p>don&apos;t have an account? Please <Link className={`font-bold text-blue-800 underline`} to={`/register`}>Register</Link></p>
                        <div className="mt-3 flex justify-center gap-5">
                            <button onClick={handleGoogleLogIn} className="text-4xl"> <FcGoogle></FcGoogle> </button>
                            <button onClick={handleGithubLogIn} className="text-4xl"> <AiFillGithub></AiFillGithub> </button>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary text-white">Log In</button>
                        </div>
                        {registrationError && <p className="text-red-600">{registrationError}</p>

                        }
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Lognin;