
function HomeCard({ name, image, category, price }) {
  return (
    <div className="bg-white shadow-md p-2 rounded">
        <div className="w-40 min-h-[150px]">
            <img src={image} alt="foods" className="h-full w-full"/>
        </div>
        <h3 className="font-semibold text-slate-600 text-center capitalize text-lg">{name}</h3>
        <div className="text-center text-slate-500 font-medium">{category}</div>
        <div className="text-center font-medium"> <span className="text-blue-900">₱</span><span>{price}</span></div>
    </div>
  )
}

export default HomeCard