import React, { useEffect, useState } from 'react'
import { generateRandomName, randomMessageFunc } from "./utils/Helper";
import AutoChat from "./AutoChat";
import { useDispatch } from 'react-redux';
import {addMessages} from './utils/RTK/chatSlice'
import { useSelector } from 'react-redux';

const LiveChat = () => {
    const newUser = useSelector(store => store.chat.message)
    const [comment, setComment] = useState("")
const dispatch = useDispatch()
    useEffect(() => {
    
        const timer = setInterval(() => {
            //Api Polling 
            dispatch(
              addMessages({
                name: generateRandomName(),
                message: randomMessageFunc(20),
              })
            );
        },500)
        
        return ()=>clearInterval(timer)
    },[])

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addMessages({
            name: 'Vijay',
            message:comment
        }))
        setComment("")
    }
        
    return (
      <div className="border-2 border-gray-500  h-[650px] py-5 px-3 m-5 justify-between rounded-xl flex flex-col gap-2 bg-slate-50 ">
        <div className=" overflow-y-auto flex h-[550px]  flex-col-reverse">
          {/* <h1 className="font-bold text-xl">Live Chat:</h1> */}
          {newUser.map((each, index) => (
            <AutoChat key={index} name={each.name} message={each.message} />
          ))}
        </div>
        <form
          onSubmit={handleSubmit}
          className="border border-black rounded-md p-2 flex flex-between gap-2"
        >
          <input
            value={comment}
            onChange={(e) => setComment(e.target.value)}    
            type="text"
            className="border-b-2 border-gray-400 w-80 p-2 mr-2 text-xl"
            placeholder="enter your comment here"
          />
          <button className="bg-slate-100 border border-gray-200 p-2 rounded-lg text-xl">
            Submit
          </button>
        </form>
      </div>
    );
}

export default LiveChat
