import { useAuth, useClerk, useUser } from '@clerk/clerk-react';
import React, { createContext, useState } from 'react';
import { toast } from 'react-hot-toast';
import axios from "axios";
import { useNavigate } from 'react-router-dom';

export const AppContext = createContext();

const AppContextProvider = (props) => {

    const backendUrl = import.meta.env.VITE_BACKEND_URL;
    const [credits, setCredits] = useState(false);
    const { getToken } = useAuth();
    const [image, setImage] = useState(false);
    const [resultImage, setResultImage] = useState(false);
    const { isSignedIn } = useUser();
    const { openSignIn } = useClerk();
    const navigate = useNavigate();

    const removeBg = async (selectedImage) => {
        try {
            if (!isSignedIn) {
                return openSignIn();
            }

            setImage(selectedImage);
            setResultImage(false);
            navigate("/result");

            const token = await getToken();
            const formdata = new FormData();

            selectedImage && formdata.append("file", selectedImage);

            const { data: base64Image } = await axios.post(
                `${backendUrl}/images/remove-background`,
                formdata,
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            );

            setResultImage(`data:image/png;base64,${base64Image}`);
            setCredits((prev) => prev - 1);

        } catch (error) {
            toast.error("Failed to remove background");
            console.error(error);
        }
    };

    const loadUserCredits = async () => {
        try {
            const token = await getToken();
            const response = await axios.get(
                `${backendUrl}/users/credits`,
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            );

            if (response.data.success) {
                setCredits(response.data.data.credits);
            } else {
                toast.error("Error loading credits.");
            }
        } catch (error) {
            toast.error("Error loading credits.");
            console.log(error);
        }
    };

    const contextValue = {
        credits, setCredits,
        image, setImage,
        resultImage, setResultImage,
        backendUrl,
        loadUserCredits,
        removeBg,
    };

    return (
        <AppContext.Provider value={contextValue}>
            {props.children}
        </AppContext.Provider>
    );
};

export default AppContextProvider;
