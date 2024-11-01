import React from 'react'


const commentsData = [
  {
    name: "@vijay",
    description:
      "Oh my God. Look at Manju Warrier. I hate to bring up her age here, but has any actress managed to be a sensation like this, at 46? Wanted to see her a lot more in the movie. Team Vettaiyan if you are watching this comment please understand that you missed a big opportunity by giving her less screen time. Cant wait to see her in Vetrimaran's Viduthalai 2.",
    replies: [
      {
        name: "@Manoj776",
        description:
          "They given perfect time in this movie, when u watch 2nd time you will understand! bcz 1st time I also felt same! and 2nd time lot of things are clear,.. and I think some of the deleted scenes will coming soon",
        replies: [],
      },
      {
        name: "@AmgG-m1z",
        description:
          "Manju shine because of nilufer (cosmetic business and skin care).Nilufer  skin care and cosmetics is in kochi. Nilufer have more car collections",
        replies: [],
      },
    ],
  },
  {
    name: "@Filmyvijay-10",
    description:
      "This song in the theatre!!! The claps and whistles for Manju Warrier 🔥🔥🔥🔥",
    replies: [
      {
        name: "@vijay",
        description:
          "Oh my God. Look at Manju Warrier. I hate to bring up her age here, but has any actress managed to be a sensation like this, at 46? Wanted to see her a lot more in the movie. Team Vettaiyan if you are watching this comment please understand that you missed a big opportunity by giving her less screen time. Cant wait to see her in Vetrimaran's Viduthalai 2.",
        replies: [],
      },
      {
        name: "@AmgG-m1z",
        description:
          "Manju shine because of nilufer (cosmetic business and skin care).Nilufer  skin care and cosmetics is in kochi. Nilufer have more car collections",
        replies: [
          {
            name: "@Filmyvijay-10",
            description:
              "This song in the theatre!!! The claps and whistles for Manju Warrier 🔥🔥🔥🔥",
            replies: [],
          },
        ],
      },
    ],
  },
  {
    name: "@vijay",
    description:
      "Oh my God. Look at Manju Warrier. I hate to bring up her age here, but has any actress managed to be a sensation like this, at 46? Wanted to see her a lot more in the movie. Team Vettaiyan if you are watching this comment please understand that you missed a big opportunity by giving her less screen time. Cant wait to see her in Vetrimaran's Viduthalai 2.",
    replies: [
      {
        name: "@Manoj776",
        description:
          "They given perfect time in this movie, when u watch 2nd time you will understand! bcz 1st time I also felt same! and 2nd time lot of things are clear,.. and I think some of the deleted scenes will coming soon",
        replies: [],
      },
      {
        name: "@AmgG-m1z",
        description:
          "Manju shine because of nilufer (cosmetic business and skin care).Nilufer  skin care and cosmetics is in kochi. Nilufer have more car collections",
        replies: [],
      },
    ],
  },
];

const CommentsView = ({data}) => {
    return (
      <div className="border-l bg-gray-100 m-1 p-2">
        <h1 className="font-bold text-xl">{data.name}</h1>
        <h1 className='text-lg '>{data.description}</h1>
      </div>
    );
    
}


const CommentsDataList = ({data}) => {
    return (
      <div className="ml-10">
        {data.map((comment) => {
          return (
            <>
              <CommentsView data={comment} />
              <CommentsDataList data={comment.replies} /> 
            </>
          );
        })}
      </div>
    );
}

const CommentsList = () => {
  return (
    <div className='m-5 p-2'>
          <h1 className='text-xl font-bold '>Comments:</h1>
          <div>
              {commentsData.map(comment => {
                  return (
                      <>
                          <CommentsDataList  data ={commentsData} />
                      </>
                  )
              })}
          </div>
    </div>
  );
}

export default CommentsList
