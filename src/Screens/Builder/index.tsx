import { useNavigate } from "react-router-dom";

const Builder = () => {
  const navigate = useNavigate();
  return (
    <div className="flex w-full h-full">
      <div className="w-3/4 bg-niteBlue p-20">
        <h1 className="text-[50px] font-bold text-slate-300">
          Select Your <mark> Theme</mark>
        </h1>
        <div>
          <span className="text-3xl font-black text-gray-500 opacity-30">
            1/3
          </span>
          <div className="p-4 bg-niteExtraLight rounded-md w-2/3 flex flex-col space-y-2 mt-5">
            <h2 className="font-bold opacity-90 text-4xl text-white">
              DetailKing
            </h2>
            <p className="text-xl font-regular text-slate-200 ">
              A simple, elegant and striking resume template. You can get a
              stunning resume by filling in the information according to
              yourself.{" "}
            </p>
          </div>
          <div className=" w-2/3 rounded-md flex flex-col space-y-2 mt-5">
            <h3 className="text-2xl text-white">Color</h3>
            {/* Color picker */}
            <div className="flex flex-row space-x-2">
              <div className="w-10 h-10 rounded-full bg-blue-400"></div>
              <div className="w-10 h-10 rounded-full bg-red-400"></div>
              <div className="w-10 h-10 rounded-full bg-green-400"></div>
              <div className="w-10 h-10 rounded-full bg-yellow-400"></div>
              <div className="w-10 h-10 rounded-full bg-purple-400"></div>
              <div className="w-10 h-10 rounded-full bg-pink-400"></div>
              <div className="w-10 h-10 rounded-full bg-gray-400"></div>
              <div className="w-10 h-10 rounded-full bg-black"></div>
            </div>
          </div>
          {/* Back to homepage */}
          <div className="flex flex-row space-x-2 mt-5">
            <button
              className="bg-niteExtraLight hover:bg-niteBlueDark text-white rounded-md px-5 py-2"
              onClick={() => navigate("/")}
            >
              Back
            </button>
            <button className="bg-niteExtraLight bg-opacity-80 hover:bg-niteBlueDark text-white rounded-md px-5 py-2">
              Build Now
            </button>
          </div>
        </div>
        <div>
          <img
            src="/img/resume.jpg"
            alt=""
            width={500}
            height={400}
            className="h-[600px] absolute top-[50px] right-[250px]"
          />
          {/* Next and Back Arrows */}
          <div className="flex flex-row   absolute right-[220px] top-[350px]">
            <button className="bg-niteBlue bg-opacity-75 hover:bg-niteBlueDark text-white mr-[424px] rounded-md px-5 py-2">
              &#60;
            </button>
            <button className="bg-niteBlue bg-opacity-75 hover:bg-niteBlueDark text-white ml-10 rounded-md px-5 py-2">
              &#62;
            </button>
          </div>
        </div>
      </div>

      <div className="w-2/4 bg-builderbg bg-cover "></div>
    </div>
  );
};

export default Builder;
