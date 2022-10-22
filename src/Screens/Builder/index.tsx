import { useParams } from "react-router-dom";
import Form from "../../Components/Form/form";

const Builder = () => {
  const { theme } = useParams();
  return (
    <div className="w-full h-full p-20 flex-col space-y-10">
      <div className=" items-center ">
        <h1 className="text-[50px] font-bold text-slate-300">
          Fill your <mark>Resume</mark>
        </h1>
        <div className="space-x-2 self-end mb-3">
          <span className="badge bg-sky-500 text-white">{theme}</span>
          <span className="badge bg-slate-400">#fffff</span>
        </div>
      </div>
      <Form />
    </div>
  );
};

export default Builder;
