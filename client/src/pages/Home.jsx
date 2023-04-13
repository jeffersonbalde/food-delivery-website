
function Home() {
  return (
    <div className="p-2 md:p-4">
      <div className="md:flex">

        <div className="md:w-1/2">
          <div className="flex gap-3 bg-slate-300 w-36 px-2 items-center rounded-full ">
            <p className="text-sm font-medium">Bike Delivery</p>
            <img 
              src="https://p7.hiclipart.com/preview/473/746/547/bicycle-computer-icons-cycling-bikes.jpg" 
              alt="bike delivery" 
              className="h-7"
            />
          </div>
          <h2 className="text-4xl font-bold">The Fasted Delivery in <span>Your Home</span></h2>
        </div>

        <div className="md:w-1/2">
          <div>Image1</div>
          <div>Image2</div>
          <div>Image3</div>
        </div>

      </div>
    </div>
  )
}

export default Home