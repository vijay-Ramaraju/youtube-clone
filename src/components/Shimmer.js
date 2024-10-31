import React from 'react'

const Shimmer = () => (Array(10).fill("").map((data,index)=> <div key={index} className="w-96 h-96 shadow-md bg-gray-200 py-3 rounded-md"> </div>))

export default Shimmer