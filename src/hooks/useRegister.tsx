import axios from "axios";
import BACKEND_URL from "@/constants/backend";
import { useState } from "react";

interface Register {
  username: string;
  email: string;
  password: string;
}

export default function useRegister() {
  const [error, setError] = useState("");

  async function registerUser(register: Register) {
    const res = await axios.post(`${BACKEND_URL}/user/register`, register);

    if (res.status >= 300) {
      setError(res.data.message);
      return res.data.message;
    }

    // store token in localstorage
    const token: string = res.data.token;
    localStorage.setItem("token", token);

    // redirect to home page
    location.href = "/";
    return null;
  }

  return {
    error,
    registerUser,
  };
}
