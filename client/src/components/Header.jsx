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
  const dispatch = useDispatch()
  
  const handleShowMenu = () => {
    setShowMenu(prevState => !prevState)
  }

  const handleLogout = () => {
    dispatch(logoutRedux())
    toast("Logout successfully")
  }

  const cartItemNumber = useSelector((state)=>state.product.cartItem)

  return (
    <header className="fixed w-full h-16 shadow-md px-2 md:px-4 z-50 bg-white">
        {/* desktop version */}
        <div className="flex items-center h-full justify-between">

          <Link to={""}>
            <div className="h-12 flex items-center md:text-lg font-bold font-sans">
              <h1 className="text-xl">Jeffer<span className="text-white bg-slate-800 ml-1 py-.1 px-1">shop</span></h1>
            </div>
          </Link>

          <div className="flex items-center gap-4 md:gap-7">
            <nav className=" gap-4 md:gap-6 text-base md:text-lg hidden md:flex">
              <Link to={""} className="hover:text-slate-700">Home</Link>
              <Link to={"menu/64380e5a3117eade68edec54"} className="hover:text-slate-700">Menu</Link>
              <Link to={"about"} className="hover:text-slate-700">About</Link>
              <Link to={"contact"} className="hover:text-slate-700">Contact</Link>
            </nav>
            <div className="text-2xl relative cursor-pointer">
              <Link to={"cart"}>
                <CiShoppingCart />
                <div className="absolute -top-1 -right-1 text-white bg-black h-4 w-4  rounded-full m-0 pb-.1  text-sm text-center flex justify-center items-center">{cartItemNumber.length  }</div>
              </Link>
            </div>
            <div className="text-2xl" onClick={handleShowMenu}>
              <div className="cursor-pointer w-7 h-7 rounded-full overflow-hidden drop-shadow-md">
                {userData.image ? <img src={userData.image} alt="user" className="h-full w-full"/> : <CiUser />}
              </div>
              {showMenu && (
                <div className="absolute right-2 bg-white py-2 px-2 shadow drop-shadow-md text-base flex flex-col min-w-[120px] text-center">
                  {userData.email === 'jeffersonbalde13@gmail.com' && <Link to={"newproduct"} className="whitespace-nowrap cursor-pointer px-2">New product</Link>}
                  {userData.image ? <p className="cursor-pointer text-white bg-slate-800 px-2" onClick={handleLogout}>Logout ({userData.firstName}) </p> : <Link to={"login"} className="whitespace-nowrap cursor-pointer px-2 py-2">Login </Link> }

                  <nav className="text-base md:text-lg flex flex-col md:hidden">
                    <Link to={""} className="hover:text-slate-700 px-2 py-2">Home</Link>
                    <Link to={"menu/64380e5a3117eade68edec54"} className="hover:text-slate-700 px-2 py-2">Menu</Link>
                    <Link to={"about"} className="hover:text-slate-700 px-2 py-2">About</Link>
                    <Link to={"contact"} className="hover:text-slate-700 px-2 py-2">Contact</Link>
                  </nav>
                  
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