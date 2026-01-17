import React, { useEffect } from "react";
import ProfileForm from "../components/ProfileForm";
import { auth } from "../components/firebase/config";

import UserProfile from "../components/UserProfile";
import { useUserProfile } from "../hooks/useUserProfile";

const Profile = () => {
  const uid = auth.currentUser?.uid;
  const { profile, isLoading, fetchUserProfile } = useUserProfile();

  useEffect(() => {
    fetchUserProfile();
    console.log(profile);
  }, []);

  if (isLoading) {
    return <p className="text-center">Loading profile...</p>;
  }

  return (
    <section className="max-w-3xl mx-auto px-4 py-10 bg-[#feffec]">
      <div className="mb-6 mt-24 text-center">
        <h2 className="text-4xl text-gray-700 tracking-widest mb-8 uppercase">
          Profile
        </h2>
        <p className="text-xs text-gray-700 tracking-widest mb-8 italic">
          Enter your details.
        </p>
      </div>
      <hr />

      {profile ? <UserProfile /> : <ProfileForm userId={uid} />}
    </section>
  );
};

export default Profile;
