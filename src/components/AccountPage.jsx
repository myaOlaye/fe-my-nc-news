import { useEffect, useContext, useState } from "react";
import { AuthContext } from "../contexts/AuthProvider";
import { getUser } from "../api";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

//should make this a protected route eventually - or users will always see "loading"
export const AccountPage = () => {
  const { auth } = useContext(AuthContext);
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState({});

  useEffect(() => {
    if (auth.accessToken) {
      setLoading(false);
      const decodedToken = jwtDecode(auth.accessToken);
      const username = decodedToken.username;
      getUser(username, auth.accessToken).then(({ user }) => {
        setUser(user);
      });
    } else {
      setLoading(true);
    }
  }, [auth]);

  console.log(user);

  return (
    <>
      {loading ? (
        <p>Loading...</p>
      ) : user ? (
        <>
          <h1>Your Account</h1>
          <div style={styles.container}>
            <div style={styles.avatarContainer}>
              <img src={user.avatar_url} alt="Avatar" style={styles.avatar} />
            </div>
            <div style={styles.userInfo}>
              <p style={styles.username}>{user.username}</p>
              <p>{user.name}</p>
              <p>{user.email}</p>
            </div>
          </div>
        </>
      ) : (
        <p>No user data found</p>
      )}
    </>
  );
};

const styles = {
  container: {
    display: "flex",
    alignItems: "center",
    padding: "20px",
    border: "1px solid #ddd",
    borderRadius: "8px",
    boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
    marginTop: "2rem",
  },
  avatarContainer: {
    marginRight: "20px",
  },
  avatar: {
    width: "80px",
    height: "80px",
    borderRadius: "50%",
    objectFit: "cover",
  },
  userInfo: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  username: {
    fontWeight: "bold",
    fontSize: "1.2rem",
    marginBottom: "5px",
  },
};
