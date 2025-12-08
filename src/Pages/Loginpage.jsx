import React from 'react'

function Loginpage({role}) {
 switch(role){
        case "retail pharmacy" : return <h1>Welcome back Retail Pharmacy</h1>;
        case "customer" : return <h1>Welcome back Customer</h1>;
        default : return <h1>Welcome All </h1>
    }
}

export default Loginpage