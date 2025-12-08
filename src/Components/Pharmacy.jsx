import React from 'react'

function Pharmacy({data}) {
  return (
    <div className="bg-white shadow-md rounded-xl p-4 hover:shadow-lg transition cursor-pointer border border-gray-100">
      
      <div className="flex items-center justify-between mb-2">
        <h2 className="text-xl font-semibold text-blue-700">{data.drugname}</h2>
        <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">
          {data.classification}
        </span>
      </div>

      <p className="text-gray-600 mb-1">
        <span className="font-medium">Brand:</span> {data.brandname}
      </p>

      

    </div>
  );
}

export default Pharmacy