import { UserCard } from "./components/UserCard";
import "./styles.css";
import { useAllUsers } from "./hooks/useAllUsers";

export default function App() {
  const { onClickFetchUser, userProfiles, isLoading, isError } = useAllUsers();

  return (
    <div className="App">
      <button onClick={onClickFetchUser}>DATA</button>
      <br />
      {isError ? (
        <p style={{ color: "red" }}>Failed</p>
      ) : isLoading ? (
        <p>Loading...</p>
      ) : (
        <>
          {userProfiles.map((user) => (
            <UserCard key={user.id} user={user} />
          ))}
        </>
      )}
    </div>
  );
}
