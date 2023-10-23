import { Link } from "react-router-dom";
import { FaMugHot } from "react-icons/fa6";

const Coffees = () => {
  return (
    <section className="container mx-auto my-12">
      <h1 className="text-center font-bold text-3xl mb-6">
        Our Popular Products
      </h1>

      <div className="text-center mb-6">
        <Link to="/addCoffee">
          <button className="btn">
            Add Coffee <FaMugHot />
          </button>
        </Link>
      </div>

      <div className="grid grid-cols-2 gap-6"></div>
    </section>
  );
};

export default Coffees;
