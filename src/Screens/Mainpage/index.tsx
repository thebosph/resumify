import { Link } from "react-router-dom";
const Mainpage = () => {
  return (
    <div className="flex flex-col mx-5 md:flex-row w-full md:justify-center md:items-center md:mx-40">
      <div className=" w-1/2 flex flex-col space-y-5">
        <h1 className="md:text-[62px] text-4xl leading-[49px] font-bold text-white">
          Online Resume Creator
        </h1>
        <p className="md:text-3xl text-white opacity-50 font-thin">
          You can create and download your online resume easly in minutes
        </p>
        <Link to="/builder">
          <span
            // eslint-disable-next-line no-restricted-globals

            className="p-5 bg-niteBlueLight text-white self-start rounded-md hover:bg-niteBlueDark transition-colors cursor-pointer"
          >
            Build Now
          </span>
        </Link>
      </div>
      <div className=" w-1/2 flex flex-wrap  space-x-5 items-center relative  justify-center  cursor-pointer ">
        <div className="bg-blue-400 w-36 h-5 absolute top-5 -right-[30px] z-10"></div>
        <div className="bg-blue-300 w-36 h-5  absolute top-[60px] -right-[30px] z-10"></div>
        <div className="bg-blue-200 w-36 h-5 absolute top-[100px] -right-[30px] z-10"></div>
        <div className="bg-blue-100 w-36 h-5 absolute top-[140px] -right-[30px] z-10"></div>
        <img
          src="/img/resume.png"
          alt="resume"
          className="h-[400px] rounded-md z-10"
        />
      </div>
    </div>
  );
};

export default Mainpage;
