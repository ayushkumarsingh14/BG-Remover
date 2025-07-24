import axios from "axios";
import toast from "react-hot-toast";

// Main function to call when buying credits
export const placedOrder = async ({ planId, getToken, onSuccess, backendUrl }) => {
  try {
    console.log("📦 Sending request to backend to create Razorpay order...");

    // Ensure Razorpay SDK is loaded
    if (!window.Razorpay) {
      toast.error("Razorpay SDK not loaded 😵");
      return;
    }

    // Get Auth Token
    const token = await getToken();

    // Create Razorpay order from backend
    const response = await axios.post(
      `${backendUrl}/orders?planId=${planId}`,
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    console.log("✅ Order API Response:", response);

    // Check status and proceed with payment
    const orderData = response?.data?.data;
    if (response.status === 200 || response.status === 201) {
      initializePayment({
        order: orderData,
        getToken,
        onSuccess,
        backendUrl,
      });
    } else {
      toast.error("Failed to create Razorpay order");
      console.warn("⚠️ Unexpected status:", response.status);
    }

  } catch (error) {
    toast.error(error?.response?.data?.message || "Order placement failed");
    console.error("❌ Error while placing order:", error);
  }
};

// Razorpay payment function
const initializePayment = ({ order, getToken, onSuccess, backendUrl }) => {
  console.log("⚙️ Initializing Razorpay Payment with:", order);

  const options = {
    key: import.meta.env.VITE_RAZORPAY_KEY_ID, // Make sure it's set in .env
    amount: order.amount,
    currency: order.currency,
    name: "AyushMart",
    description: "Credit Purchase",
    order_id: order.id,
    handler: async (paymentDetails) => {
      console.log("💳 Payment successful:", paymentDetails);
      try {
        const token = await getToken();

        const response = await axios.post(
          `${backendUrl}/orders/verify`,
          paymentDetails,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (response.status === 200) {
          toast.success("✅ Credits added successfully!");
          onSuccess?.(); // Run success callback
        } else {
          toast.error("⚠️ Payment verification failed");
          console.warn("⚠️ Verification response:", response);
        }

      } catch (error) {
        toast.error(error?.response?.data?.message || "❌ Verification error");
        console.error("❌ Razorpay Verification Error:", error);
      }
    },
    prefill: {
      name: "Ayush Kumar",
      email: "ayush@example.com",
      contact: "9999999999",
    },
    theme: {
      color: "#0f172a",
    },
  };

  const razorpayInstance = new window.Razorpay(options);
  razorpayInstance.open();
};
