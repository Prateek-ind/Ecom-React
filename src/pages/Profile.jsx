import { useEffect } from "react";
import ProfileForm from "../components/ProfileForm";

import UserProfile from "../components/UserProfile";
import { useUserProfile } from "../hooks/useUserProfile";
import { useSelector } from "react-redux";

const Profile = () => {
  const { fetchUserProfile } = useUserProfile();
  const profile = useSelector((state) => state.userProfile.data);
  const isLoaded = useSelector((state) => state.userProfile.isLoaded);
  const { isLoggedIn, uid } = useSelector((state) => state.user);
  useEffect(() => {
    if (isLoggedIn && uid && !isLoaded) {
      fetchUserProfile();
    }
  }, [isLoggedIn, uid, fetchUserProfile]);

  if (!isLoggedIn) return <p>Please login to view your profile</p>;

  const isProfileEmpty =
    !profile || (!profile.firstName && !profile.lastName && !profile.address);

  if (!isLoaded) {
    return <p className="text-center mt-20 text-xl">Loading profile...</p>;
  }

  return (
    <section className="w-full mx-auto py-10 bg-[#feffec]">
      <div className="mb-6 mt-28 text-center">
        <h2 className="text-4xl text-gray-700 tracking-widest mb-8 uppercase">
          Profile
        </h2>
        {!isLoggedIn && (
          <p className="text-xs text-gray-700 tracking-widest mb-8 italic">
            Enter your details.
          </p>
        )}
      </div>
      <hr />

      {isProfileEmpty ? <ProfileForm /> : <UserProfile profile={profile} />}
    </section>
  );
};

export default Profile;
