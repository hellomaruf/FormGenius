function Login() {
  return (
    <div className="">
      <div className="grid grid-cols-2 items-center">
        <div
          data-aos="fade-right"
          data-aos-duration="1000"
          className="col-span-1 flex justify-center p-16"
        >
          <img className="" src="res.png" alt="" />
        </div>
        <div data-aos="fade-left" data-aos-duration="900" className="">
          <div className="mx-28 space-y-2">
            <h2 className="font-bold text-3xl ">Login to your Account</h2>
            <p>Welcome back select mathod to Login</p>
          </div>
          <div className=" mx-28 mt-4 space-x-4">
            <button className="btn">
              Google <img className="w-4" src="google.png" alt="" />
            </button>
            <button className="btn">
              Github <img className="w-4" src="github.png" alt="" />
            </button>
          </div>
          <form
            data-aos="fade-left"
            data-aos-duration="1000"
            className=" col-span-1 max-w-xl mt-2 mx-28"
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
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
