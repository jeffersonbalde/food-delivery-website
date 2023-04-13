// import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { CiUser } from "react-icons/ci"
import { CiShoppingCart } from "react-icons/ci"
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logoutRedux } from "../redux/userSlice";
import toast from "react-hot-toast";

function Header() {
  const [showMenu, setShowMenu] = useState(false);
  
  const userData = useSelector((state) => state.user)
  console.log(userData)
  const dispatch = useDispatch()
  
  const handleShowMenu = () => {
    setShowMenu(prevState => !prevState)
  }

  const handleLogout = () => {
    dispatch(logoutRedux())
    toast("Logout successfully")
  }

  return (
    <header className="fixed w-full h-16 shadow-md px-2 md:px-4 z-50 bg-white">
        {/* desktop version */}
        <div className="flex items-center h-full justify-between">

          <Link to={""}>
            <div className="h-12 flex items-center md:text-lg font-serif">
              <h1>Jeff</h1>
            </div>
          </Link>

          <div className="flex items-center gap-4 md:gap-7 font-serif ">
            <nav className="flex gap-4 md:gap-6 text-base md:text-lg">
              <Link to={""} className="hover:text-slate-700">Home</Link>
              <Link to={"menu"} className="hover:text-slate-700">Menu</Link>
              <Link to={"about"} className="hover:text-slate-700">About</Link>
              <Link to={"contact"} className="hover:text-slate-700">Contact</Link>
            </nav>
            <div className="text-2xl relative cursor-pointer">
              <CiShoppingCart />
              <div className="absolute -top-1 -right-1 text-white bg-black h-4 w-4  rounded-full m-0 p-0 text-sm text-center">0</div>
            </div>
            <div className="text-2xl" onClick={handleShowMenu}>
              <div className="cursor-pointer w-7 h-7 rounded-full overflow-hidden drop-shadow-md">
                {userData.image ? <img src={userData.image} alt="user" className="h-full w-full"/> : <CiUser />}
              </div>
              {showMenu && (
                <div className="absolute right-2 bg-white py-2 px-2 shadow drop-shadow-md text-base flex flex-col">
                  <Link to={"newproduct"} className="whitespace-nowrap cursor-pointer px-2">New product</Link>
                  {userData.image ? <p className="cursor-pointer text-white bg-slate-800 px-2" onClick={handleLogout}>Logout</p> : <Link to={"login"} className="whitespace-nowrap cursor-pointer px-2">Login</Link> }
                </div>
              )}
            </div>
          </div>

        </div>
        
        {/* mobile version */}
    </header>
  )
}

export default Header