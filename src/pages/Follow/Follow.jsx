import img1 from "../../assets/cups/1.png";
import img2 from "../../assets/cups/2.png";
import img3 from "../../assets/cups/3.png";
import img4 from "../../assets/cups/4.png";
import img5 from "../../assets/cups/5.png";
import img6 from "../../assets/cups/6.png";
import img7 from "../../assets/cups/7.png";
import img8 from "../../assets/cups/8.png";

const Follow = () => {
  return (
    <section className="container mx-auto my-10">
      <h1 className="text-center font-bold text-3xl mb-6">Follow Us</h1>
      <div className="grid grid-cols-4 gap-5">
        <img src={img1} alt="" />
        <img src={img2} alt="" />
        <img src={img3} alt="" />
        <img src={img4} alt="" />
        <img src={img5} alt="" />
        <img src={img6} alt="" />
        <img src={img7} alt="" />
        <img src={img8} alt="" />
      </div>
    </section>
  );
};

export default Follow;
