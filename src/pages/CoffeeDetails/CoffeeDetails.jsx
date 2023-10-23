import { FaArrowLeftLong } from "react-icons/fa6";
import { Link, useLoaderData } from "react-router-dom";

const CoffeeDetails = () => {
  const coffeeData = useLoaderData();
  const { _id, name, chef, country, category, price, photo } = coffeeData;

  return (
    <section className="container mx-auto my-12">
      <div>
        <Link to="/" className="font-bold text-2xl flex items-center mb-6">
          <FaArrowLeftLong /> <span className="ml-3">Back to home</span>
        </Link>
      </div>
      <div className="card card-side glass">
        <figure>
          <img
            src={photo}
            alt="Coffee picture"
            className="w-[300px] h-[300px]"
          />
        </figure>
        <div className="card-body">
          <p className="mb-3">
            <span className="font-bold">Name: </span>
            {name}
          </p>
          <p className="mb-3">
            <span className="font-bold">Chef: </span>
            {chef}
          </p>
          <p className="mb-3">
            <span className="font-bold">Country: </span>
            {country}
          </p>
          <p className="mb-3">
            <span className="font-bold">Category: </span>
            {category}
          </p>
          <p className="mb-3">
            <span className="font-bold">Price: </span>
            {price}
          </p>
        </div>
      </div>
    </section>
  );
};

export default CoffeeDetails;
