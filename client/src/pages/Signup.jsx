import { CiUser } from "react-icons/ci";
import { BiShow, BiHide } from "react-icons/bi";
import { useState } from "react";
import { Link } from "react-router-dom";

function Signup() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  console.log(data)

  const handleShowPassword = () => {
    setShowPassword((prevState) => !prevState);
  };

  const handleShowConfirmPassword = () => {
    setShowConfirmPassword((prevState) => !prevState);
  };

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setData((preve) => {
      return {
        ...preve,
        [name]: value,
      };
    });
  };

  const handleSubmit = (e) =>  {
    e.preventDefault()
  }

  return (
    <div className="p-3 md:p-4">
      <div className="w-full max-w-sm bg-white m-auto flex flex-col p-4 ">
        <div className="w-20 overflow-hidden rounded-full drop-shadow-md shadow-md m-auto flex justify-center">
          <CiUser className="text-7xl"/>
        </div>

        <form className="w-full py-3 flex flex-col" onSubmit={handleSubmit}>
          <label htmlFor="firsName" >First name: </label>
          <input 
            type="text" 
            id="firstName" 
            name="firstName"
            className="w-full bg-slate-200 px-2 py-1 rounded mt-1 mb-2 outline-none"
            value={data.firstName}
            onChange={handleOnChange}
          />

          <label htmlFor="lastName" >Last name: </label>
          <input 
            type="text" 
            id="lastName" 
            name="lastName"
            className="w-full bg-slate-200 px-2 py-1 rounded mt-1 mb-2 outline-none"
            value={data.lastName}
            onChange={handleOnChange}
          />

          <label htmlFor="email">Email: </label>
          <input 
            type="email" 
            name="email" 
            id="email"
            className="w-full bg-slate-200 px-2 py-1 rounded mt-1 mb-2 outline-none"
            value={data.email}
            onChange={handleOnChange}
          />

          <label htmlFor="confirmPassword">Password: </label>
          <div className="flex px-2 py-1 bg-slate-200 rounded mt-1 mb-2 outline-none">
            <input 
              type={showPassword ? "text" : "password"}
              name="confirmPassword" 
              id="confirmPassword" 
              className="w-full bg-slate-200 border-none outline-none"
              value={data.password}
              onChange={handleOnChange}
            />
            <span 
              className="flex text-xl cursor-pointer" 
              onClick={handleShowPassword}
            >
            {showPassword ? <BiShow /> : <BiHide />}
            </span>
          </div>

          <label htmlFor="password">Confirm Password: </label>
          <div className="flex px-2 py-1 bg-slate-200 rounded mt-1 mb-2 outline-none">
            <input 
              type={showConfirmPassword ? "text" : "password"}
              name="password" 
              id="password" 
              className="w-full bg-slate-200 border-none outline-none"
              value={data.confirmPassword}
              onChange={handleOnChange}
            />
            <span 
              className="flex text-xl cursor-pointer" 
              onClick={handleShowConfirmPassword}
            >
            {showConfirmPassword ? <BiShow /> : <BiHide />}
            </span>
          </div>
          
          <button 
            type="submit"
            className="max-w-[120px] w-full bg-slate-500 hover:bg-slate-600 cursor-pointer m-auto text-white
            text-xl font-medium text-center py-1 rounded-full mt-4"
          >
            Sign up
          </button>
        </form>

        <p 
          className="text-left text-sm mt-2"
        >
          Already have account ? <Link to={"login"} className="text-blue-500 underline">Login</Link>
        </p>
      </div>
    </div>
  )
}

export default Signup