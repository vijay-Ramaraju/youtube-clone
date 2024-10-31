import React, { useEffect, useState } from 'react'
import { YOUTUBE_API } from './utils/constaints'
import VideoDetails from './VideoDetails'
import { Link } from 'react-router-dom'
import Shimmer from './Shimmer' 
const VideoList = () => {
  const [videoDetail, setVideoDetail] = useState([])
  const [visibelVideos, setVisibelVideos] = useState(10)
  
  useEffect(() => {
    getVideosList()
    window.addEventListener('scroll', handleLoad)
    return ()=>window.removeEventListener('scroll',handleLoad)
  },[])
  const getVideosList = async() => {
    const response = await fetch(YOUTUBE_API);
    const jsonData = await response.json()
    
    setVideoDetail(jsonData.items)
  }

  const handleLoad = () => {
    if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight) {

      setVisibelVideos(prev => parseInt(prev) + 10)
    }
  }

  // console.log(videoDetail[0]);
  return (
    <div className="w-full flex flex-wrap gap-4">
      {videoDetail.length < 1 ? <Shimmer /> :
        
          videoDetail.slice(0, visibelVideos).map((video) => (
            <Link key={video.id} to={"/watch?v=" + video.id}>
              <VideoDetails info={video?.snippet} count={video?.statistics} />
            </Link>
          ))
        
      }
    </div>
  );
}

export default VideoList
