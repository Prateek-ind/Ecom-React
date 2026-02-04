const SkeletonBlock = ({ height = "h-5", width = "w-full" }) => (
  <div className={`${height} ${width} bg-gray-200 rounded-md animate-pulse`} />
);

const ProfileSkeleton = () => {
  return (
    <section className="w-full mx-auto py-10 bg-[#feffec]">
      <div className="max-w-xl mx-auto bg-white rounded-2xl shadow-sm px-6 py-8">
        <div className="space-y-6 text-center">
          {/* First Name */}
          <div>
            <SkeletonBlock height="h-3" width="w-24 mx-auto" />
            <div className="mt-2">
              <SkeletonBlock height="h-6" width="w-40 mx-auto" />
            </div>
          </div>
          {/* Last Name */}
          <div>
            <SkeletonBlock height="h-3" width="w-24 mx-auto" />
            <div className="mt-2">
              <SkeletonBlock height="h-6" width="w-40 mx-auto" />
            </div>
          </div>

          <hr className="opacity-30" />

          {/* Phone */}
          <div>
            <SkeletonBlock height="h-3" width="w-20 mx-auto" />
            <div className="mt-2">
              <SkeletonBlock height="h-6" width="w-36 mx-auto" />
            </div>
          </div>

          <hr className="opacity-30" />

          {/* Address */}
          <div>
            <SkeletonBlock height="h-3" width="w-24 mx-auto" />
            <div className="mt-2 space-y-2">
              <SkeletonBlock height="h-4" width="w-full" />
              <SkeletonBlock height="h-4" width="w-5/6 mx-auto" />
            </div>
          </div>

          {/* Additional Address */}
          <div>
            <SkeletonBlock height="h-3" width="w-40 mx-auto" />
            <div className="mt-2">
              <SkeletonBlock height="h-4" width="w-5/6 mx-auto" />
            </div>
          </div>

          {/* City + State */}
          <div className="grid grid-cols-2 gap-6 pt-2">
            <div>
              <SkeletonBlock height="h-3" width="w-16 mx-auto" />
              <div className="mt-2">
                <SkeletonBlock height="h-5" width="w-24 mx-auto" />
              </div>
            </div>

            <div>
              <SkeletonBlock height="h-3" width="w-16 mx-auto" />
              <div className="mt-2">
                <SkeletonBlock height="h-5" width="w-24 mx-auto" />
              </div>
            </div>
          </div>

          {/* Pin Code */}
          <div>
            <SkeletonBlock height="h-3" width="w-24 mx-auto" />
            <div className="mt-2">
              <SkeletonBlock height="h-5" width="w-24 mx-auto" />
            </div>
          </div>

          {/* Button */}
          <div className="pt-6">
            <SkeletonBlock height="h-11" width="w-40 mx-auto rounded-full" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfileSkeleton;
