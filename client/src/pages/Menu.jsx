import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

function Menu() {
  const {filterby} = useParams()
  const productData = useSelector(state => state.product.productList)

  const productDisplay = productData.filter(el => el._id === filterby)[0]
  console.log(productDisplay)

  return (
    <div>
      <div className="w-full max-w-4xl bg-slate-400 m-auto">
        <div className="w-1/2 shadow ">
          <img src={productDisplay.image} alt="foods" />
        </div>
      </div>
    </div>
  )
}

export default Menu