import React from "react";
import './ButtonList.css'

const lists = [
  "All",
  "Music",
  "Telugu cinema",
  "Mixes",
  "Mantras",
  "Live",
  "Podcasts",
  "React routers",
  "Object-oriented programming",
  "Albums",
  "Algorithms",
  "Carnatic",
  "Music",
  "AI",
  "Information technology",
  "Recently uploaded",
  "Watched",
  "New to you",
];

const ButtonsList = () => {
  return (
    <div className="flex overflow-x-auto overflow-hidden mt-2 space-x-2 p-2">
      {lists.map((each, index) => (
        <button
          key={index}
          className="rounded-lg active:bg-gray-800 active:text-white bg-gray-100 px-5 py-2 text-xl whitespace-nowrap"
        >
          {each}
        </button>
      ))}
    </div>
  );
};

export default ButtonsList;
