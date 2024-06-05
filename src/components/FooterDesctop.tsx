"use client";

import Link from "next/link";
import FooterMainNav from "./Navigation/FooterNav";
import { FOOTER_NAV } from "@/global/navigation";
import { FooterImg } from "@/global/images";

export default function FooterDesctop() {
  return (
    <footer className="hidden w-full lg:block bg-opacity-90 backdrop-filter backdrop-blur-lg lg:mt-[120px]">
      <div className="relative flex gap-5 lg:h-[400px] xl:h-[112px]">
        <div className="z-0 absolute bottom-0 w-full opacity-60">
          <FooterImg />
        </div>
        <div className="absolute z-30 inset-x-0 container lg:max-w-[1056px] xl:max-w-[1560px] lg:bottom-14 ">
          <FooterMainNav links={FOOTER_NAV} />
        </div>
        <div className="text-center relative bottom-5">
          <div className=" w-[1000px] absolute inset-x-0 left-80 bottom-0 ">
            <div className="relative h-[1px] bg-gradient-to-r from-orange-200 via-main to-orange-200 mb-1"></div>
            <p className="relative text-white lg:text-main text-[8px] md:text-[10px] lg:text-[14px] font-light">
              All materials on this website are protected by Copyright ©2024
              <span>
                <Link href="/">Lobsters Co.</Link>
              </span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

// "use client";

// import Link from "next/link";
// import FooterMainNav from "./Navigation/FooterNav";
// import { FOOTER_NAV } from "@/global/navigation";
// import { FooterImg } from "@/global/images";

// export default function FooterDesctop() {
//   return (
//     <footer className="hidden relative lg:flex lg:flex-col lg:justify-end gap-3 lg:h-[460px] xl:h-[612px] bg-opacity-90 backdrop-filter backdrop-blur-lg  lg:ml-[200px] xl:ml-[244px] py-2.5">
//       <FooterImg />
     
//         <div className=" lg:w-[1056px] xl:w-[1560px]  ml-auto mr-auto  ">
//           <FooterMainNav links={FOOTER_NAV} />
//         </div>
//         <div className="text-center ">
//           <div className=" w-[1000px] h-[1px] bg-gradient-to-r from-orange-200 via-main to-orange-200 mb-2 ml-auto mr-auto"></div>
//           <p className=" text-white lg:text-main text-[8px] md:text-[10px] lg:text-[14px] font-light">
//             All materials on this website are protected by Copyright ©2024
//             <span>
//               <Link href="/">Lobsters Co.</Link>
//             </span>
//           </p>
//         </div>
      
//     </footer>
//   );
// }
