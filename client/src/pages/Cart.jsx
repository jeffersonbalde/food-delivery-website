import React from 'react'
import { useSelector } from 'react-redux'
import CartProduct from '../components/cartProduct'
import emptyCartImage from "../assets/empty.gif"

function Cart() {
    const productCartItem = useSelector((state) => state.product.cartItem)

    const totalPrice = productCartItem.reduce((acc,curr) => acc + parseInt(curr.total), 0)
    const totalQty = productCartItem.reduce((acc,curr) => acc + parseInt(curr.qty), 0)

    return (
        <>

            <div className='p-2 md:p-4'>
                <h2 className='text-lg md:text-2xl font-bold text-slate-600'>Your Cart Items</h2>
                { productCartItem[0] ? 
                    <div className="my-4 flex gap-3 flex-col md:flex-row">
                        {/* display cart items */}
                        <div className="w-full max-w-3xl">
                            {productCartItem.map(el => {
                                return (
                                    <CartProduct
                                        id={el._id}
                                        key={el._id} image={el.image} 
                                        name={el.name} 
                                        category={el.category}
                                        qty={el.qty}
                                        total={el.total}
                                        price={el.price}
                                    />
                                )
                            })}
                        </div> 

                        {/* total cart item */}
                        <div className="w-full max-w-md ml-auto">
                            <h2 className='bg-slate-600 text-white p-2 text-lg '>Summary</h2>
                            <div className="flex w-full py-2 text-lg border-b">
                                <p>Total Qty: </p>
                                <p className='ml-auto w-32 font-bold'>{totalQty}</p>
                            </div>
                            <div className="flex w-full py-2 text-lg border-b">
                                <p>Total Price</p>
                                <p className='ml-auto w-32 font-bold'><span className="text-blue-900">₱</span>{totalPrice}</p>
                            </div>
                            <button className='bg-slate-500 w-full text-lg font-bold py-2 text-white'>Payment</button>
                        </div>
                    </div>

                    :   <div className="flex w-full justify-center items-center flex-col">
                            <img src={emptyCartImage} alt="emptycart" className='w-full max-w-sm'/>
                            <p className='text-slate-500 text-3xl font-bold '>Empty Cart</p>
                        </div>
                }
            </div>
        </>
    )
}

export default Cart