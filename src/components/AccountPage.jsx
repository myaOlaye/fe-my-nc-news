// this should be a protected route
import { useEffect, useContext } from "react";
import { AuthContext } from "../contexts/AuthProvider";
import { getUser } from "../api";

export const AccountPage = () => {
  //   const { auth } = useContext(AuthContext);

  //   console.log(auth);

  //   useEffect(() => {
  //     getUser(auth.username).then((res) => {
  //       console.log(res);
  //     });
  //   }, []);

  return <p>This is Account page</p>;
};
