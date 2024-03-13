import React from "react";
import { useState } from "react";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";
import { useNavigate } from "react-router-dom";

const Navbar = ({ colortype }: { colortype: string }) => {
  const navigate = useNavigate();
  const [mobile, setMobile] = useState(false);

  const handleclick = (url: string) => {
    setMobile(false);
    navigate(`/${url}`);
  };

  const openmobile = () => {
    setMobile(true);
  };
  return (
    <>
      <div
        className={`Navbar z-20 fixed top-0 left-auto md:bg-black/30 md:backdrop-filter md:backdrop-blur-sm rounded-3xl lg:w-[50%] w-[90%] h-14 flex items-baseline justify-end text-lg py-5 mt-1 font-miami  bottom-2
    ${mobile ? " " : " "}`}
      >
        <nav>
          <ul
            className={`flex gap-3 md:flex text-${
              colortype ? "balck" : "white"
            } cursor-pointer  items-baseline justify-end   ${
              mobile
                ? " bg-black/30 z-20 py-3 backdrop-filter backdrop-blur-sm rounded-3xl pl-10 visible flex-col top-[70px]  absolute left-0 w-full mr-10"
                : "max-md:hidden pr-14"
            } `}
          >
            <li
              className="mr-10 text-lg hover:underline "
              onClick={() => {
                handleclick("");
              }}
            >
              HOME
            </li>
            <li
              className="mr-10 text-lg hover:underline"
              onClick={() => {
                handleclick("register");
              }}
            >
             CHARCTERS
            </li>
            <li
              className="mr-10 text-lg hover:underline"
              onClick={() => {
                handleclick("problems");
              }}
            >
              STORE
            </li>
            <li
              className="mr-10 text-lg hover:underline"
              onClick={() => {
                handleclick("judges");
              }}
            >
             MOVIES
            </li>
            <li className="mr-10 text-lg hover:underline" onClick={() => {handleclick('sponsors')}}>COMICS</li>
            <li
              className="mr-10 text-lg hover:underline"
              onClick={() => {
                handleclick("partners");
              }}
            >
             TRIVIA
            </li>
          </ul>
        </nav>
        <div className="md:hidden">
          {mobile ? (
            <span className="" onClick={() => setMobile(false)}>
              <IoIosCloseCircleOutline color="white" size={25} />
            </span>
          ) : (
            <span className="" onClick={() => openmobile()}>
              <GiHamburgerMenu color="white" size={25} />
            </span>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;