import logo from "../assets/logo.png";
import cartIcon from "../assets/cart_icon.png";
import { useContext, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useCart } from "react-use-cart";
import { ShopContext } from "../context/ShopContext";
import ham_menu from "../assets/hammenu.png";

const NavBar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const pathname = location.pathname;

  const [menu, setMenu] = useState("Main");
  const [hamMenu, setHamMenu] = useState(false);
  const [email, setEmail] = useState(null);

  const { totalUniqueItems } = useCart();
  const { loggedIn, setLoggedIn } = useContext(ShopContext);

  const signDataRaw = localStorage.getItem("sign-up-data");

  useEffect(() => {
    if (signDataRaw) {
      try {
        const signData = JSON.parse(signDataRaw);
        // console.log("Parsed data:", signData);
        const email = signData.emailKey;
        // console.log("Email:", email);
        setEmail(email);
        setLoggedIn(true);
        navigate("/");
      } catch (error) {
        console.error("Error parsing JSON data:", error);
      }
    } else {
      console.warn("No data found in localStorage for key 'sign-up-data'");
    }
  }, []);

  return (
    <div className="navbar flex items-center justify-between p-4 gap-5">
      <Link to="/">
        <div className="logo flex items-center justify-center gap-3">
          <div className="holder lg:w-full w-8">
            <img src={logo} alt="logo" />
          </div>
          <p className="font-bold lg:text-2xl text-sm">SHOPPER</p>
        </div>
      </Link>
      <ul className="md:flex items-center justify-between lg:gap-12 gap-4 hidden">
        <li
          className="lg:text-xl text-sm cursor-pointer pb-2 one"
          onClick={() => {
            setMenu("Main");
          }}
        >
          <Link to="/">Main</Link>
          {menu === "Main" && pathname !== "/cart" ? <hr /> : <></>}
        </li>
        <li
          className="lg:text-xl text-sm pb-2 cursor-pointer two"
          onClick={() => {
            setMenu("Men");
          }}
        >
          <Link to="/men">Men</Link>
          {menu === "Men" && pathname !== "/cart" ? <hr /> : <></>}
        </li>
        <li
          className="lg:text-xl text-sm pb-2 cursor-pointer three"
          onClick={() => {
            setMenu("Women");
          }}
        >
          <Link to="/women">Women</Link>
          {menu === "Women" && pathname !== "/cart" ? <hr /> : <></>}
        </li>
        <li
          className="lg:text-xl text-sm pb-2 cursor-pointer four"
          onClick={() => {
            setMenu("Kids");
          }}
        >
          <Link to="/kids">Kids</Link>
          {menu === "Kids" && pathname !== "/cart" ? <hr /> : <></>}
        </li>
      </ul>
      {loggedIn ? (
        <div className="md:flex flex-wrap items-center justify-center hidden gap-4">
          <div className="lg:text-lg text-sm pb-2 font-semibold">
            Welcome {email}
          </div>
          <button
            className="lg:text-lg text-sm px-2 py-2 rounded-md border border-gray-600 active:bg-gray-600 active:text-white"
            onClick={() => {
              localStorage.removeItem("react-use-cart");
              localStorage.removeItem("sign-up-data");
              console.log("data is deleted successfully");
              setLoggedIn(false);
              navigate("/login");
            }}
          >
            Sign Out
          </button>
        </div>
      ) : (
        <Link to="/signup">
          <button className="lg:text-lg text-sm px-2 py-2 rounded-md border border-gray-600 active:bg-gray-600 active:text-white hidden md:flex">
            Sign Up
          </button>
        </Link>
      )}
      <div className="flex justify-center items-center gap-4">
        <Link to="/cart">
          <div className="cart  flex items-center justify-center cursor-pointer">
            <img src={cartIcon} alt="cart icon" className="w-6 md:w-7" />
            <div className="bg-orange-500 text-white lg:text-sm text-[10px] rounded-full w-5 h-5 flex justify-center items-center -mt-4">
              {signDataRaw ? totalUniqueItems : 0}
            </div>
          </div>
        </Link>
        <div
          className="ham-menu flex md:hidden cursor-pointer relative"
          onClick={() => setHamMenu(!hamMenu)}
        >
          <div className="ham-img w-10">
            <img src={ham_menu} alt="ham menu" />
          </div>
          {hamMenu ? (
            <div className="list absolute top-[57px] right-0 md:hidden block bg-white p-4 rounded-md shadow-md">
              {loggedIn ? (
                <div className="flex flex-wrap items-center justify-center md:hidden gap-4">
                  <div className="lg:text-lg text-sm pb-2 font-semibold">
                    Welcome {email}
                  </div>
                  <button
                    className="lg:text-lg text-sm px-2 py-2 rounded-md border border-gray-600 active:bg-gray-600 active:text-white"
                    onClick={() => {
                      localStorage.removeItem("react-use-cart");
                      localStorage.removeItem("sign-up-data");
                      console.log("data is deleted successfully");
                      setLoggedIn(false);
                      navigate("/login");
                    }}
                  >
                    Sign Out
                  </button>
                </div>
              ) : (
                <Link to="/signup">
                  <button className="lg:text-lg text-sm px-2 py-2 rounded-md border border-gray-600 active:bg-gray-600 active:text-white">
                    Sign Up
                  </button>
                </Link>
              )}
              <ul className="text-center mt-4">
                <li
                  className="lg:text-xl text-sm font-medium cursor-pointer pb-2 one"
                  onClick={() => {
                    setMenu("Main");
                  }}
                >
                  <Link to="/">Main</Link>
                  {menu === "Main" && pathname !== "/cart" ? (
                    <p className="w-1/2 border-[2px] border-[#ffa500] rounded mx-auto"></p>
                  ) : (
                    <></>
                  )}
                </li>
                <li
                  className="lg:text-xl text-sm pb-2  font-medium cursor-pointer two"
                  onClick={() => {
                    setMenu("Men");
                  }}
                >
                  <Link to="/men">Men</Link>
                  {menu === "Men" && pathname !== "/cart" ? (
                    <p className="w-1/2 border-[2px] border-[#ffa500] rounded mx-auto"></p>
                  ) : (
                    <></>
                  )}
                </li>
                <li
                  className="lg:text-xl text-sm pb-2 font-medium  cursor-pointer three"
                  onClick={() => {
                    setMenu("Women");
                  }}
                >
                  <Link to="/women">Women</Link>
                  {menu === "Women" && pathname !== "/cart" ? (
                    <p className="w-1/2 border-[2px] border-[#ffa500] rounded mx-auto"></p>
                  ) : (
                    <></>
                  )}
                </li>
                <li
                  className="lg:text-xl text-sm pb-2  font-medium cursor-pointer four"
                  onClick={() => {
                    setMenu("Kids");
                  }}
                >
                  <Link to="/kids">Kids</Link>
                  {menu === "Kids" && pathname !== "/cart" ? (
                    <p className="w-1/2 border-[2px] border-[#ffa500] rounded mx-auto"></p>
                  ) : (
                    <></>
                  )}
                </li>
              </ul>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
