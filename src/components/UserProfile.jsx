import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ProfileForm from "./ProfileForm";
import { useUserProfile } from "../hooks/useUserProfile";

const UserProfile = () => {
  const profile = useSelector((state) => state.userProfile.data);
  const isLoaded  = useSelector((state) => state.userProfile.isLoaded);
  const [isEditing, setIsEditing] = useState(false);
  const { isLoading, storeUserProfile } = useUserProfile();
  if (!isLoaded || isLoading) {
    return (
      <section className="max-w-3xl mx-auto px-4 py-10 bg-[#feffec]">
        <p className="text-2xl text-center mb-6">Loading your Profile...</p>
      </section>
    );
  }

  const isProfileEmpty =
    !profile.firstName &&
    !profile.lastName &&
    !profile.address &&
    !profile.phoneNumber;

  return (
    <section className="max-w-3xl mx-auto px-4 py-10 bg-[#feffec]">
      {isEditing && isProfileEmpty? (
        <ProfileForm
          userId={profile.userId}
          defaultValues={profile}
          onCancel={() => setIsEditing(false)}
          onSave={async (updatedProfile) => {
            await storeUserProfile(updatedProfile);
            setIsEditing(false);
          }}
        />
      ) : (
        <div className="space-y-4 text-gray-700">
          <p>
            <strong>First Name:</strong> {profile?.firstName}
          </p>

          <p>
            <strong>Last Name:</strong> {profile?.lastName}
          </p>

          <p>
            <strong>Phone:</strong> {profile?.phoneNumber}
          </p>

          <p>
            <strong>Address:</strong> {profile?.address}
          </p>
          <p>
            <strong>Additional Address:</strong> {profile?.addressOptional}
          </p>

          <p>
            <strong>City:</strong> {profile?.city}
          </p>

          <p>
            <strong>State:</strong> {profile?.state}
          </p>
          <p>
            <strong>Pin-Code:</strong> {profile?.pinCode}
          </p>

          <button
            onClick={() => setIsEditing(true)}
            className="mt-4 px-4 py-2 bg-[#63ce36] text-white rounded hover:bg-[#57b92d]"
          >
            Edit Profile
          </button>
        </div>
      )}
    </section>
  );
};

export default UserProfile;
