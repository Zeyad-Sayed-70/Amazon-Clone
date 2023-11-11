import axios from "axios";
import BACKEND_URL from "@/constants/backend";
import { useState } from "react";

interface Login {
  email: string;
  password: string;
}

export default function useLogin() {
  const [error, setError] = useState("");

  async function loginUser(login: Login) {
    const res = await axios.post(`${BACKEND_URL}/user/signin`, login);

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
    loginUser,
  };
}
