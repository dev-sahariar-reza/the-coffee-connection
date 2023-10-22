import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero container mx-auto my-10 relative h-[500px] rounded-lg">
      <h1 className="font-bold text-3xl text-white absolute top-10 right-5">
        Would you like a Cup of Delicious Coffee?
      </h1>
      <p className="font-semibold text-white text-justify w-1/2 absolute top-24 right-5">
        It's coffee time - Sip & Savor - Relaxation in every sip! Get the
        nostalgia back!! Your companion of every moment!!! Enjoy the beautiful
        moments and make them memorable.
      </p>
      <button className="btn btn-primary absolute top-44 right-5">
        Learn More
      </button>
    </section>
  );
};

export default Hero;
