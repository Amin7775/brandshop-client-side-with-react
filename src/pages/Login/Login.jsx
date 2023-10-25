import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import Swal from 'sweetalert2'




const Login = () => {

  const {loginUser,googleRegister} = useContext(AuthContext)
  const location = useLocation()
  const navigate = useNavigate()
  console.log("location", location , "navigate", navigate)

  const handleLogin = e => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    loginUser(email,password)
    .then(res=> {
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Login Success!',
        showConfirmButton: true,
      })
      .then(res=> 
        {
          if(res.isConfirmed == true){
            navigate(location?.state ? location.state : '/')
          }
        })
      
    })
    .catch(error=>{
      Swal.fire({
        title: 'Error!',
        text: `${error.message}`,
        icon: 'error',
        confirmButtonText: 'ok'
      });
    })

  }

  const handleGoogleLogin=()=>{
    googleRegister()
    .then(()=>{
      
    })
  }
  return (
    <div className="h-[80vh] bg-[#f1f3f6]">
      <div className="flex flex-col justify-center items-center h-full">
        <div className="hero bg-base-200">
          <div className="hero-content flex-col w-full md:w-[80vw] lg:w-[40vw]">
            <div className="card flex-shrink-0 w-full shadow-2xl bg-base-100">
              <h1 className=" text-2xl md:text-3xl lg:text-4xl font-bold text-center mt-6 mb-4 md:px-5 lg:px-0">
                Login to Your Account
              </h1>
              <hr className="w-full border-2" />
              <form onSubmit={handleLogin} className="card-body">
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
                  <button className="btn bg-blue-600 hover:bg-blue-500 text-white">Login</button>
                </div>
                <p className="text-center mt-2">
                  Sign In With Google?{" "}
                  <span onClick={handleGoogleLogin} className="text-blue-600 cursor-pointer font-medium">
                    Click Here
                  </span>
                </p>
                <p className="text-center">
                  Dont have an account ?{" "}
                  <span className="text-blue-600 font-medium">
                    <Link to={"/register"}>Register</Link>
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

export default Login;
