
import ProfileForm from "@/features/users/components/ProfileForm";

import UserProfile from "@/features/users/components/UserProfile";
// import { useUserProfile } from "../hooks/useUserProfile";
import { useSelector } from "react-redux";
import ProfileSkeleton from "../features/users/components/ProfileSkeleton";
import { useQuery } from "@tanstack/react-query";
import { fetchUserDetailsFromDb } from "../features/users/userAPI";

const Profile = () => {
  const { uid, isLoggedIn } = useSelector((state) => state.auth);

  const {
    data: profile,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["profile", uid],
    queryFn: () => fetchUserDetailsFromDb(uid),
    enabled: !!uid && isLoggedIn,
  });

  if (!isLoggedIn) return <p>Please login to view your profile</p>;

  const isProfileEmpty =
    !profile || (!profile.firstName && !profile.lastName && !profile.address);

  if (isLoading) {
    return <ProfileSkeleton />;
  }

  let content;

  if (isError) {
    content = (
      <>
        <div className="mb-6 mt-28 text-center">
          <p>Error fetching profile details!!!</p>
          <p>{error.message}</p>
        </div>
      </>
    );
  }

  if (profile) {
    content = (
      <>
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
      </>
    );
  }

  return (
    <section className="w-full mx-auto py-10 bg-[#feffec]">
      {content}
      <hr />

      {isProfileEmpty ? <ProfileForm /> : <UserProfile profile={profile} />}
    </section>
  );
};

export default Profile;
