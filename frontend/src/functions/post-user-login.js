import axios from "axios";
import { useEffect } from "react";

const PostUserLogin = (url, userLoginCall, setUserLoginCall) => {
  const { username, password, call } = userLoginCall;
  const handleCall = () => {
    setUserLoginCall((userLoginCall) => ({
      ...userLoginCall,
      loading: true,
    }));
    axios({
      method: "POST",
      url: url,
      data: { username, password },
    })
      .then((resp) => {
        if (resp.status === 200) {
          setUserLoginCall((userLoginCall) => ({
            ...userLoginCall,
            data: resp.data,
            loading: false,
            success: true,
            error: "",
          }));
        }
      })
      .catch((err) =>
        setUserLoginCall((userLoginCall) => ({
          ...userLoginCall,
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
      setUserLoginCall((userLoginCall) => ({
        ...userLoginCall,
        call: false,
        loading: false,
        success: false,
        password: "",
      }));
    };
  }, [call]);
};

export default PostUserLogin;
