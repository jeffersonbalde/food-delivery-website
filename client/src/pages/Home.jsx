import { useSelector } from "react-redux"
import HomeCard from "../components/HomeCard"
import CardFeature from "../components/CardFeature"
import { GrPrevious, GrNext } from "react-icons/gr";

import { useEffect, useRef, useState } from "react";
import FilterProduct from "../components/FilterProduct";

function Home() {
  const productData = useSelector((state) => state.product.productList)
  console.log(productData)
  const homeProductCartList = productData.slice(1,5)
  const homeProductCartListVegetables = productData.filter(el => el.category === "vegetable", [])
  console.log(homeProductCartListVegetables)

  const loadingArray = new Array(4).fill(null);
  const loadingArrayFeature = new Array(10).fill(null);

  const slideProductRef = useRef()
  const nextProduct = () => {
    slideProductRef.current.scrollLeft += 300
  }

  const preveProduct = () => {
    slideProductRef.current.scrollLeft -= 300
  }

  const categoryList = [...new Set(productData.map(el => el.category))]
  console.log(categoryList)

  // filter data
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
          <div className="flex items-center justify-center">
            <button className="font-bold bg-slate-300 text-slate-700 px-4 py-2 rounded-md hover:bg-slate-400">Order Now</button>
          </div>
        </div>

        <div className="md:w-4/5 text-center flex flex-wrap gap-5 p-4 justify-center">
          {homeProductCartList[0] ? homeProductCartList.map(el => {
            return (
              <HomeCard
                key={el._id}
                image={el.image}
                name={el.name}
                price={el.price}
                category={el.category}
              />
            )
          })
          : loadingArray.map((el,index) => {
            return (
              <HomeCard 
                key={index}
                loading={"Loading..."}
              />
            )
          })
        }
        </div>
      </div>

      <div className="">
        <div className="flex w-full items-center">  
            <h2 className="font-bold text-2xl text-slate-800 mb-4">Fresh Vegetables</h2>
          <div className="ml-auto flex gap-4">
            <button onClick={preveProduct} className="bg-slate-300 hover:bg-slate-400 text-lg p-1 rounded"><GrPrevious /></button>
            <button onClick={nextProduct} className="bg-slate-300 hover:bg-slate-400 text-lg p-1 rounded"><GrNext /></button>
          </div>
        </div>
        <div className="flex gap-5 overflow-scroll scrollbar-none scroll-smooth transition-all" ref={slideProductRef}>
          {homeProductCartListVegetables[0] ? homeProductCartListVegetables.map(el => {
            return (
              <CardFeature 
                key={el._id}
                name={el.name}
                category={el.category}
                price={el.price}
                image={el.image}
              />
            )
          })
          : loadingArrayFeature.map(el => <CardFeature loading="Loading..."/>)
          }
        </div>
      </div>
      
      <div className="my-5">
        <h2 className="font-bold text-2xl text-slate-800 mb-4">Your Product</h2>

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
                image={el.image}
                name={el.name}
                category={el.category}
                price={el.price}
              />
            )
          })}
        </div>

      </div>
    </div>
  )
}

export default Home