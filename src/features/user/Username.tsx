import { useSelector } from "react-redux";

type UserState = {
  user: {
    username: string;
  };
};

function Username() {
  const username = useSelector((state: UserState) => state.user.username);

  if (!username) return null;

  return (
    <div className="hidden text-sm font-semibold md:block">{username}</div>
  );
}

export default Username;
