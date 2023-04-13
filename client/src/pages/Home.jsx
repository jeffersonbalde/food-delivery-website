import { useSelector } from "react-redux"
import HomeCard from "../components/HomeCard"

function Home() {
  const productData = useSelector((state) => state.product)
  console.log(productData)
  const 

  return (
    <div className="p-4 md:p-6 mt-1">
      <div className="md:flex justify-center items-center flex-col gap-4 py-2">

        <div className="md:w-4/5">
          <div className="flex gap-3 bg-slate-300 w-36 px-2 items-center rounded-full m-auto">
            <p className="text-sm font-medium text-slate-700">Bike Delivery</p>
            <img 
              src="https://www.svgrepo.com/download/70289/bike.svg" 
              alt="bike delivery" 
              className="h-7"
            />
          </div>
          <h2 className="text-4xl md:text-7xl font-bold py-3">The Fasted Delivery in <span>Your Home</span></h2>
          <p className="py-3 text-base max-w-5xl m-auto text-center">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </p>
          {/* <div className="flex items-center justify-center">
            <button className="font-bold bg-slate-300 text-slate-700 px-4 py-2 rounded-md hover:bg-slate-400">Order Now</button>
          </div> */}
        </div>

        <div className="md:w-4/5 text-center">
          <HomeCard />
        </div>

      </div>
    </div>
  )
}

export default Home