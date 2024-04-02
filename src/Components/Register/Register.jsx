function Register() {
  return (
    <div className="">
      <div className="grid grid-cols-2 items-center">
        <form className="card-body col-span-1 max-w-xl  mx-28">
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
        <div className="col-span-1 flex justify-center p-16">
          <img className="" src="res.png" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Register;
