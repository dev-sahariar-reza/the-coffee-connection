import { Link, useRouteError } from "react-router-dom";
import errorImage from "../../assets/error/error.jpg";

const Error = () => {
  const { error } = useRouteError();
  return (
    <section className="my-10">
      <div className="w-1/4 mx-auto mb-8">
        <img src={errorImage} alt="error picture" className="rounded-lg" />
      </div>

      <div className="text-center mb-5">
        <p className="text-center font-bold text-3xl mb-8">{error?.message}</p>
        <Link to="/">
          <button className="btn btn-primary">Go Home</button>
        </Link>
      </div>
    </section>
  );
};

export default Error;
