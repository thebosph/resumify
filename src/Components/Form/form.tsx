import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { ResumeInputs } from "../../store/storeTypes";
import Input from "./input";

const Form = () => {
  const [formStep, setFormStep] = useState(0);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<ResumeInputs>();
  const onSubmit: SubmitHandler<ResumeInputs> = (data) => console.log(data);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col space-y-5  "
    >
      {formStep === 0 && (
        <>
          {/* Profile */}
          <div className="flex flex-col space-y-2  ">
            <div>
              <span className="text-white p-2">Profile Fields</span>
              <span className="badge bg-yellow-400">required</span>
            </div>
            <div className="flex">
              <Input
                label="name"
                labelName="name"
                register={register}
                required
              />
              <Input
                label="brand"
                labelName="brand"
                register={register}
                required
              />
              <Input
                label="avatar"
                labelName="avatar-url"
                register={register}
                required
              />
            </div>
          </div>
          {/* Contact */}
          <div className="flex flex-col space-y-2">
            <div className="space-x-2">
              <span className="text-white p-2">Contact Fields</span>
              <span className="badge bg-yellow-400">required</span>
              <span className="badge bg-green-400">Website not required</span>
            </div>
            <div className="flex">
              <Input
                label="contact.email"
                labelName="email"
                register={register}
                required
              />
              <Input
                label="contact.phone"
                labelName="phone"
                register={register}
                required
              />
              <Input
                label="contact.location"
                labelName="address"
                register={register}
                required
              />
              <Input
                label="contact.website"
                labelName="website"
                register={register}
              />
            </div>
          </div>
          {/* About */}
          <div className="flex flex-col space-y-4">
            <div className="space-x-2">
              <span className="text-white p-2">About Text</span>
              <span className="badge bg-yellow-400">required</span>
            </div>
            <div className="flex">
              <textarea
                {...register("about")}
                className="py-2 ml-1 px-1 w-1/2 bg-niteBlueDark text-white focus:border-0 rounded-md disabled:bg-slate-200 disabled:cursor-not-allowed  placeholder:text-slate-600 placeholder:p-2"
                placeholder="about"
                rows={5}
              />
            </div>
          </div>
        </>
      )}

      <button
        type="submit"
        className="p-2 bg-niteExtraLight self-start rounded-md text-slate-400"
      >
        Send
      </button>
    </form>
  );
};

export default Form;
