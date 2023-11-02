import {
  MailOutlined,
  CalendarOutlined,
  PhoneOutlined,
  AimOutlined,
  LinkedinOutlined,
  DownloadOutlined,
  GithubOutlined,
} from "@ant-design/icons";
import { Button } from "antd";

const Contact = () => {
  return (
    <section className="flex flex-col gap-7 max-sm:gap-2 flex-wrap  ">
      <hr className="p-3 sm:hidden" />
      <div className="flex flex-wrap gap-7 w-full">
        <div className="flex gap-2 justify-start items-center  hover:bg-white/10  hover:rounded-lg  w-full hover:p-1  hover:ease-in duration-300">
          <div>
            <MailOutlined className="text-[#FFD65C] bg-[#2b2b2c] p-3 rounded-md shadow-xl " />
          </div>
          <div className="text-white text-[13px] wrap font-poppins ">
            <p className="text-[#d6d6d6] text-[10px] font-monsterrat font-semibold">
              EMAIL
            </p>
            <p>mithunnaikwork@gmail.com</p>
          </div>
        </div>
        <div className="flex gap-2 justify-start items-center hover:bg-white/10  hover:rounded-lg  w-full hover:p-1  hover:ease-in duration-300 ">
          <div>
            <PhoneOutlined className="text-[#FFD65C] bg-[#2b2b2c] p-3 rounded-md shadow-xl " />
          </div>
          <div className="text-white text-[14px] font-poppins ">
            <p className="text-[#d6d6d6] text-[10px] font-monsterrat font-semibold">
              CONTACT
            </p>
            <p>+91 8197565870</p>
          </div>
        </div>
        <div className="flex gap-2 justify-start items-center hover:bg-white/10  hover:rounded-lg  w-full hover:p-1  hover:ease-in duration-300">
          <div>
            <CalendarOutlined className="text-[#FFD65C] bg-[#2b2b2c] p-3 rounded-md shadow-xl " />
          </div>
          <div className="text-white text-[14px] font-poppins ">
            <p className="text-[#d6d6d6] text-[10px] font-monsterrat font-semibold">
              BIRTHDAY
            </p>
            <p> March 1 , 1999</p>
          </div>
        </div>
        <div className="flex gap-2 justify-start items-center hover:bg-white/10  hover:rounded-lg  w-full hover:p-1  hover:ease-in duration-300">
          <div>
            <AimOutlined className="text-[#FFD65C] bg-[#2b2b2c] p-3 rounded-md shadow-xl " />
          </div>
          <div className="text-white text-[14px] font-poppins ">
            <p className="text-[#d6d6d6] text-[10px] font-monsterrat font-semibold">
              LOCATION
            </p>
            <p> Karnataka , India</p>
          </div>
        </div>
      </div>
      <div>
        <hr className="my-3  text-white" />
      </div>

      <div className="flex gap-10 flex-row justify-between items-center max-sm:gap-24">
        <div className="flex gap-3 mb-2">
          <a
            href="https://github.com/mithunCode"
            target="_blank"
            rel="noreferrer"
          >
            <GithubOutlined className="text-[#FFD65C] bg-[#2b2b2c] p-3 rounded-md shadow-xl hover:bg-white hover:text-black hover:p-4  hover:ease-in duration-300 " />
          </a>
          <a
            href="https://www.linkedin.com/in/mithun-naik-570117227"
            target="_blank"
            rel="noreferrer"
          >
            <LinkedinOutlined className="text-[#FFD65C] bg-[#2b2b2c] p-3 rounded-md shadow-xl hover:bg-white hover:text-black hover:p-4  hover:ease-in duration-300" />
          </a>
        </div>
        <div className="">
          <a
            href="https://drive.google.com/file/d/1W85ORiFK4ONj4iZviCbJf2-PwlElg72S/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            <Button
              type="text"
              shape="round"
              icon={<DownloadOutlined className="text-[#ffd65c]" />}
              size="middle"
              className="flex flex-row-reverse items-center bg-[#2b2b2c]  text-[#ffd65c] gap-1 hover:text-lg duration-300"
              onClick={() => {}}
            >
              <p className=" font-poppins text-white  ">Resume</p>
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};
//https://drive.google.com/file/d/1W85ORiFK4ONj4iZviCbJf2-PwlElg72S/view?usp=sharing

export default Contact;
