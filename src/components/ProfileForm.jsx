import { Form, useNavigate } from "react-router";
import { useUserProfile } from "../hooks/useUserProfile";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

const ProfileForm = ({ defaultValues, onSave, onCancel }) => {
  const navigate = useNavigate();
  const { storeUserProfile } = useUserProfile();
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    address: "",
    addressOptional: "",
    city: "",
    state: "",
    pinCode: "",
    country: "India",
    phoneNumber: "",
  });

  useEffect(() => {
    if (defaultValues) {
      setFormValues((prev) => ({ ...prev, ...defaultValues }));
    }
  }, [defaultValues]);

  const handleChange = (e) => {
    setFormValues((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const savedProfile = await storeUserProfile(formValues);
    if (savedProfile && onSave) {
      onSave(savedProfile);
      navigate("/profile");
    } else {
      navigate("/");
    }
  };

  return (
    <form
      className="w-full mt-10 flex flex-col items-center justify-center space-y-6"
      onSubmit={handleSubmit}
    >
      <section className="">
        <div className="grid grid-cols-2 gap-4">
          <input
            type="text"
            name="firstName"
            className="border px-2 py-4 w-full rounded"
            placeholder="First Name"
            onChange={handleChange}
            value={formValues.firstName}
            required
          />
          <input
            type="text"
            name="lastName"
            className="border px-2 py-4 w-full rounded"
            placeholder="Last Name"
            onChange={handleChange}
            value={formValues.lastName}
            required
          />

          <input
            type="text"
            name="address"
            className="col-span-2 border px-2 py-4 w-full rounded"
            placeholder="Address"
            onChange={handleChange}
            value={formValues.address}
            required
          />
          <input
            type="text"
            name="addressOptional"
            className=" col-span-2 border px-2 py-4 w-full rounded"
            placeholder="Apartment/Flat No. etc (Optional) "
            onChange={handleChange}
            value={formValues.addressOptional}
            required
          />
          <input
            type="text"
            name="city"
            className="border px-2 py-4 w-full rounded"
            placeholder="City"
            onChange={handleChange}
            value={formValues.city}
            required
          />
          <input
            type="text"
            name="state"
            className="border px-2 py-4 w-full rounded"
            placeholder="State"
            onChange={handleChange}
            value={formValues.state}
            required
          />
          <input
            type="text"
            name="pinCode"
            className="border px-2 py-4 w-full rounded"
            placeholder="Pin-code"
            onChange={handleChange}
            value={formValues.pinCode}
            required
          />
          <select
            name="country"
            className="border px-2 py-4 rounded w-full "
            value="India"
            onChange={handleChange}
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
            value={formValues.phoneNumber}
            onChange={handleChange}
            className="border px-2 py-4 w-full rounded"
          />
        </div>
      </section>
      <div className="flex gap-4">
        <button
          type="submit"
          disabled={!isLoggedIn}
          className="w-full max-w-3xl bg-[#63ce36] text-white 
        text-lg px-8 py-2 uppercase font-semibold hover:bg-[#57b92d] hover:scale-105"
        >
          Save
        </button>
        <button
          type="button"
          onClick={onCancel}
          className="w-full max-w-3xl bg-red-500 text-white 
        text-lg px-8 py-2 uppercase font-semibold hover:bg-red-700 hover:scale-105"
        >
          Cancel
        </button>
      </div>
    </form>
  );
};

export default ProfileForm;
