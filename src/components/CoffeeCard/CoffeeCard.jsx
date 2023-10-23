import { FaEye, FaPen, FaTrash } from "react-icons/fa6";

const CoffeeCard = ({ coffee, coffees, setCoffees }) => {
  const { _id, name, chef, country, category, price, photo } = coffee;
  return (
    <div className="card card-side glass">
      <figure>
        <img src={photo} alt="Coffee Picture" className="w-[250px] h-[250px]" />
      </figure>
      <div className="card-body grid grid-cols-2 justify-between items-center">
        <div>
          <h2 className="card-title mb-5">{name}</h2>
          <p className="mb-5">
            <span className="font-semibold">Category:</span> {category}
          </p>
          <p className="mb-5">
            <span className="font-semibold">Price:</span> {price}
          </p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <button className="btn btn-square btn-info mb-3">
            <FaEye />
          </button>
          <button className="btn btn-square btn-warning mb-3">
            <FaPen />
          </button>
          <button className="btn btn-square btn-error">
            <FaTrash />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;
