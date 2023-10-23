import { FaEye, FaPen, FaTrash } from "react-icons/fa6";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const CoffeeCard = ({ coffee, coffees, setCoffees }) => {
  const { _id, name, chef, country, category, price, photo } = coffee;

  // delete function
  const handleDelete = (_id) => {
    // console.log(_id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/coffee/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
            }
            const remaining = coffees.filter((coffee) => coffee._id !== _id);
            setCoffees(remaining);
          });
      }
    });
  };
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
          <Link to={`/coffeeDetails/${_id}`}>
            <button className="btn btn-square btn-info mb-3">
              <FaEye />
            </button>
          </Link>
          <button className="btn btn-square btn-warning mb-3">
            <FaPen />
          </button>
          <button
            onClick={() => handleDelete(_id)}
            className="btn btn-square btn-error"
          >
            <FaTrash />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;
