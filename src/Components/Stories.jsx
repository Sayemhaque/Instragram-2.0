import React, { useEffect, useState } from "react";
const Stories = () => {
  const [users, setUsers] = useState([]);

  const getUsersData = async () => {
    const res = await fetch("https://api.github.com/users").catch((err) =>
      console.log(err)
    );
    const data = await res.json();
    setUsers(data);
    console.log(data)
  };
  useEffect(() => {
    getUsersData();
  }, []);

  return (
    <>
      {users.map((profile) => {
        return (
          <>
            <div className="flex-shrink-0" user={profile}>
              <img className="ring ring-red-300 ring-offset-4
               rounded-full w-12 h-12 object-cover" src={profile.avatar_url} alt="" />
              <p className="text-center text-sm mt-2 truncate text-gray-500">{profile.login.substring(0 , 6)}...</p>
            </div>
          </>
        );
      })}
    </>
  );
};

export default Stories;
