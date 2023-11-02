import infy from "../assets/images/InfosysAward.png";
import udemy from "../assets/images/udemyCertificate.jpg";
import css from "../assets/images/Hrcss.png";
import js from "../assets/images/HrJs.png";
const Skills = () => {
  return (
    <section className="">
      <div className="p-4 mt-2">
        <div className="flex gap-10 justify-between max-sm:flex-wrap">
          <div>
            <h3 className="text-white text-2xl "> Programming </h3>
            <ul className=" font-monsterrat list-disc text-[#d6d6d6] list-inside">
              <li className="">Html</li>
              <li>Css</li>
              <li>JavaScript</li>
              <li>ReactJs</li>
              <li>Redux</li>
              <li>Tailwind Css</li>
              <li>Material UI</li>
            </ul>
          </div>
          <div>
            <h3 className="text-white text-2xl "> IDE And Tools </h3>
            <ul className="text-[#d6d6d6] font-monsterrat list-disc list-inside">
              <li>Visual Studio Code</li>
              <li>Sublime Text</li>
            </ul>
          </div>
          <div>
            <h3 className="text-white text-2xl "> Development Tools </h3>
            <ul className="text-[#d6d6d6] font-monsterrat list-disc list-inside">
              <li>Git/Github </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="p-3 mt-2">
        <h3 className="text-white text-2xl flex"> Certifications </h3>
        <div className="mt-2 flex gap-16 justify-around items-center flex-wrap">
          <img
            src={infy}
            alt="Infosys Certification"
            className="w-60 hover:w-96 duration-500  hover:border hover:border-[#ffd65c]"
          />
          <img
            src={udemy}
            alt="Udemy Certification"
            className="w-60 hover:w-96 duration-500 hover:border hover:border-[#ffd65c]"
          />
          <img
            src={js}
            alt="JavaScript Certification"
            className="w-60 hover:w-96 duration-500 hover:border hover:border-[#ffd65c]"
          />
          <img
            src={css}
            alt="Css Certification"
            className="w-60 hover:w-96 duration-500 hover:border hover:border-[#ffd65c]"
          />
        </div>
      </div>
    </section>
  );
};

export default Skills;
