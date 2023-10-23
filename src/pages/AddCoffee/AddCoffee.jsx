import { Link } from "react-router-dom";
import { FaArrowLeftLong, FaMugHot } from "react-icons/fa6";
import Swal from "sweetalert2";

const AddCoffee = () => {
  // add coffee function
  const handleAddCoffee = (event) => {
    // prevent form loading
    event.preventDefault();

    // get data
    const form = event.target;
    const name = form.name.value;
    const chef = form.chef.value;
    const country = form.country.value;
    const category = form.category.value;
    const price = form.price.value;
    const photo = form.photo.value;

    const newCoffee = { name, chef, country, category, price, photo };
    // console.log(newCoffee);

    // fetch data
    fetch("http://localhost:5000/coffee", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        if (data.insertedId) {
          Swal.fire("Successful!", "You added a new coffee!", "success");
          form.reset();
        }
      });
  };

  return (
    <section className="container mx-auto my-14">
      <div>
        <Link to="/" className="font-bold text-2xl flex items-center mb-6">
          <FaArrowLeftLong /> <span className="ml-3">Back to home</span>
        </Link>
      </div>

      <h1 className="text-3xl text-center font-bold mb-10 underline">
        Add New Coffee
      </h1>

      <form onSubmit={handleAddCoffee}>
        <div className="grid grid-cols-2 gap-5">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text font-bold">Name</span>
            </label>
            <input
              className="input input-bordered w-full"
              type="text"
              placeholder="Enter Coffee Name"
              name="name"
            />
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text font-bold">Chef</span>
            </label>
            <input
              className="input input-bordered w-full"
              type="text"
              placeholder="Enter Chef Name"
              name="chef"
            />
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text font-bold">Country of Origin</span>
            </label>
            <input
              className="input input-bordered w-full"
              type="text"
              placeholder="Enter Country of Origin"
              name="country"
            />
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text font-bold">Category</span>
            </label>
            <input
              className="input input-bordered w-full"
              type="text"
              placeholder="Enter Category"
              name="category"
            />
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text font-bold">Price</span>
            </label>
            <input
              className="input input-bordered w-full"
              type="text"
              placeholder="Enter Price"
              name="price"
            />
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text font-bold">Photo</span>
            </label>
            <input
              className="input input-bordered w-full"
              type="text"
              placeholder="Enter Photo URL"
              name="photo"
            />
          </div>
        </div>
        <button className="btn btn-block mt-8">
          Add Coffee <FaMugHot />
        </button>
      </form>
    </section>
  );
};

export default AddCoffee;
