import { useRouteError } from "react-router-dom";
import LinkButton from "./LinkButton";

type CustomError = {
  status: number;
  statusText: string;
  internal: boolean;
  data: string;
  error: Error;
  message: string;
};

function Error() {
  const error = useRouteError() as CustomError;

  console.log(error);

  return (
    <div>
      <h1>Something went wrong 😢</h1>
      <p>{error.data || error.message}</p>

      <LinkButton to="-1">&larr; Go back</LinkButton>
    </div>
  );
}

export default Error;
