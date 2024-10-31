import React from 'react'

const sideLists = [
  {
    id: 1,
    Heading: "You",
    list: [
      "History",
      "Playlists",
      "Your videos",
      "Watch later",
      "Liked videos",
    ],
  },
  {
    id: 2,
    Heading: "Explore",
    list: ["Trending", "Shopping", "Music", "Movie", "Live", "Gaming"],
  },
  {
    id: 3,
    Heading: "More from Youtube",
    list: ["YouTube Premium", "YouTube Studio", "YouTube Music", "YouTube Kids"],
  },
  
];

const SideBar = () => {
  
  return (
    <div className="p-3 shadow-lg h-screen overflow-y-auto">
      {sideLists.map((item) => {
        return (
          <div className="flex flex-col gap-3" key={item.id}>
            <h1 className="font-bold text-2xl py-3 whitespace-nowrap">
              {item.Heading}
            </h1>
            <ul className="flex flex-col text-xl gap-y-5 mb-2 px-5 text-gray-800 ">
              {item.list.map((each) => (
                <li key={each} className="whitespace-nowrap">
                  {each}
                </li>
              ))}
            </ul>
            <hr />
          </div>
        );
      })}
      {/* <div className="flex flex-col gap-2">
        <h1 className="font-bold text-2xl py-2 whitespace-nowrap">Settings</h1>
        <h1 className="font-bold text-2xl py-2 whitespace-nowrap">Report History</h1>
        <h1 className="font-bold text-2xl py-2 whitespace-nowrap">Help</h1>
        <h1 className="font-bold text-2xl py-2 whitespace-nowrap">Send feedback</h1>
      </div> */}
    </div>
  ) 
}

export default SideBar
