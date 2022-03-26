import React, { useEffect, useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { RiBookmarkLine, RiChat3Line, RiSendPlaneLine } from "react-icons/ri";
const Post = () => {
  const [users, setUsers] = useState([]);
  const [click, setClick] = useState(false);

  const getUsersData = async () => {
    const res = await fetch("https://api.github.com/users").catch((err) =>
      console.log(err)
    );
    const data = await res.json();
    setUsers(data);
    console.log(data);
  };
  useEffect(() => {
    getUsersData();
  }, []);
  return (
    <>
      {users.map((post) => {
        return (
          <>
            <div className="mt-3 mb-3 border-2 border-gray-200 ">
              {/* Post Header */}
              <div className="bg-white flex items-center py-3 px-2">
                <img
                  className="w-10 h-10 mr-2 rounded-full cursor-pointer"
                  src={post.avatar_url}
                  alt=""
                />
                <p className="flex-1 font-bold cursor-pointer">{post.login}</p>
                <div className="">
                  <HiOutlineDotsHorizontal className="text-gray-400 text-[20px] cursor-pointer" />
                </div>
              </div>

              {/* post Img */}
              <div className="">
                <img className="w-full inset-0 relative object-cover" src={post.avatar_url} alt="" />
              </div>

              {/* Post footer */}
              <div className="flex justify-between py-2 px-4 bg-white">
                <div className="flex gap-2">
                  <div onClick={() => setClick(!click)}>
                    {click ? (
                      <AiFillHeart className="headIcons" />
                    ) : (
                      <AiOutlineHeart className="headIcons" />
                    )}
                  </div>
                  <RiSendPlaneLine className="headIcons" />
                  <RiChat3Line className="headIcons" />
                </div>
                <div>
                  <RiBookmarkLine className="headIcons" />
                </div>
              </div>
              <div className="py-1 pl-5 bg-white">
                <span className="font-bold text-sm text-[#838282]">
                  {Math.floor(Math.random() * 3000)} likes
                </span>
                <p className="font-bold cursor-pointer">
                  {post.login}{" "}
                  <span className="text-sm text-[#838282]">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Itaque, architecto.
                  </span>{" "}
                </p>
                <span className="text-gray-500">
                  {" "}
                  view all
                  <span> {Math.floor(Math.random() * 100)} </span>
                  Commensts
                </span>
                <span></span>
              </div>
              <from className="flex border-t-2 w-full gap-3 bg-white">
                <input
                  type="text"
                  placeholder="Add a comment"
                  className="flex-1 focus:outline-none  pl-5 py-4"
                />

                <button className="text-blue-400 mr-2 ">Post</button>
              </from>
            </div>
          </>
        );
      })}
    </>
  );
};

export default Post;
