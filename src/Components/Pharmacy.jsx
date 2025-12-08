import React from 'react'

function Pharmacy({data}) {
  return (
    <>


    <h2 className='font-bold text-amber-600 font-sans'>Drug name: {data.drugname}</h2>
    <h2 className='font-bold text-black-500 font-sans'>Classification: {data.classification} </h2>
    <h2 className='font-bold text-emerald-500 font-sans'>Brandname: {data.brandname}</h2>
    
   
    </>
  )
}

export default Pharmacy