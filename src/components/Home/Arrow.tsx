"use client";
import React, {useState, useEffect} from "react";
import ArrowDownwardRoundedIcon from "@mui/icons-material/ArrowDownwardRounded";
import ArrowUpwardRoundedIcon from "@mui/icons-material/ArrowUpwardRounded";

export default function Arrow() {
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
  <div className="fixed bottom-40 right-5 z-30">
   {showScrollDown && (
    <svg
     className="animate-bounce w-[40px] h-[80px] text-secondary border-[1px] border-secondary rounded-full cursor-pointer"
     onClick={scrollToBottom}
     viewBox="0 0 24 24"
    >
     <ArrowDownwardRoundedIcon className="w-6 h-6 text-secondary" />
    </svg>
   )}
   {showScrollUp && (
    <svg
     className="animate-bounce w-[40px] h-[80px] text-secondary border-[1px] border-secondary rounded-full cursor-pointer"
     onClick={scrollToTop}
     viewBox="0 0 24 24"
    >
     <ArrowUpwardRoundedIcon className="w-6 h-6 text-secondary" />
    </svg>
   )}
  </div>
 );
}
