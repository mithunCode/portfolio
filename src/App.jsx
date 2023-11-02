/* eslint-disable react/no-unescaped-entities */
import Contact from "./sections/Contact";
import About from "./sections/About";
import { useState } from "react";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import { Button } from "antd";

const App = () => {
  const [display, setDisplay] = useState("About");
  const [contact, setContact] = useState(false);

  return (
    <>
      <main className="flex  flex-row  bg-black max-sm:flex-col px-3 max-sm:px-1 max-sm:py-0 ">
        <section className="bg-[#1e1e1e]  m-5 p-5 max-sm:p-2 max-sm:m-2 w-[25%] max-sm:w-[95%]   rounded-lg border-[#383838] border fixed ">
          <div className="flex flex-col justify-center items-center px-2 max-sm:flex-col max-sm:justify-start max-sm:items-start max-sm:p-1">
            <div className="flex justify-center items-center flex-row gap-1 ">
              <div className="p-1">
                <p className="text-white font-poppins font-bold text-4xl ">
                  Mithun Naik
                </p>
                <p className="bg-[#2b2b2c] my-2 rounded-md text-xs text-center font-poppins shadow-xl text-white p-1 hover:bg-white hover:text-black hover:p-4  hover:ease-in duration-300 hover:font-bold hover:shadow-lg">
                  Front End Developer
                </p>

                <hr className="my-5 text-white/50 max-sm:hidden" />
              </div>
              <div className="text-white font-poppins flex justify-center items-center absolute top-1 right-1 ">
                <Button
                  type="default"
                  hoverable="true"
                  className="text-white shadow-lg rounded-lg border border-[#FFD65C] border-spacing-1 sm:hidden "
                  onClick={() => {
                    setContact(!contact);
                  }}
                >
                  Contact ↡
                </Button>
              </div>
            </div>
            <div>
              <div className="max-sm:hidden">
                <Contact className="" />
              </div>

              {contact === true ? <Contact /> : null}
            </div>
          </div>
        </section>
        <section className="bg-[#1e1e1e]  m-5 w-[full] ml-[30%] max-sm:mx-1 max-sm:mt-36   rounded-lg border border-[#383838] pl-5 max-sm:p-0 max-sm:flex-col-reverse">
          <section className=" flex justify-between  items-end max-sm:flex-col-reverse max-sm:items-center max-sm:gap-10">
            <div className="text-white text-3xl px-3 mt-5 font-poppins">
              {display}
            </div>
            <div className="  max-sm:fixed max-sm:bottom-0 max-sm:p-0 max-sm:m-0 max-sm:left-0 max-sm:w-full">
              <nav className=" ">
                <div className="flex flex-row  gap-10 bg-[#2b2b2c] text-[#d6d6d6]   font-poppins text-lg p-4 justify-end text-md rounded-xl  items-center max-sm:justify-center">
                  <p
                    className="hover:text-[white] cursor-pointer"
                    onClick={() => setDisplay("About")}
                  >
                    About
                  </p>
                  <p
                    className="hover:text-[white] cursor-pointer"
                    onClick={() => setDisplay("Skills")}
                  >
                    Skills
                  </p>
                  <p
                    className="hover:text-[white] cursor-pointer"
                    onClick={() => setDisplay("Projects")}
                  >
                    Projects
                  </p>
                </div>
              </nav>
            </div>
          </section>
          <div>
            <hr className="w-10 ml-4 my-2 bg-red-500" />
          </div>
          {display == "About" ? (
            <About />
          ) : null || display === "Skills" ? (
            <Skills />
          ) : null || display === "Projects" ? (
            <Projects />
          ) : null}
        </section>
      </main>
      <footer className="w-full  bg-black  py-3 pt-10  ">
        <p className="bg-[#1e1e1e] mx-5 p-2 text-center text-white font-poppins rounded-xl text-xs">
          Developed with &#10084; by Mithun
        </p>
      </footer>
    </>
  );
};

export default App;
