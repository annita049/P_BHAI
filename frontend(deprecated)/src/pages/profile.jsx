import React, {useEffect, useState} from "react";

import { SideProfile } from "../components/sideProfile.jsx";
import { PostCard } from "../components/PostCard.jsx";
import ProfileMode from "../components/ProfileMode.jsx";
import ModeSelector from "../components/ModeSelector.jsx";
import UpdateProfile from "../components/updateProfile.jsx";

import { useLocation } from "react-router-dom";

import { useGeneralStore } from "../store/useGeneralStore.js";
import { useAuthStore } from "../store/useUserStore.js";


function Demo() {
  const [mode, setMode] = useState({
    post: false,
    profile: true,
    edit: false,
  });
  const { selectedUser, setSelectedUser } = useGeneralStore();
  const { userPosts, getUserPosts, authUser } = useAuthStore();
  const location = useLocation(); 
  const queryParams = new URLSearchParams(location.search); 
  const id = queryParams.get("id");
  useEffect(()=>{ 
    setSelectedUser(id);
    getUserPosts(id);
  },[id])

  return (
    <>
      <div className="grid grid-cols-12 m-3 max-h-screen overflow-auto">
        <SideProfile user={selectedUser} />

        <div className=" mt-6 col-span-12 lg:col-span-8 space-y-5 border-2 rounded-3xl max-h-screen overflow-y-scroll">
          <ModeSelector mode={mode} setMode={setMode} />
          <hr className="mx-4" />
          {mode.profile && <ProfileMode user={selectedUser} />}
          {mode.post && (
            <div className="p-4 px-8 space-y-8">
              {userPosts.map((item, index) => (
                <PostCard key={index} item={item} />
              ))}
            </div>
          )}
          {mode.edit && authUser._id === id && <UpdateProfile pro_id={id} />}
        </div>
      </div>
    </>
  );
}
export default Demo;
