import { useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();

  return (
    <div>
      <h1>Route Error</h1>
      <p>{String(error)}</p>
    </div>
  );
};

export default Error;
