import BACKEND_URL from "@/constants/backend";
import axios from "axios";
import { useEffect, useState } from "react";

export default function useAuthentication() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userData, setUserData] = useState<UserData | null>(null);

  // Check Environment
  if (typeof window === "undefined")
    return {
      isAuthenticated,
      userData,
    };

  useEffect(() => {
    const userToken = localStorage.getItem("token");

    async function checkAuthentication() {
      const res = await axios.post(`${BACKEND_URL}/user/check`, {
        token: userToken,
      });

      if (res.status > 300) return setIsAuthenticated(false);

      if (res?.data.valid) {
        setIsAuthenticated(true);
        setUserData(res.data.userData);
      } else setIsAuthenticated(false);
    }

    if (userToken) checkAuthentication();
    else setIsAuthenticated(false);
  }, [setIsAuthenticated, setUserData]);

  return {
    isAuthenticated,
    userData,
  };
}
