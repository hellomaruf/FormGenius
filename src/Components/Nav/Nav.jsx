import { NavLink } from "react-router-dom";

function Nav() {
  return (
    <div data-aos="fade-down" className="max-w-7xl mx-auto ">
      <div className="navbar bg-base-100 ">
        <div className="flex-1">
          <a className=" text-3xl font-bold">
            Form<span className="text-[#545DBF] font-normal">Genius</span>
          </a>
        </div>
        <div className=" flex gap-6">
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
      </div>
    </div>
  );
}

export default Nav;
