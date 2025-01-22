import React from 'react'
import { NavLink } from 'react-router-dom'

const ResultList = ({users}) => {
 
  if(!users || users.length === 0){
    return <p className='text-center text-gray-500'>No accounts Found</p>
  }
  return (
    <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
      {
        users.map((account)=>(
          <div key={account.id}
          className="bg-white shadow-lg bg-opacity-80 rounded-lg p-4 flex flex-col items-center text-center">
            <img src={account.image} 
            alt={account.name}
            className="w-24 h-24 rounded-full mb-4"
             />
             <h2 className="text-lg font-semibold">{account.name}</h2>
             <p className='"text-sm text-gray-500"'>{account.email}</p>

            <NavLink
                to={`/details/${account.id}`}
                className="mt-4 text-blue-500 hover:underline"
              >
                View Details
            </NavLink>
          </div>
        ))
      }       
    </div>
  )
}

export default ResultList;