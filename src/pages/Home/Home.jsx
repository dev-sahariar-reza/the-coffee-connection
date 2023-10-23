import React, { useState } from "react";
import Hero from "../Hero/Hero";
import Follow from "../Follow/Follow";
import { Link, useLoaderData } from "react-router-dom";
import { FaMugHot } from "react-icons/fa6";
import CoffeeCard from "../../components/CoffeeCard/CoffeeCard";

const Home = () => {
  const loadedCoffees = useLoaderData();
  const [coffees, setCoffees] = useState(loadedCoffees);
  return (
    <>
      <Hero />
      <section className="container mx-auto my-12">
        <h1 className="text-center font-bold text-3xl mb-6">
          Our Popular Products
        </h1>

        <div className="text-center mb-12">
          <Link to="/addCoffee">
            <button className="btn">
              Add Coffee <FaMugHot />
            </button>
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-10">
          {coffees.map((coffee) => (
            <CoffeeCard
              key={coffee._id}
              coffee={coffee}
              coffees={coffees}
              setCoffees={setCoffees}
            />
          ))}
        </div>
      </section>
      <Follow />
    </>
  );
};

export default Home;
