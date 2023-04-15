import { Link } from "react-router-dom"
import { addCartItem } from "../redux/productSlice"
import { useDispatch } from "react-redux"

function CardFeature({image, name, price, category, loading, id}) {
  const dispatch = useDispatch()

  const handleAddCartProduct = (e) => {
    dispatch(addCartItem({
      _id : id,
      name : name,
      price : price,
      category : category,
      image : image
    }))
  };


  return (
    <div className='w-full min-w-[200px] max-w-[200px] bg-white hover:shadow-lg drop-shadow-lg py-5 px-4 cursor-pointer flex flex-col'>
      {image ? 
        <>
          <Link to={`/menu/${id}`} onClick={() => window.scrollTo({top: "0", behavior: "smooth"})}>
            <div className="h-28 flex flex-col justify-center items-center">
                <img src={image} alt="vegetables" className='h-full'/>
            </div>
            <h3 className="font-semibold text-slate-600 capitalize text-lg mt-4 whitespace-nowrap overflow-hidden">{name}</h3>
            <p className="text-slate-500 font-medium">{category}</p>
            <p className="font-medium"> <span className="text-blue-900">₱</span><span>{price}</span></p>
          </Link>
            <button 
              className='bg-slate-500 py-1 mt-2 rounded text-white hover:bg-slate-600 w-full' 
              onClick={handleAddCartProduct}
            >
            Add Cart
            </button>
        </>
        : <div className="min-h-[150px] flex justify-center items-center">
            <p>{loading}</p>
          </div>
        }
    </div>
  )
}

export default CardFeature