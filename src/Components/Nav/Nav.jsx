import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { authContext } from "../../AuthProvider";

function Nav() {
  const { user, logOut } = useContext(authContext);
  console.log(user);
  return (
    <div data-aos="fade-down" className="max-w-7xl mx-auto py-3">
      <div className=" flex justify-between items-center">
        <div className="">
          <a className=" text-2xl md:text-3xl font-bold">
            Form<span className="text-[#545DBF] font-normal">Genius</span>
          </a>
        </div>
        <div className="flex gap-8">
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "text-[#545DBF] font-semibold"
                : "text-gray-800 font-semibold"
            }
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "text-[#545DBF] font-semibold"
                : "text-gray-800 font-semibold"
            }
            to="/login"
          >
            Login
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "text-[#545DBF] font-semibold"
                : "text-gray-800 font-semibold"
            }
            to="/register"
          >
            Regiser
          </NavLink>
        </div>
        <div className=" flex items-center gap-4">
          <span>{user?.email ? user?.email : user?.displayName}</span>
          {user ? (
            <button
              onClick={logOut}
              className="btn bg-[#545DBF] hover:bg-[#4850a9] text-white"
            >
              Sign Out
            </button>
          ) : (
            <Link
              to="/login"
              className="btn bg-[#545DBF] hover:bg-[#4850a9] text-white"
            >
              Sign In
            </Link>
          )}

          <div className="avatar">
            <div className="w-12 rounded-full">
              <img src={user?.photoURL ? user?.photoURL : "profile.webp"} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Nav;
