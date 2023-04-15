import React from 'react'
import { useSelector } from 'react-redux'
import CartProduct from '../components/cartProduct'

function Cart() {
    const productCartItem = useSelector((state) => state.product.cartItem)
    console.log(productCartItem)
    return (
        <div className='p-2 md:p-4'>
            <h2 className='text-lg md:text-2xl font-bold text-slate-600'>Your Cart Items</h2>

            <div className="my-4">
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
                <div className=""></div>
            </div>
        </div>
    )
}

export default Cart