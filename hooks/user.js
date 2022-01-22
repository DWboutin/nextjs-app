import { useEffect, useState } from "react";
import fetcher from "../utils/fetcher";

const baseEndpoint = "http://localhost:3000/user";

const useUser = () => {
  const [username, setUsername] = useState("");
  const [users, setUsers] = useState([]);
  const saveUser = async (username) => {
    const result = await fetch(`${baseEndpoint}/create`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username }),
    });

    return result;
  };

  const fetchUser = async () => {
    fetch(`${baseEndpoint}/read`)
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
      });
  };

  const handleFormSubmit = async () => {
    await saveUser(username);
    fetchUser();
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return {
    selectors: {
      username,
      users,
    },
    actions: {
      saveUser,
      fetchUser,
      setUsername,
      handleFormSubmit,
    },
  };
};

export default useUser;
