import { useContext } from "react";
import { authContext } from "../../AuthProvider";
function Register() {
  const { createRegiterUser } = useContext(authContext);
  console.log(createRegiterUser);
  const handleRegisterSignIn = (e) => {
    e.preventDefault();
    console.log("hello");
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const confirmPassword = e.target.conPassword.value;
    createRegiterUser(email, password)
      .then((res) => console.log(res))
      .catch((error) => console.log(error));
  };

  return (
    <div className="">
      <div className="grid grid-cols-2 items-center">
        <form
          onSubmit={handleRegisterSignIn}
          data-aos="fade-right"
          data-aos-duration="1000"
          className="card-body col-span-1 max-w-xl  mx-28"
        >
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              required
              name="name"
              type="text"
              placeholder="Enter your Name"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              name="email"
              type="email"
              placeholder="Enter your Email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              name="password"
              type="password"
              placeholder="Enter your Password"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Confirm Password</span>
            </label>
            <input
              name="conPassword"
              type="password"
              placeholder="Enter your Comfirm Password"
              className="input input-bordered"
              required
            />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn bg-[#545DBF] hover:bg-[#4850a9] text-white">
              Register
            </button>
          </div>
        </form>
        <div
          data-aos="fade-left"
          data-aos-duration="1000"
          className="col-span-1 flex justify-center p-16"
        >
          <img className="" src="res.png" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Register;
