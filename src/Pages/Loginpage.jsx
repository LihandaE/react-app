import React from 'react'

function Loginpage({role}) {
  switch(role){
    case "retail pharmacy" : 
      return (
  <h1 className="text-3xl font-bold text-blue-700 text-center mt-20">
          Welcome back Retail Pharmacy
        </h1>
      );
    case "customer" : 
      return (
        <h1 className="text-3xl font-bold text-green-700 text-center mt-20">
          Welcome back Customer
    </h1>
      );
    default : 
      return (
        <h1 className="text-3xl font-bold text-gray-800 text-center mt-20">
          Welcome All
        </h1>
      );
  }
}

export default Loginpage




