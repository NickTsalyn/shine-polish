// import { Form } from "react-hook-form";
import { FrontDoorForm } from "@/global/images";
import Input from "../UI/Input";

const Step4 = () => {
  return (
    <div className="p-4 md:p-6 lg:p-9">
      <div className="flex mb-[72px] lg:mb-[92px]">
        <div className="flex flex-col md:mr-1 lg:mr-[164px]">
          <h1 className="h1 md:text-[36px] mb-[32px]">
            Where would you like us to clean?
          </h1>
          <form className="flex flex-col gap-5">
            <div className="md:w-[508px] lg:w-[774px] md:h-[40px] ">
              <Input
                type="text"
                style="form-input"
                placeholder="Adress*"
              ></Input>
            </div>
            <div className="md:w-[444px] lg:w-[672px] md:h-[40px] ">
              <Input
                type="text"
                style="form-input"
                placeholder="Apt/Suite#"
              ></Input>
            </div>
            <div className="md:w-[332px] lg:w-[504px] md:h-[40px] ">
              <Input type="text" style="form-input" placeholder="City*"></Input>
            </div>
            <div className="md:w-[228px] lg:w-[348px] md:h-[40px] ">
              <Input
                type="text"
                style="form-input"
                placeholder="Zip Code*"
              ></Input>
            </div>
          </form>
        </div>
        <div className="hidden md:block md:w-[174px] md:h-[307px]">
          <FrontDoorForm />
        </div>
      </div>
      <div>
        <h2 className="h1 md:text-[36px] mb-[32px]">
          When would you like us to clean?
        </h2>
      </div>
    </div>
  );
};
export default Step4;

// const Step3 = () => {
// 	const { form, setForm } = useContext(FormContext);

// 	useEffect(() => {
// 		const savedForm = localStorage.getItem("form");
// 		if (savedForm) {
// 			setForm(JSON.parse(savedForm));
// 	}}
// 	, [setForm]);

// 	const handleChange = (event: SelectChangeEvent<string | number>) => {
// 		const { name, value } = event.target;
// 		const updatedForm = { ...form, [name]: value }
// 		setForm(updatedForm);
// 		localStorage.setItem("form", JSON.stringify(updatedForm));
// 	};

// 	const handleAreaChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
// 		const { name, value } = event.target;
// 		const updatedForm = {...form, [name]: value}
// 		setForm(updatedForm);
// 		localStorage.setItem("form", JSON.stringify(updatedForm));
// 	};

// 	return (
// 		<div className="p-4 md:p-6 lg:p-9 flex flex-col gap-6 md:gap-[100px]">
//       <div className=" flex flex-col gap-4 md:gap-8 lg:gap-10 ">
//         <h2 className=" mb-2 subtitle-booking md:mb-0 lg:mb-[14px]">
//           Additional information
//         </h2>
//         <div className=" lg:w-[480px] xl:w-[656px] ">
//           <BasicSelect
//             name="homeAccess"
//             items={homeAccess}
//             value={form.homeAccess}
//             onChange={handleChange}
//             placeholder="How will access your home?* "
//           />
//         </div>
//         <div className=" lg:w-[480px] xl:w-[656px]">
//           <BasicSelect
//             name="aboutUs"
//             items={aboutUs}
//             value={form.aboutUs}
//             onChange={handleChange}
//             placeholder="How did you hear about us?* "
//           />
//         </div>
//       </div>
//       <div>
//         <h2 className=" mb-6 subtitle-booking md:mb-8 lg:mb-10">
//           Anything else we should know to provide the best cleaning possible
//         </h2>
//         <div className=" h-[124px] md:h-[220px] lg:h-[250px] lg:w-[532px] xl:w-[684px]">
//           {" "}
//           <Textarea
//             placeholder="Special Instructions*"
//             value={form.specialInstructions}
//             name="specialInstructions"
//             onChange={handleAreaChange}
//           />
//         </div>
//       </div>
//     </div>

// 	);
// };
// export default Step3;
