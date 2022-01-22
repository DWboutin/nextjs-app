import "bootstrap/dist/css/bootstrap.css";
import useUser from "../hooks/user";

export default function Home() {
  const {
    selectors: { username, users },
    actions: { setUsername, handleFormSubmit },
  } = useUser();

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
              value={username}
              onChange={(e) => {
                setUsername(e.target.value);
              }}
            />
          </div>
          <button
            type="button"
            className="btn btn-primary"
            disabled={username.length === 0}
            onClick={handleFormSubmit}
          >
            Submit
          </button>
        </div>
      </div>
      {users.length > 0 && (
        <div className="row justify-content-md-center">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">id</th>
                <th scope="col">Username</th>
              </tr>
            </thead>
            <tbody>
              {users.map(({ _id, username }) => (
                <tr key={_id}>
                  <th scope="row">{_id}</th>
                  <td>{username}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </main>
  );
}
