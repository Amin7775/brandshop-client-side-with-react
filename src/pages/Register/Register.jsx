import { Link } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import { useContext } from "react";


const Register = () => {
  const {createUser,updateUser,googleRegister}= useContext(AuthContext)

  const handleRegister = e =>{
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photoUrl = form.photoUrl.value;
    const email = form.email.value;
    const password = form.password.value;

    console.log(name,photoUrl,email,password)

    if(password.length<6){
      console.log("less than 6")
      return
    }
    if(!/[A-Z]/.test(password)){
      console.log("capitl")
      return
    }
    if(!/[!@#$%^&*()_+{}\[\]:;<>,.?~\\]/.test(password)){
      console.log("NOT SP");
      return
    }

    createUser(email,password)
    .then(()=>{
      updateUser(name,photoUrl)
      .then(()=>{
        console.log("success");
      })
      .catch(error=>{
        console.log(error.message)
      })
    })
    .catch(error=> {
      console.log(error.message);
    })
  }

  const handleGoogleLogin=()=>{
    googleRegister()
    .then(()=>{
      
    })
  }

    return (
        <div className="min-h-screen bg-[#f1f3f6]">
      <div className="flex flex-col justify-center items-center h-full  ">
        <div className="hero bg-base-200 mt-16">
          <div className="hero-content flex-col w-full md:w-[80vw] lg:w-[40vw]">
            <div className="card flex-shrink-0 w-full shadow-2xl bg-base-100">
              <h1 className=" text-2xl md:text-3xl lg:text-4xl font-bold text-center mt-6 mb-4 md:px-5 lg:px-0">
                Register Your Account
              </h1>
              <hr className="w-full border-2" />
              <form onSubmit={handleRegister} className="card-body">
                {/* name */}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-xl">Name</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Name"
                    className="input input-bordered"
                    name="name"
                    required
                  />
                </div>
                {/* photo */}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-xl">Photo URL</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Photo URL"
                    className="input input-bordered"
                    name="photoUrl"
                  />
                </div>
                {/* email */}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-xl">Email</span>
                  </label>
                  <input
                    type="email"
                    placeholder="email"
                    className="input input-bordered"
                    name="email"
                    required
                  />
                </div>
                {/* password */}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-xl">Password</span>
                  </label>
                  <input
                    type="password"
                    placeholder="password"
                    className="input input-bordered"
                    name="password"
                    required
                  />
                </div>
                <div className="form-control mt-6">
                  <button className="btn btn-primary">Register</button>
                </div>
                <p className="text-center mt-2">
                  Register With Google?{" "}
                  <span onClick={handleGoogleLogin} className="text-blue-600 cursor-pointer font-medium">
                    Click Here
                  </span>
                </p>
                <p className="text-center mt-2">
                  Already have an account ?{" "}
                  <span className="text-blue-600 font-medium">
                    <Link to={"/login"}>Login</Link>
                  </span>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
};

export default Register;