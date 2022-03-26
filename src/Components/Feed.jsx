import React from "react";
import Post from "./Post";
import SmallProfile from "./SmallProfile";
import Story from "./Story";


const Feed = () => {
  return (
    <>
      <main>
        <section className="grid grid-cols-1 md:px-20 md:grid-cols-3 md:max-w-6xl mx-auto">
          <section className="col-span-2  md:mx-[15px] ">
            {/* story */}
            <Story />
            {/* post */}
            <Post/>
          </section>
          <section className="hidden  md:inline-grid">
            {/* <Profile/> */}
              <SmallProfile/>

          </section>
        </section>
      </main>
    </>
  );
};

export default Feed;
