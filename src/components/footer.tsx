"use client"

import Image from "next/image";
import Link from "next/link";

import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

import logo from "../images/logo/logo_dark_bg.svg"
import Button from "./UI/Button";

const links = [
  { href: "/", text: "Cleaning Services" },
  { href: "/", text: "Service Areas" },
  { href: "/", text: "About us" },
];

const socialIcons = [
  { icon: <FacebookRoundedIcon style={{ color: "white" }}/>, href: "https://facebook.com" },
  { icon: <InstagramIcon style={{ color: "white" }}/>, href: "https://instagram.com" },
  { icon: <WhatsAppIcon style={{ color: "white" }}/>, href: "https://whatsapp.com" },
]; 


export default function Footer() {
 
 
  return (
    <footer>
  <div className="grid  grid-cols-2 md:grid-cols-4 gap-2 w-auto h-auto py-5 md:py-7 lg:py-9 px-5 md:px-7 lg:px-7 lg:pl-[240px] xl:pl-[282px] bg-main">
    
    <div className="md:row-span-3 lg:pr-px-[240px] xl:pr-px-[282px]">
      <Image 
        src={logo}
        height={60}
        width={90}
        alt="logo"
        className="mb-3">
      </Image>
    </div>
    <div className="sm:col-span-1 md:row-span-2">
      <ul className="mb-3 text-3 md:text-4 text-white font-[300]">
        {links.map((link, index) => (
          <li key={index} className="mb-3">
            <Link href={link.href}>{link.text}</Link>
          </li>
        ))}
      </ul>
    </div>
    <div className="">
      <span className="mb-3 md:mb-4 text-3 md:text-4 text-white font-[300]">Follow us</span>
      <ul className="flex gap-2 mb-5">
        {socialIcons.map((socialIcon, index) => (
          <li key={index} className="-white"> 
            <Link href={socialIcon.href}>{socialIcon.icon}</Link>
          </li>
        ))}
      </ul> 
      {/* <div className="h-8 w-36 rounded-xl border border-slate-300 hover:border-transparent flex justify-center items-center"> */}
        <span className="text-white text-[14px] font-light uppercase">tel: 470-800-32-49</span>
      {/* </div>  */}
    </div> 
    <div className="md:row-span-3 sm:col-span-1">
      <ul className="mb-3 text-3 md:text-4 text-white font-[300]">
        <li className=" mb-3"><Link href="https://icons8.com" >Icons by icons8.com</Link></li>
        <li className="mb-3"><Link href="https://pixabay.com">Images by pixabay.com</Link></li>
        <li><Link href="/">Created by Developers Team</Link></li>
      </ul>
    </div>
  
    {/* <div className=" ">
      <Button style="footer-book-now" type="button">
       <span className=" text-[20px] text-secondary ">Book now</span>
        </Button>
  
    </div> */}
    
  </div>
</footer>

  )
  
} 


// / import Image from "next/legacy/image";
//   <div className="block lg:hidden w-[68px] h-[60px] md:w-[80px] md:h-[70px]">
// w-auto h-[250px], md:h-[592px] lg:h-[738px] xl:h-[964px] 
//           <Link href={"/"}> 
//             <Image 
//               width={68} 
//               height={60}               
//               src="/icons/logo_shine.svg" 
//               alt="Logo" 
//               layout="responsive"              
//             /> 
//           </Link> 
//         </div>\