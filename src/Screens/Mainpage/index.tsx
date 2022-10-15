import { useState } from "react";
import classnames from "classnames";

const Mainpage = () => {
  const [hover, setHover] = useState(false);
  return (
    <div className="flex flex-col md:flex-row w-full justify-center items-center mx-40">
      <div className=" w-1/2 flex flex-col space-y-5">
        <h1 className="md:text-[62px] leading-[49px] font-bold text-white">
          Online Resume Creator
        </h1>
        <p className="text-3xl text-white opacity-50 font-thin">
          You can create and download your online resume easly in minutes
        </p>
        <span className="p-5 bg-niteBlueLight text-white self-start rounded-md hover:bg-niteBlueDark transition-colors cursor-pointer">
          Build Now
        </span>
      </div>
      <div className=" w-1/2 flex flex-wrap  space-x-5 items-center  justify-center  cursor-pointer ">
        <img
          src="/img/resume.jpg"
          alt="resume"
          className="h-[400px]  hover:h-[600px] transition-all"
        />
      </div>
    </div>
  );
};

export default Mainpage;
