import axios from "axios";
import toast from "react-hot-toast";
import { AppContext } from "../context/AppContext";
import { useClerk } from "@clerk/clerk-react";


const {getToken} = useClerk()

export const placedOrder = async({planId, getToken, onSuccess, backendUrl}) => {
    try {
        const token = getToken();
        const response = await axios.post(
            `${backendUrl}/orders?planId=${planId}`,
            {},
            {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
        )
        if(response.status === 201 ){
            initializePayment({order: response.data.data, getToken, onSuccess});
        }
    } catch (error) {
        
    }
}