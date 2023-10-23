import { Link } from "react-router-dom";
import { FaArrowLeftLong, FaMugHot } from "react-icons/fa6";

const UpdateCoffee = () => {
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

      <form>
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
          Update Coffee <FaMugHot />
        </button>
      </form>
    </section>
  );
};

export default UpdateCoffee;
