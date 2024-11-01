import React, { useEffect, useState } from "react";
import {
  menu,
  logo,
  PROFILE,
  YOUTUBE_SUGGESTION_API,
} from "./utils/constaints";
import { useDispatch, useSelector } from 'react-redux';
import { isToggleMenu } from './utils/RTK/menuSlice';
import { addCache } from "./utils/RTK/searchSlice";


const Head = () => {
  const dispatch = useDispatch()
  const [userSearchText, setUserSearchText] = useState("")
  const [userApi, setUserApi] = useState([])
  const [isSearchDisplay, setIsSearchDisplay] = useState(false);
  const cache = useSelector(store => store.search)

 
  useEffect(() => {
const timer = setTimeout(() => {
  if (cache[userSearchText]) {
    setUserApi(cache[userSearchText]);
  } else if (userSearchText){
    getSearchSuggestions();
  }
}, 300);
   
    return () => clearTimeout(timer)
    
  }, [userSearchText])

  const getSearchSuggestions = async () => {
    const response = await fetch(YOUTUBE_SUGGESTION_API + userSearchText)
    const jsonData = await response.json()
    dispatch(addCache({
      [userSearchText]:jsonData[1],
    }))
    setUserApi(jsonData[1])
  }
  // console.log(userApi);
  
  const handleMenu = () => {
    dispatch(isToggleMenu())
  }
  const handleSearchText = (text) => {
    setUserSearchText(text);
    setIsSearchDisplay(false);
    console.log(text);
  };
  return (
    <div className="grid grid-flow-col p-5 shadow-md font-sans">
      <div className="col-span-2 flex">
        <img
          className="h-14 p-2 m-2"
          onClick={handleMenu}
          src={menu}
          alt="menu"
        />
        <a href="/">
          <img className="h-14 p-2 m-2" alt="logo" src={logo} />
        </a>
      </div>

      <div className="flex col-span-11 flex-col">
        <div className="flex  items-center">
          <input
            type="search"
            className="border py-3 px-5 w-2/4 outline-none border-gray-300 rounded-l-3xl text-xl text-black"
            placeholder="Search"
            value={userSearchText}
            onFocus={() => setIsSearchDisplay(true)}
            onBlur={() =>setTimeout(() => setIsSearchDisplay(false), 150)}
            onChange={(e) => setUserSearchText(e.target.value)}
          />

          <button className="bg-gray-100 text-xl text-black border py-3 px-5 outline-none border-l-0 border-gray-300 rounded-r-2xl">
            Search
          </button>
        </div>

        {isSearchDisplay && userSearchText && (
          <ul className="absolute top-20 bg-white w-1/3 gap-2 p-3 m-1 rounded-lg shadow-md">
            {userApi.map((text,index) => (
              <li onClick={()=>handleSearchText(text)} key={index} className="text-2xl p-2 hover:bg-gray-100 m-1">
                {text}
              </li>
            ))}
          </ul>
        )}
      </div>

      <div>
        <img className="h-14 p-2 m-2" src={PROFILE} alt="profile" />
      </div>
    </div>
  );
}

export default Head
