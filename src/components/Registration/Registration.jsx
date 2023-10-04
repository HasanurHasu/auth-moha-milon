import { Link } from "react-router-dom";


const Registration = () => {
    const handleRegistration = e => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(name, email, password);
    }
    return (
        <div className="bg-base-200">
            <div className="hero max-w-6xl m-auto min-h-screen bg-base-200">
                <div className="hero-content flex-col ">
                    <div className="text-center w-2/4">
                        <h1 className="text-4xl font-bold">Registration Now</h1>
                        <p className="py-2">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error quas tenetur corrupti temporibus facilis saepe.</p>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleRegistration} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name="name" placeholder="Your Name"  required className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="Your Email"  required className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="Password" required className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-2">
                                <button className="btn btn-primary">Registration</button>
                            </div>
                        </form>
                        <p className="text-center -mt-4  mb-4">Already have an account? Please <Link className="text-blue-600" to='/login'>Login</Link> </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Registration;