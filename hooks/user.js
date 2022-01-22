import fetcher from "../utils/fetcher";

const baseEndpoint = "http://localhost:3000/user";

const useUser = () => {
  const saveUser = (username) => {
    fetch(`${baseEndpoint}/create`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username }),
    }).then((r) => {
      console.log({ r });
    });
  };

  return {
    selectors: {},
    actions: {
      saveUser,
    },
  };
};

export default useUser;
