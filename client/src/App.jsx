import { Outlet } from "react-router-dom";
import Header from "./components/Header";

export default function App() {
  return (
    <div>
      <Header />
      <main className="pt-16 min-h-[calc(100vh)] bg-slate-100">
        <Outlet />
      </main>
    </div>
  )
}