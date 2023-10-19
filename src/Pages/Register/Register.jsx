import { useContext } from "react";
import { AuthContext } from "../../ProvidersForBrandShop/AuthProvider";
import { useState } from "react";
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Register = () => {
    const { createUser } = useContext(AuthContext);
    const [registrationError, setError] = useState(null);
    const handleRegisterSubmit = e => {
        e.preventDefault();

        const form = e.target;
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
        if (/^(?![\W_]*$)/.test(password)) {
            return setError('Password must contain a special character')
        }
        createUser(email, password)
            .then(result => {
                console.log(result, 'Registration Successfull');

                const user = { email, password }

                fetch('http://localhost:5500/users', {
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

    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <h3 className="text-4xl font-semibold">Registration Now!</h3>
                    <form onSubmit={handleRegisterSubmit} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" name="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" name="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <p>Already have an account? Please <NavLink className={`font-bold text-blue-800 underline`} to={`login`}>Login</NavLink></p>

                        <div className="form-control mt-6">
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