import React, { useEffect, useState } from 'react'
import FilterProduct from './FilterProduct'
import CardFeature from './CardFeature'
import { useSelector } from 'react-redux'

function AllProducts({heading}) {
    const productData = useSelector((state) => state.product.productList)

    const categoryList = [...new Set(productData.map(el => el.category))]

    const [filterBy, setFilterBy] = useState("")
    const [dataFilter, setDataFilter] = useState([])
  
    useEffect(() => {
      setDataFilter(productData)
    }, [productData])
  
    const handleFilterProduct = (category) => {
      const filter = productData.filter(el => el.category.toLowerCase() === category.toLowerCase())
      setDataFilter(() => {
        return [
          ...filter
        ]
      })
    }
    
    return (
        <div className="my-5">
            <h2 className="font-bold text-2xl text-slate-800 mb-4">{heading}</h2>

            <div className="flex gap-4 justify-center overflow-scroll scrollbar-none">
                {categoryList[0] && categoryList.map(el => {
                    return (
                    <FilterProduct category={el} onClick={() => handleFilterProduct(el)}/>
                    )
                })}
            </div>

            <div className="flex flex-wrap gap-4 justify-center my-4">
                {dataFilter.map(el => {
                    return (
                    <CardFeature
                        key={el._id}
                        id={el._id}
                        image={el.image}
                        name={el.name}
                        category={el.category}
                        price={el.price}
                    />
                    )
                })}
            </div>
        </div>
    )
}

export default AllProducts