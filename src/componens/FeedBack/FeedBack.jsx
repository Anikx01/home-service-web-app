// import React from "react";

// const FeedBack = ({ feedBackData }) => {
//   console.log(feedBackData);
//   //   const { name, review, userImg } = feedBackData;
//   return (
//     <div className="grid gap-6  grid-cols-3 ">
//       {feedBackData.map((feed) => (
//         <div className="card w-80 bg-purple-400 mt-8 shadow-sm flex flex-col justify-between items-center">
//           <div className="p-6">
//             <div className="flex justify-between items-center w-full">
//               <img
//                 className="w-12 h-12 rounded-full"
//                 src={feed.userImg}
//                 alt=""
//               />
//               <h2 className="card-title ml-4">{feed.name}</h2>
//               <p className="">{new Date().toLocaleDateString()}</p>
//             </div>
//             <p>{feed.review}</p>
//             <div className="card-actions justify-end items-center">
//               <div className="rating rating-lg">
//                 <input
//                   type="radio"
//                   name="rating-10"
//                   className="rating-hidden"
//                   aria-label="clear"
//                 />
//                 <input
//                   type="radio"
//                   name="rating-10"
//                   className="mask mask-star-2"
//                   aria-label="1 star"
//                 />
//                 <input
//                   type="radio"
//                   name="rating-10"
//                   className="mask mask-star-2"
//                   aria-label="2 star"
//                   defaultChecked
//                 />
//                 <input
//                   type="radio"
//                   name="rating-10"
//                   className="mask mask-star-2"
//                   aria-label="3 star"
//                 />
//                 <input
//                   type="radio"
//                   name="rating-10"
//                   className="mask mask-star-2"
//                   aria-label="4 star"
//                 />
//                 <input
//                   type="radio"
//                   name="rating-10"
//                   className="mask mask-star-2"
//                   aria-label="5 star"
//                 />
//               </div>
//               <button className="btn btn-primary">Buy Now</button>
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default FeedBack;

import React from "react";

const FeedBack = ({ feedBackData }) => {
  console.log(feedBackData);
  //   const { name, review, userImg } = feedBackData;
  return (
    <div className="grid sm:grid-cols-1 gap-6 lg:grid-cols-3 mt-8">
      {feedBackData.map((feed) => (
        <div className="card w-[100%] bg-purple-400  shadow-xl">
          <div className="p-6">
            <div className="flex justify-between items-center">
              <img
                className="w-12 h-12 rounded-full"
                src={feed.userImg}
                alt=""
              />
              <h2 className="card-title ml-4">{feed.name}</h2>
              <p className="">{new Date().toLocaleDateString()}</p>
            </div>
            <p>{feed.review}</p>
            <div className="card-actions justify-end items-center">
              <div className="rating rating-lg">
                <input
                  type="radio"
                  name="rating-10"
                  className="rating-hidden"
                  aria-label="clear"
                />
                <input
                  type="radio"
                  name="rating-10"
                  className="mask mask-star-2"
                  aria-label="1 star"
                />
                <input
                  type="radio"
                  name="rating-10"
                  className="mask mask-star-2"
                  aria-label="2 star"
                  defaultChecked
                />
                <input
                  type="radio"
                  name="rating-10"
                  className="mask mask-star-2"
                  aria-label="3 star"
                />
                <input
                  type="radio"
                  name="rating-10"
                  className="mask mask-star-2"
                  aria-label="4 star"
                />
                <input
                  type="radio"
                  name="rating-10"
                  className="mask mask-star-2"
                  aria-label="5 star"
                />
              </div>
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FeedBack;
