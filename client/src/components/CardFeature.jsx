import React from 'react'

function CardFeature({image, name, price, category, loading}) {
  return (
    <div className='w-full min-w-[200px] bg-white hover:shadow-lg drop-shadow-lg py-5 px-4 cursor-pointer flex flex-col'>
        <div className="h-28 flex flex-col justify-center items-center">
            <img src={image} alt="vegetables" className='h-full'/>
        </div>
        <h3 className="font-semibold text-slate-600 capitalize text-lg mt-4">{name}</h3>
        <p className="text-slate-500 font-medium">{category}</p>
        <p className="font-medium"> <span className="text-blue-900">₱</span><span>{price}</span></p>
        <button className='bg-slate-500 py-1 mt-2-rounded text-white'>Add Cart</button>
</div>
  )
}

export default CardFeature