import logo from "../../assets/logo/logo.png";

const Header = () => {
  return (
    <header className="mt-5 mb-10 flex justify-center items-center">
      <img src={logo} alt="logo" className="w-16 h-16" />
      <h1 className="font-bold text-3xl">The Coffee Connection</h1>
    </header>
  );
};

export default Header;
