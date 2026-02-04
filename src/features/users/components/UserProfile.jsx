import { useState } from "react";
import { useSelector } from "react-redux";
import ProfileForm from "./ProfileForm";
import { useUserProfile } from "@/hooks/useUserProfile";
import ProfileSkeleton from "./ProfileSkeleton";

const UserProfile = () => {
  const profile = useSelector((state) => state.userProfile.data);
  const isLoaded = useSelector((state) => state.userProfile.isLoaded);
  const [isEditing, setIsEditing] = useState(false);
  const { storeUserProfile } = useUserProfile();
  if (!isLoaded) {
    return <ProfileSkeleton />;
  }

  return (
    <section className="max-w-3xl mx-auto px-4 py-10 bg-[#feffec]">
      {isEditing ? (
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
        <div className="max-w-xl mx-auto bg-white rounded-2xl shadow-sm px-6 py-8">
          <div className="space-y-6 flex flex-col items-center text-center text-gray-700">
            {/* Name */}
            <div className="flex items-center gap-8">
              <div >
                <p className="text-xs uppercase tracking-widest text-gray-400">
                  First Name
                </p>
                <p className="text-lg font-medium mt-1">
                  {profile?.firstName || "—"}
                </p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-gray-400">
                  Last Name
                </p>
                <p className="text-lg font-medium mt-1">
                  {profile?.lastName || "—"}
                </p>
              </div>
            </div>

            <hr className="opacity-40" />

            {/* Contact */}
            <div>
              <p className="text-xs uppercase tracking-widest text-gray-400">
                Phone
              </p>
              <p className="text-lg font-medium mt-1">
                {profile?.phoneNumber || "—"}
              </p>
            </div>

            <hr className="opacity-40" />

            {/* Address */}
            <div>
              <p className="text-xs uppercase tracking-widest text-gray-400">
                Address
              </p>
              <p className="text-base mt-1 leading-relaxed">
                {profile?.address || "—"}
              </p>
            </div>

            {profile?.addressOptional && (
              <div>
                <p className="text-xs uppercase tracking-widest text-gray-400">
                  Additional Address
                </p>
                <p className="text-base mt-1 leading-relaxed">
                  {profile?.addressOptional}
                </p>
              </div>
            )}

            <div className="grid grid-cols-2 gap-6 pt-2">
              <div>
                <p className="text-xs uppercase tracking-widest text-gray-400">
                  City
                </p>
                <p className="text-base mt-1">{profile?.city || "—"}</p>
              </div>

              <div>
                <p className="text-xs uppercase tracking-widest text-gray-400">
                  State
                </p>
                <p className="text-base mt-1">{profile?.state || "—"}</p>
              </div>
            </div>

            <div>
              <p className="text-xs uppercase tracking-widest text-gray-400">
                Pin Code
              </p>
              <p className="text-base mt-1">{profile?.pinCode || "—"}</p>
            </div>

            {/* CTA */}
            <button
              onClick={() => setIsEditing(true)}
              className="mt-8 w-full max-w-xs mx-auto py-3 rounded-full
                 bg-[#63ce36] text-white font-medium
                 hover:bg-[#57b92d] transition"
            >
              Edit Profile
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default UserProfile;
