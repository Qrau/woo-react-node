import axios from "axios";
import { useEffect } from "react";

const GetWooUserId = (url, token, userIdCall, setUserIdCall) => {
  const { call } = userIdCall;
  const handleCall = () => {
    setUserIdCall((userIdCall) => ({
      ...userIdCall,
      loading: true,
    }));
    axios
      .get(url, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((resp) => {
        if (resp.status === 200) {
          setUserIdCall((userIdCall) => ({
            ...userIdCall,
            userId: resp.data.id,
            userLink: resp.data.link,
            success: true,
            error: "",
          }));
        }
      })
      .catch((err) =>
        setUserIdCall((userIdCall) => ({
          ...userIdCall,
          error: err,
          loading: false,
          success: false,
        }))
      );
  };

  useEffect(() => {
    if (call) {
      handleCall();
    }
    return () => {
      setUserIdCall((userIdCall) => ({
        ...userIdCall,
        call: false,
        loading: false,
        success: false,
      }));
    };
  }, [call]);
};

export default GetWooUserId;
