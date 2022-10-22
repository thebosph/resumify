import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Viewer from "../../Components/viewer";
import classNames from "classnames";
import useTheme from "../../hooks/useTheme";

const Selector = () => {
  const [selectThemeIndex, setSelectThemeIndex] = useState(0);

  const navigate = useNavigate();
  const {
    theme,
    title,
    explain,
    color,
    colors,
    setColor,
    setTheme,
    themeList,
  } = useTheme(selectThemeIndex);

  useEffect(() => {
    setTheme(themeList[selectThemeIndex].theme);
    setColor(themeList[selectThemeIndex].colors[0]);
  }, [selectThemeIndex, setColor, setTheme, themeList]);

  const handleThemeSlider = () => {
    if (selectThemeIndex === themeList.length - 1) {
      setSelectThemeIndex(0);
    } else {
      setSelectThemeIndex(selectThemeIndex + 1);
    }
  };

  return (
    <div className="flex w-full h-full">
      <div className="w-3/4 bg-niteBlue p-20">
        <h1 className="text-[50px] font-bold text-slate-300">
          Select Your <mark> Theme</mark>
        </h1>
        <div>
          <span className="text-3xl font-black text-gray-500 opacity-30">
            {selectThemeIndex + 1}/{themeList.length}
          </span>
          <div className="p-4 bg-niteExtraLight rounded-md w-2/3 flex flex-col space-y-2 mt-5">
            <h2 className="font-bold opacity-90 text-4xl text-white">
              {title}
            </h2>
            <p className="text-xl font-regular text-slate-200 ">{explain}</p>
          </div>
          <div className=" w-2/3 rounded-md flex flex-col space-y-2 mt-5">
            <h3 className="text-2xl text-white">Color</h3>
            {/* Color picker */}
            <div className="flex flex-row space-x-2">
              {colors?.map((c) => (
                <div
                  key={c}
                  className={classNames("w-8 h-8 rounded-full", {
                    "ring-2 ring-white": c === color,
                  })}
                  style={{ backgroundColor: c }}
                  onClick={() => setColor(c)}
                />
              ))}
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
            <button
              onClick={() => navigate("/builder/" + theme)}
              className="bg-niteExtraLight bg-opacity-80 hover:bg-niteBlueDark text-white rounded-md px-5 py-2"
            >
              Build Now
            </button>
          </div>
        </div>
        <div>
          <Viewer
            color={color}
            cn="w-[500px] h-[600px] absolute top-[50px] right-[250px]"
            toolbar={false}
            theme={theme}
          />

          {/* Next and Back Arrows for Selected Theme */}
          <div className="flex flex-row   absolute right-[220px] top-[350px]">
            <button
              className="bg-niteBlue bg-opacity-75 hover:bg-niteBlueDark text-white mr-[424px] rounded-md px-5 py-2"
              onClick={handleThemeSlider}
            >
              &#60;
            </button>
            <button
              className="bg-niteBlue bg-opacity-75 hover:bg-niteBlueDark text-white ml-10 rounded-md px-5 py-2"
              onClick={handleThemeSlider}
            >
              &#62;
            </button>
          </div>
        </div>
      </div>

      <div className="w-2/4 bg-builderbg bg-cover "></div>
    </div>
  );
};

export default Selector;
