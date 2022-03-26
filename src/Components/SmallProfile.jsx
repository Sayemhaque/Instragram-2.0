import React from "react";
import Suggestions from "./Suggestions";
const SmallProfile = () => {
  return (
    <>
      <div className="boreder-2 border-gray-400 fixed top-20 mt-6">
        <div className="flex gap-5 items-center">
          <div className="flex gap-3 items-center">
            <img
              className="h-14 w-14 object-cover rounded-full"
              src="https://avatars.githubusercontent.com/u/1?v=4"
              alt=""
            />
            <div className="flex-1">
                
            <p className="text-bold text-sm">mohammd_Sayem_haque</p>
            <p className="text-bold text-sm text-gray-400"> iamsayem77</p>

            </div>
          </div>
          <div className="flex-1">
              <button className="text-blue-400">Log Out</button>
          </div>
        </div>
           {/* Suggestions */}
           <Suggestions/>
      </div>
     
    </>
  );
};

export default SmallProfile;
