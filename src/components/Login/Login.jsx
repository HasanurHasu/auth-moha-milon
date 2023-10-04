import { Link } from "react-router-dom";


const Login = () => {
    const handleLogin = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);
    }
    return (
        <div className="bg-base-200">
            <div className="hero max-w-6xl m-auto min-h-screen bg-base-200">
                <div className="hero-content flex-col ">
                    <div className="text-center w-2/4">
                        <h1 className="text-4xl font-bold">Login now!</h1>
                        <p className="py-6">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error quas tenetur corrupti temporibus facilis saepe.</p>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleLogin} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email"  required className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" required className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                        </form>
                        <p className="text-center mb-4">New to Auth Moha Milon? Please <Link className="text-blue-600" to='/registration'>Registration</Link> </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;