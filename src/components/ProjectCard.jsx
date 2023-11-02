/* eslint-disable react/prop-types */
const ProjectCard = ({ title, link, desc, img }) => {
  return (
    <div>
      <a href={link} target="_blank" rel="noreferrer">
        <div className="bg-white w-72 h-60 rounded-xl shadow-xl hover:w-96 hover:h-72 duration-300 cursor-pointer">
          <img
            src={img}
            alt=""
            className="border border-black mb-1 rounded-t-xl"
          />
          <p className="px-1 font-poppins font-bold capitalize">{title}</p>
          <a href={link} className="text-[10px] px-1 font-monsterrat ">
            {link}
          </a>
          <p className="text-[8px] font-monsterrat p-1 text-[#1e1e1e]">
            {desc}
          </p>
        </div>
      </a>
    </div>
  );
};

export default ProjectCard;
