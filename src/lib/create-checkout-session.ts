import BACKEND_URL from "@/constants/backend";
import axios from "axios";

interface Data {
  quantity: number;
  product: Product;
}

export const create_checkout_session = async (data: Data[]) => {
  const res = await axios.post(`${BACKEND_URL}/create-checkout-session`, {
    data,
  });
  console.log(res);
  window.location = res.data.url.url;
};
