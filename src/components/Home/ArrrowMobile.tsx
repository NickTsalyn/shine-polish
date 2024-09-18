"use client";
import React, {useState, useEffect} from "react";
import ArrowDownwardRoundedIcon from "@mui/icons-material/ArrowDownwardRounded";
import ArrowUpwardRoundedIcon from "@mui/icons-material/ArrowUpwardRounded";

export default function ArrowMobile() {
 const [showScrollDown, setShowScrollDown] = useState(true);
 const [showScrollUp, setShowScrollUp] = useState(false);

 useEffect(() => {
  const handleScroll = () => {
   const scrollPosition = window.scrollY;
   const windowHeight = window.innerHeight;
   const documentHeight = document.documentElement.scrollHeight;

   if (scrollPosition === 0) {
    setShowScrollDown(true);
    setShowScrollUp(false);
   } else if (scrollPosition + windowHeight >= documentHeight - 300) {
    setShowScrollDown(false);
    setShowScrollUp(true);
   } else {
    setShowScrollDown(false);
    setShowScrollUp(false);
   }
  };

  window.addEventListener("scroll", handleScroll);

  return () => window.removeEventListener("scroll", handleScroll);
 }, []);

 const scrollToTop = () => {
  window.scrollTo({top: 0, behavior: "smooth"});
 };

 const scrollToBottom = () => {
  window.scrollTo({top: document.body.scrollHeight, behavior: "smooth"});
 };

 return (
  <div className="lg:hidden fixed bottom-0 right-2 z-30">
   {showScrollDown && (
    <svg
     className="animate-bounce w-[24px] h-[48px] md:w-[32px] md:h-[64px] text-secondary border-[1px] border-secondary rounded-full cursor-pointer"
     onClick={scrollToBottom}
     viewBox="0 0 24 24"
    >
     <ArrowDownwardRoundedIcon className="w-4 h-4 text-secondary" />
    </svg>
   )}
   {showScrollUp && (
    <svg
     className="animate-bounce w-[24px] h-[48px] md:w-[32px] md:h-[64px] text-secondary border-[1px] border-secondary rounded-full cursor-pointer"
     onClick={scrollToTop}
     viewBox="0 0 24 24"
    >
     <ArrowUpwardRoundedIcon className="w-4 h-4 text-secondary" />
    </svg>
   )}
  </div>
 );
}
