import React from 'react'
import ButtonsList from './ButtonsList'
import VideoList from './VideoList'

const MainContainer = () => {
  return (
    <div className="flex flex-col gap-3 px-7">
      <ButtonsList />
      <VideoList />
    </div>
  );
}

export default MainContainer
