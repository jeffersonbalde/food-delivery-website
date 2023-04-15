import { TbPlus, TbMinus } from "react-icons/tb"
import { AiFillDelete } from "react-icons/ai";
import { deleteCartItem, increaseQty, decreaseQty } from "../redux/productSlice";
import { useDispatch } from "react-redux";

function CartProduct({id, name, image, category, qty, total, price}) {
    const dispatch = useDispatch()

    return (
        <div className="bg-slate-200 p-2 flex gap-4 rounded border border-slate-300">
            <div className='bg-white p-3 rounded overflow-hidden'>
                <img src={image} alt="foods" className='w-40 h-28 object-cover'/>
            </div>

            <div className="flex flex-col gap-1 w-full">
                <div className="flex justify-between">
                    <h3 className="font-semibold text-slate-600 capitalize text-lg md:text-xl">{name}</h3>
                    <div className="cursor-pointer text-slate-600 hover:text-slate-700" onClick={() => dispatch(deleteCartItem(id))}>
                        <AiFillDelete />
                    </div>
                </div>
                <p className="text-slate-500 font-medium">{category}</p>
                <p className="font-bold text-base"> 
                    <span className="text-blue-900">₱</span>
                    <span>{price}</span>
                </p>

                <div className=" flex justify-between">

                    <div className='flex gap-3 items-center'>
                        <button 
                            className='bg-slate-500 py-1 mt-2 rounded text-white hover:bg-slate-600 p-1' 
                            onClick={() => dispatch(increaseQty(id))}><TbPlus 
                        />
                        </button>
                        <p className="font-semibold p-1">{qty}</p>
                        <button 
                            className='bg-slate-500 py-1 mt-2 rounded text-white hover:bg-slate-600 p-1' 
                            onClick={() => dispatch(decreaseQty(id))}><TbMinus 
                        />
                        </button>
                    </div>

                    <div className="flex items-center gap-2 font-bold text-slate-600">
                        <p>Total: </p>
                        <p><span className="text-blue-900">₱</span>{total}</p>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default CartProduct