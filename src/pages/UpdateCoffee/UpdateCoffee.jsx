import { Link, useLoaderData } from "react-router-dom";
import { FaArrowLeftLong, FaMugHot } from "react-icons/fa6";
import Swal from "sweetalert2";

const UpdateCoffee = () => {
  const coffee = useLoaderData();
  const { _id, name, chef, country, category, price, photo } = coffee;

  // update coffee function
  const handleUpdatedCoffee = (event) => {
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

    const updatedCoffee = { name, chef, country, category, price, photo };
    // console.log(newCoffee);

    // fetch data
    fetch(
      `https://the-coffee-connection-server-fltn8secz-developer-sahariar-reza.vercel.app/coffee/${_id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedCoffee),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire("Successful!", "You updated the new coffee!", "success");
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
        Update Coffee
      </h1>

      <form onSubmit={handleUpdatedCoffee}>
        <div className="grid grid-cols-2 gap-5">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text font-bold">Name</span>
            </label>
            <input
              className="input input-bordered w-full"
              type="text"
              placeholder="Enter Coffee Name"
              defaultValue={name}
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
              defaultValue={chef}
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
              defaultValue={country}
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
              defaultValue={category}
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
              defaultValue={price}
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
              defaultValue={photo}
              name="photo"
            />
          </div>
        </div>
        <button className="btn btn-block mt-8">
          Update Coffee <FaMugHot />
        </button>
      </form>
    </section>
  );
};

export default UpdateCoffee;
