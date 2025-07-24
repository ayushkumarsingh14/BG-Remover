import React, { useContext, useEffect, useState } from 'react';
import { useAuth, useUser } from "@clerk/clerk-react";
import { AppContext } from '../context/AppContext';
import axios from "axios";
import { toast } from 'react-hot-toast';

const UserSyncHandler = () => {
  const { isLoading, isSignedIn, getToken } = useAuth();
  const { user } = useUser();
  const [synced, setSynced] = useState(false);
  const { backendUrl, loadUserCredits } = useContext(AppContext);

  useEffect(() => {
    const saveUser = async () => {
      if (isLoading || !isSignedIn || synced) return;

      try {
        const token = await getToken();
        console.log(token);
        

        const userData = {
          clerkId: user.id,
          email: user.primaryEmailAddress.emailAddress,
          firstName: user.firstName,
          lastName: user.lastName,
          photoUrl: user.imageUrl
        };

        const response = await axios.post(
          `${backendUrl}/users`,
          userData,
          {
            headers: {
              Authorization: `Bearer ${token}`,
              'Content-Type': 'application/json'
            }
          }
        );

        if (response.data.success) {
          toast.success("User synced successfully!");
          setSynced(true);
          await loadUserCredits();
        } else {
          toast.error("User sync failed. Try again!");
          setSynced(true);
        }

      } catch (error) {
        console.error("User sync error:", error);
        toast.error("😵‍💫 Something went wrong while syncing!");
      }
    };

    saveUser();
  }, [isLoading, isSignedIn, getToken, user, synced, backendUrl]);

  return null;
};

export default UserSyncHandler;
