// import React from "react";

// import Radio from "@mui/material/Radio";
// import { RadioCheckProps } from "@/types/types";

// const RadioButton: React.FC<RadioCheckProps> = ({
//   style,
//   text,
//   checked,
//   children,
//   onChange,
// }) => {
//   return (
//     <Radio
//       sx={{
//         padding: "0",
//       }}
//       checked={checked}
//       onChange={onChange}
//       icon={
//         <div
//           className={`${style}  border border-main items-center justify-center rounded-xl shadow-button-shadow`}
//         >
//           <button className=" flex flex-col items-center text-main text-center font-intro_book text-base font-normal leading-6">
//             {children}
//             {text}
//           </button>
//         </div>
//       }
//       checkedIcon={
//         <div
//           className={`${style} flex  border border-main/35 items-center justify-center rounded-xl bg-tertial shadow-hover-shadow`}
//         >
//           <button className=" flex flex-col items-center text-white text-center font-intro_book text-base font-normal leading-6">
//             {children}
//             {text}
//           </button>
//         </div>
//       }
//     />
//   );
// };
// export default RadioButton;

import React from "react";

import Radio from "@mui/material/Radio";
import { RadioCheckProps } from "@/types/types";

const RadioButton: React.FC<RadioCheckProps> = ({ style, text, isActive, children, onClick }) => {
	return (
		<button
			className={`${style}  border   justify-center  flex flex-col items-center  rounded-xl  text-center font-intro_book text-base font-normal leading-6 ${isActive ? "text-white bg-tertial border-main/35 shadow-hover-shadow " : "text-main border-main shadow-hover-shadow"}`}
			onClick={onClick}
		>
			{children}
			{text}
		</button>
	);
};
export default RadioButton;
