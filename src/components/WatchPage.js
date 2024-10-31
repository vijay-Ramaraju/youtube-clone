import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { closeMenu } from './utils/RTK/menuSlice'
import { useSearchParams } from 'react-router-dom'
import {watchVideo} from './utils/constaints'


const WatchPage = () => {
    const dispatch = useDispatch()
    const [searchParams] = useSearchParams();
    const result = searchParams.get("v")
    console.log(result)
    useEffect(() => {
        dispatch(closeMenu())
        console.log(watchVideo)
        getWatchData()
    }, [])  
    
    const getWatchData = async () => {
        const response = await fetch(watchVideo)
        const jsonData = await response.json()
        console.log(jsonData)
    }
    return (
      <div className='p-3'>
        <iframe
          width="1200"
          height="600"
          src={`https://www.youtube.com/embed/${result}`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
    );
}

export default WatchPage