import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import toast, { Toaster } from 'react-hot-toast';
import { useEffect } from "react";
import { setDataProduct } from "./redux/productSlice";
import { useDispatch, useSelector } from "react-redux";

export default function App() {
  const dispatch = useDispatch()
  const productData = useSelector((state) => state.product)

  useEffect(() => {
    (async () => {
      const res = await fetch("http://localhost:8080/product")
      const resData = await res.json()
      console.log(resData)
      dispatch(setDataProduct(resData))
    })()
  }, [])

  console.log(productData)

  return (
    <>
      <Toaster />
      <Header />
      <main className="pt-16 min-h-[calc(100vh)] bg-slate-100">
        <Outlet />
      </main>
    </>
  )
}