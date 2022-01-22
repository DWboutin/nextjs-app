import "bootstrap/dist/css/bootstrap.css";
import { useEffect, useState } from "react";
import useUser from "../hooks/user";

export default function Home() {
  const [username, setUsername] = useState("");
  const {
    actions: { saveUser },
  } = useUser();

  const handleSubmit = () => {
    saveUser(username);
  };

  return (
    <main className="container">
      <div className="row justify-content-md-center">
        <div className="col col-lg-6">
          <h1>Hello there!</h1>
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              Username
            </label>
            <input
              type="text"
              className="form-control"
              id="username"
              placeholder="General Kenobi"
              onChange={(e) => {
                setUsername(e.target.value);
              }}
            />
          </div>
          <button
            type="button"
            className="btn btn-primary"
            disabled={username.length === 0}
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
      </div>
    </main>
  );
}
