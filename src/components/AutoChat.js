import React from 'react'
import { PROFILE } from "./utils/constaints";


const AutoChat = ({name,message}) => {
    
  return (
    <div className="flex items-center bg-gray-100 mt-2">
      <img className="h-14 p-2 m-2" src={PROFILE} alt="profile" />
      <span className=" font-semibold text-xl ">{name}</span>
      <span className="text-lg"> ->): {message}</span>
    </div>
  );
}

export default AutoChat
