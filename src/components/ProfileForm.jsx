import { Form, useNavigate } from "react-router";
import { useUserProfile } from "../hooks/useUserProfile";

const ProfileForm = ({ defaultValues, userId }) => {
  const navigate = useNavigate();
  const { storeUserProfile } = useUserProfile();
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const userInfo = Object.fromEntries(formData.entries());
    console.log(userInfo);

    await storeUserProfile({ uid: userId, userDetails: userInfo });
    navigate("/");
  };

  return (
    <Form className="space-y-6 " onSubmit={handleSubmit}>
      <section>
        <div className="grid grid-cols-2 gap-4">
          <input
            type="text"
            name="firstName"
            className="border px-2 py-4 w-full rounded"
            placeholder="First Name"
            defaultValue={defaultValues?.firstName}
            required
          />
          <input
            type="text"
            name="lastName"
            className="border px-2 py-4 w-full rounded"
            placeholder="Last Name"
            defaultValue={defaultValues?.lastName}
            required
          />

          <input
            type="text"
            name="address"
            className="col-span-2 border px-2 py-4 w-full rounded"
            placeholder="Address"
            defaultValue={defaultValues?.address}
            required
          />
          <input
            type="text"
            name="addressOptional"
            className=" col-span-2 border px-2 py-4 w-full rounded"
            placeholder="Apartment/Flat No. etc (Optional) "
            defaultValue={defaultValues?.addressOptional}
            required
          />
          <input
            type="text"
            name="city"
            className="border px-2 py-4 w-full rounded"
            placeholder="City"
            defaultValue={defaultValues?.city}
            required
          />
          <input
            type="text"
            name="state"
            className="border px-2 py-4 w-full rounded"
            placeholder="State"
            defaultValue={defaultValues?.state}
            required
          />
          <input
            type="text"
            name="pinCode"
            className="border px-2 py-4 w-full rounded"
            placeholder="Pin-code"
            defaultValue={defaultValues?.pinCode}
            required
          />
          <select
            name="country"
            className="border px-2 py-4 rounded w-full "
            defaultValue="India"
            required
          >
            <option value="Select Country/Region" required>
              - Select Country/Region
            </option>
            <option>India</option>
          </select>
          <input
            type="number"
            name="phoneNumber"
            id="phone-number"
            placeholder="Phone number"
            defaultValue={defaultValues?.phoneNumber}
            className="border px-2 py-4 w-full rounded"
          />
        </div>
      </section>
      <button
        type="submit"
        className="w-full bg-[#63ce36] text-white text-lg px-8 py-2 uppercase font-semibold hover:bg-[#57b92d] hover:scale-105"
      >
        Submit
      </button>
    </Form>
  );
};

export default ProfileForm;
