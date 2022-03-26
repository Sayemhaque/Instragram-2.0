import React from "react";

const SuggestionsProfile = () => {
  return (
    <div>
      <div className="flex justify-between mt-2">
        <div className="flex gap-3">
          <div>
            <img
              className="w-10 h-10 rounded-full"
              src="https://images.unsplash.com/photo-1553272725-086100aecf5e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
              alt=""
            />
          </div>
          <div className="text-sm ">
            <p>Md sayem</p>
            <p className="text-gray-400">suggestion for you</p>
          </div>
        </div>
        <button className="text-blue-400">Follow</button>
      </div>
    </div>
  );
};

export default SuggestionsProfile;
