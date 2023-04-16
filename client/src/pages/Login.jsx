import { CiUser } from "react-icons/ci";
import { BiShow, BiHide } from "react-icons/bi";
import { useState } from "react";
import { Link } from "react-router-dom";
import toast from 'react-hot-toast';
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginRedux } from "../redux/userSlice";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);

  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const userData = useSelector(state => state)

  const dispatch = useDispatch()

  const handleShowPassword = () => {
    setShowPassword((prevState) => !prevState);
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

  const handleSubmit = async (e) =>  {
    e.preventDefault()
    const {email, password} = data;
    if (email && password) {
      const fetchData = await fetch(`${import.meta.env.VITE_API_BASE_URL}/login`, {
        method: "POST",
        headers: {
          "content-type" : "application/json" 
        },
        body: JSON.stringify(data)
      })

      const dataRes = await fetchData.json()
      console.log(dataRes )
      toast(dataRes.message)

      if(dataRes.alert) {
        dispatch(loginRedux(dataRes))
        setTimeout(() => {
          navigate("/")
        }, 1000)
      }
      
    }else {
      alert("require")
    }
  }
  return (
    <div className="p-3 md:p-4">
      <div className="w-full max-w-sm bg-white m-auto flex flex-col p-4 ">
        <div className="w-20 overflow-hidden rounded-full drop-shadow-md shadow-md m-auto">
          <CiUser className="text-7xl w-full"/>
        </div>

        <form className="w-full py-3 flex flex-col" onSubmit={handleSubmit}>
          <label htmlFor="email">Email: </label>
          <input 
            type="email" 
            name="email" 
            id="email"
            className="w-full bg-slate-200 px-2 py-1 rounded mt-1 mb-2 outline-none"
            value={data.email}
            onChange={handleOnChange}
          />

          <label htmlFor="password">Password: </label>
          <div className="flex px-2 py-1 bg-slate-200 rounded mt-1 mb-2 outline-none">
            <input 
              type={showPassword ? "text" : "password"}
              name="password" 
              id="password" 
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

          <button 
            type="submit"
            className="max-w-[120px] w-full bg-slate-500 hover:bg-slate-600 cursor-pointer m-auto text-white
            text-xl font-medium text-center py-1 rounded-full mt-4"
          >
            Login
          </button>
        </form>

        <p 
          className="text-left text-sm mt-2"
        >
          Don't have account ? <Link to={"/signup"} className="text-blue-500 underline">Sign Up</Link>
        </p>
      </div>
    </div>
  )
}
