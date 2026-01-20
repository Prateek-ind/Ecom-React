import { useCallback, useState } from "react";
import {
  fetchUserDetailsFromDb,
  storeUserDetailsToDb,
} from "../features/users/userAPI";
import { useDispatch, useSelector } from "react-redux";
import { profileActions } from "../features/users/profileSlice";

export const useUserProfile = () => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const uid = useSelector((state) => state.user.uid);
  console.log(uid)

  const fetchUserProfile = useCallback(async () => {
    if (!uid) {
      console.log('uid not found')
      return null;
    }
    setIsLoading(true);
    try {
      const data = await fetchUserDetailsFromDb(uid);
      dispatch(profileActions.setProfile(data));
      console.log(data);
      return data;
    } catch (error) {
      console.error("Error fetching user profile:", error.message);
      throw new Error(error.message);
    } finally {
      setIsLoading(false);
    }
  }, [uid, dispatch]);

  const storeUserProfile = useCallback(
    async (userDetails) => {
      if (!uid) {
         console.log("storeUserProfile called without uid");
  return null;
      }
      setIsLoading(true);
      try {
        await storeUserDetailsToDb(userDetails, uid);
        dispatch(profileActions.setProfile(userDetails));
        return userDetails
      } catch (error) {
        console.error("Error storing user profile:", error.message);
        throw new Error(error.message);
      } finally {
        setIsLoading(false);
      }
    },
    [uid, dispatch]
  );
  return { isLoading, fetchUserProfile, storeUserProfile };
};
