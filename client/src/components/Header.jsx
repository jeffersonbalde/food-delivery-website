import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="fixed shadow-md w-full h-16 px-2 md:px-4">
        {/* desktop version */}
        <div className="flex items-center h-full">
          <Link to={""}>
            <div className="h-12">
              <img src={logo} alt="logo" className="h-full "/>
            </div>
          </Link>
        </div>
        
        {/* mobile version */}
    </header>
  )
}

export default Header