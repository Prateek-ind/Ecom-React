import  { useEffect } from "react";
import ProfileForm from "../components/ProfileForm";

import UserProfile from "../components/UserProfile";
import { useUserProfile } from "../hooks/useUserProfile";
import { useSelector } from "react-redux";

const Profile = () => {
  const { isLoading, fetchUserProfile } = useUserProfile();
  const profile = useSelector((state) => state.userProfile);
  console.log(profile)
  const {isLoggedIn, uid} = useSelector((state) => state.user);

  useEffect(() => {
    if (isLoggedIn && uid && !profile.isLoaded) {
       fetchUserProfile();
      
    }
  }, [isLoggedIn, uid, fetchUserProfile]);


  if (!isLoggedIn) return <p>Please login to view your profile</p>;

  return (
    <section className="w-full mx-auto py-10 bg-[#feffec]">
      <div className="mb-6 mt-28 text-center">
        <h2 className="text-4xl text-gray-700 tracking-widest mb-8 uppercase">
          Profile
        </h2>
        {!isLoggedIn && <p className="text-xs text-gray-700 tracking-widest mb-8 italic">
          Enter your details.
        </p>}
      </div>
      <hr />

      {profile?.isLoaded && (profile.firstName || profile.lastName) ? (
        <UserProfile profile={profile} />
      ) : (
        <ProfileForm />
      )}
    </section>
  );
};

export default Profile;
