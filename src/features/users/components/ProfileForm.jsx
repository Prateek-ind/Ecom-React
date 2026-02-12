import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { storeUserDetailsToDb } from "../userAPI";
import { queryClient } from "../../../utils/queryClient";

const ProfileForm = ({ defaultValues, onCancel }) => {
  const { uid, isLoggedIn } = useSelector((state) => state.auth);
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

  const mutation = useMutation({
    mutationFn: (userDetails) => storeUserDetailsToDb(userDetails, uid),
    onMutate: async (newData) => {
      await queryClient.cancelQueries(["profile", uid]);

      const previous = queryClient.getQueryData(["profile", uid]);

      queryClient.setQueryData(["profile", uid], newData);

      return { previous };
    },
    onError: (context) => {
      queryClient.invalidateQueries(["profile", uid], context.previous);
    },

    onSettled: () => {
      queryClient.invalidateQueries(["profile", uid]);
    },

    onSuccess: () => {
      onCancel?.();
    },
  });

  const handleChange = (e) => {
    setFormValues((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await mutation.mutateAsync(formValues);
    } catch (error) {
      console.error(error.message);
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
          {mutation.isPending ? "Saving..." : "Save"}
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
