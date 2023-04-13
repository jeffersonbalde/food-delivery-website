import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import toast, { Toaster } from 'react-hot-toast';

export default function App() {
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