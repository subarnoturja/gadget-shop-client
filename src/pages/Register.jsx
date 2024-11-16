import React, { useContext } from "react";
import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { useForm } from "react-hook-form";

const Register = () => {
  const {createUser} = useAuth();
  const {
    register, 
    handleSubmit, 
    watch, 
    formState: {errors},
  } = useForm()

  const onSubmit = (data) => {
    const { email, password } = data;
    
    createUser(email, password)
    .then(result => {
      console.log(result.user);
    })
  }
  
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Register now!</h1>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            {/* Form Tag */}
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input input-bordered"
                {...register("email", { required: true })}
              />
              {errors.email && <p className="text-red-500 text-sm font-light">Email is required</p>}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="input input-bordered"
                {...register("password", {
                  required: true,
                  minLength: 6,
                })}
              />
              {errors.password?. type === "required" && (<p className="text-red-500 text-sm font-light">Password is required</p>)}
              {errors.password?. type === "minLength" && (<p className="text-red-500 text-sm font-light">Password must have 6 characters</p>)}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Confirm Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="input input-bordered"
                {...register("confirmPassword", {
                  required: true,
                  validate: (value) => {
                    if(watch('password') != value){
                      return "your password do not match";
                    }
                  }
                })}
              />
              {errors.confirmPassword && (<p className="text-red-500 text-sm font-light">Both passwords should match</p>)}
            </div>
            <div className="form-control mt-6">
              <button type="submit" className="btn btn-primary">Register</button>
            </div>
            <p className="my-4 text-sm font-light">
                Already have an account?{" "} 
                <Link to='/login' className="text-primary">Login</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
