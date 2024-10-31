import React from 'react'

const VideoDetails = ({info,count}) => {
    const now = new Date()
    const publishedDate = new Date(info?.publishedAt)
    const timeDifference = now - publishedDate
    // console.log(now)
    const daysAgo = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hoursAgo = Math.floor(timeDifference / (1000 * 60 * 60));
    const minutesAgo = Math.floor(timeDifference / (1000 * 60));

    // Format time ago based on the difference
    const timeAgo =
      daysAgo > 0
        ? `${daysAgo} day${daysAgo > 1 ? "s" : ""} ago`
        : hoursAgo > 0
        ? `${hoursAgo} hour${hoursAgo > 1 ? "s" : ""} ago`
        : `${minutesAgo} minute${minutesAgo > 1 ? "s" : ""} ago`;   
  return (
    <div className="w-96 shadow-md py-3 rounded-md">
      <img
        className="rounded-xl"
        src={info?.thumbnails.high.url}
        alt="thumbnails"
      />
      <div className="p-1 flex flex-col gap-1 min-h-40 max-h-full">
        <h1 className="font-bold text-lg">{info?.localized?.title}</h1>
        <h1 className=" text-lg items-center text-gray-600">
          {info?.channelTitle}
        </h1>

        <div className="flex gap-x-4 text-lg items-center text-gray-600">
          <h1 className="text-lg ">
            {parseInt(count?.viewCount / 1000)}k views
          </h1>
          <h1>{timeAgo}</h1>
        </div>
      </div>
    </div>
  );
}

export default VideoDetails
