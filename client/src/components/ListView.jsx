import React from 'react'
import { Link } from 'react-router-dom'
import FormatCurrency from "./FormatCurrency";

const ListView = ({prod}) => {
  return (
    <div className='flex flex-col md:flex-row gap-3 md:gap-10 items-start justify-between pt-10'>
        <div className='relative'>
            <img className='w-72 md:w-80 h-48 md:h-52 rounded-md' src={prod.image} alt={prod.name} />
            <figcaption className="absolute top-3 bg-green-100 right-2 px-1 rounded-xl font-bold">
            {prod.category}
          </figcaption>
        </div>
        <div className='flex flex-col gap-2 md:gap-3 w-[300px] md:w-[720px]'>
            <span className='font-bold  text-lg md:text-xl'>{prod.name}</span>
            <span className='font-bold'>Price : { <FormatCurrency price={prod.price} />}</span>
            <p className='leading-.6 text-sm md:text-base'>{prod.description.slice(0,160)}...</p>
           <Link to={`/product/${prod.id}`}> <button className='px-2 py-1 rounded-sm bg-[#233e28] text-white text-sm md:text-base font-medium'>Read More</button></Link>
        </div>
    </div>
  )
}

export default ListView