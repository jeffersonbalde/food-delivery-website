import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import toast, { Toaster } from 'react-hot-toast';
import { useEffect } from "react";
import { setDataProduct } from "./redux/productSlice";
import { useDispatch, useSelector } from "react-redux";
import Footer from "./components/Footer";

export default function App() {
  const dispatch = useDispatch()
  const productData = useSelector((state) => state.product)

  // useEffect(() => {
  //   (async () => {
  //     const res = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/product`)
  //     const resData = await res.json()
  //     dispatch(setDataProduct(resData))
  //   })()
  // }, [])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`${import.meta.env.VITE_API_BASE_URL}/product`);
        const resData = await res.json();
        dispatch(setDataProduct(resData));
      } catch (error) {
        toast.error('Unable to fetch product data');
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <Toaster />
      <div>
        <Header />
        <main className="pt-16 bg-slate-100 min-h-[calc(100vh)]">
          <Outlet />
        </main>

        <footer>
          <Footer />
        </footer>
      </div>
    </>
  )
}