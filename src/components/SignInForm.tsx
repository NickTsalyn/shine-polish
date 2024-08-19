"use client";

import {useForm} from "react-hook-form";
import {useRouter} from "next/navigation";

// import {useQuery} from "@tanstack/react-query";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import Button from "./UI/Button";
import Input from "./UI/Input";
import {
 DesctopScreenFirstWave,
 DesctopScreenSecondWave,
 MobileScrinWaves,
 SocialMediaSignIn,
 TabletScreenFirstWave,
 TabletScreenSecondWave,
} from "./UI/SignInDesing";
import Link from "next/link";
import {signin} from "@/helpers/api";
import {useMutation} from "@tanstack/react-query";

interface SignInInput {
 email: string;
 password: string;
}

export default function SignInForm() {
 const router = useRouter();
 const {
  register,
  handleSubmit,
  setValue,
  formState: {errors},
 } = useForm<SignInInput>();

 const mutation = useMutation({
  mutationFn: (credentials: SignInInput) => signin(credentials),
  onSuccess: (data) => {
   console.log("I'm first!", data);
   localStorage.setItem("user", JSON.stringify(data.data));
   router.push("/");
  },
  onError: (error: any) => {
   // An error happened!
   console.log(`Була помилка`, error);
  },
 });

 // const onSubmit = async (data: any) => {
 //   signin(data);
 //   localStorage.setItem("user", JSON.stringify(data));
 //   router.push("/");
 // };
 const onSubmit = async (data: SignInInput) => {
  console.log("Sent body", data);
  const res = mutation.mutate(data);
  console.log(res);
 };

 const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  setValue("email", event.target.value, {shouldValidate: true});
 };

 const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  setValue("password", event.target.value, {shouldValidate: true});
 };

 return (
  <div className="flex flex-col mb-[40px] lg:h-screen">
   <div className="mx-auto my-auto relative w-[320px] md:w-[712px] lg:w-[960px] h-auto md:h-[500px] lg:h-[575px] rounded-xl md:rounded-[50px] md:flex shadow-main-shadow">
    <div className="absolute top-0 right-0 z-10 md:top-4 md:right-4">
     <Button
      style="close-button"
      type="button"
      // onClick={() => router.push("/")}
     >
      <Link href={"/"}>
       <span className="text-main md:text-white hover:text-accent">
        <CloseRoundedIcon />
       </span>
      </Link>
     </Button>
    </div>
    <div className="pt-4 md:pt-[76px] lg:pt-[80px] pl-8 pr-8 flex flex-col md:items-center md:w-[356px] lg:w-[480px] md:h-[500px] rounded-b-xl">
     <h2 className="text-main text-[40px] lg:text-[48] text-center mb-4 md:mb-5 lg:mb-6 lg:font-normal">Sign in</h2>

     <div className="flex gap-[24px] lg:gap-[48px] mb-5 md:mb-7 lg:mb-9 justify-center">
      <SocialMediaSignIn />
     </div>

     <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col justify-center items-center">
       <label className="mb-[10px]">
        <span className="text-text text-[14px] lg:text-[20px]  lg:font-thin">Or sing using E-Mail Address</span>
       </label>
       <label
        htmlFor="email"
        className="relative"
       >
        <Input
         {...register("email", {
          required: "Email Address is required",
         })}
         style="sign-in-input"
         type="email"
         placeholder="Email*"
         onChange={handleEmailChange}
         aria-required={errors.email || (mutation.isError && mutation.error.response.status === 401) ? "true" : "false"}
        />
        {errors.email && (
         <p
          role="alert"
          className="text-accent-light text-[12px] absolute bottom-[0] right-2"
         >
          {errors.email.message}
         </p>
        )}
       </label>
       <label
        htmlFor="password"
        className="relative"
       >
        <Input
         {...register("password", {
          required: "Hey! forgot your password",
          // minLength: {
          //   value: 6,
          //   message: "Your password must be at least 6 characters long",
          // },
         })}
         style="sign-in-input"
         type="password"
         placeholder="Password"
         onChange={handlePasswordChange}
         aria-required={
          errors.password || (mutation.isError && mutation.error.response.status === 401) ? "true" : "false"
         }
        />
        {errors.password && (
         <p
          role="alert"
          className="text-accent-light text-[12px] absolute bottom-[0] right-2"
         >
          {errors.password.message}
         </p>
        )}
        {mutation.isError && mutation.error.response.status === 401 && (
         <p
          role="alert"
          className="text-accent-light text-[12px] absolute bottom-[0] right-2"
         >
          {mutation.error.response.data.message}
         </p>
        )}
       </label>
       <p className="text-accent text-[14px] lg:text-[20px] mb-[18px] md:mb-[30px] lg:font-light">
        Forgot your password?
       </p>

       <Button
        style="auth-sign"
        type="submit"
       >
        <span className="text-white text-[20px] uppercase">Sing In</span>
       </Button>
      </div>
     </form>
    </div>

    <div className="md:bg-main md:w-[356px] lg:w-[480px] md:h-[500px] lg:h-[576px] relative  bottom-0 left-0  md:rounded-br-[50px] md:rounded-tr-[50px]">
     <div className="">
      <MobileScrinWaves />
     </div>
     <div className="absolute z-11 hidden md:block lg:hidden  bottom-0 right-0 md:w-[352px] lg:w-[480px] md:h-[172px] lg:h-[204px] lg:bottom-0">
      <TabletScreenFirstWave />
     </div>
     <div className=" md:w-[356px]  md:h-[181px] absolute z-10 hidden md:block  bottom-0 right-0">
      <TabletScreenSecondWave />
     </div>
     <div className="lg:w-[480px]lg:h-[250px] absolute z-10 hidden lg:block lg:rounded-br-[50px] bottom-0 right-0">
      <DesctopScreenFirstWave />
     </div>
     <div className="absolute z-11 hidden lg:block lg:rounded-br-[50px] bottom-0 right-0  lg:w-[480px]  lg:h-[204px]">
      <DesctopScreenSecondWave />
     </div>
     <div className="absolute z-30 bottom-[40px] md:bottom-[183px] left-[20px] md:left-0 flex flex-col px-[32px] md:px-0 md:w-[356px] md:justify-center md:items-center lg:w-[480px]">
      <h3 className="text-white text-[32px] font-bold mb-2 lg:mb-[42px] lg:font-light lg:text-[48px]">
       Create Account!
      </h3>
      <p className="text-white text-[16px] mb-3 md:mb-[42px] md:w-[207px] md:text-center lg:text-[24px] lg:w-[323px] lg:font-thin">
       Sing Up if you still don’t have an account...{" "}
      </p>
      <div className="flex justify-end items-end md:justify-center md:items-center ">
       <Button
        style="auth-sign-up-border"
        type="button"
       >
        <Link
         href={"/sign-up"}
         className="text-white uppercase text-[20px]"
        >
         {/* <span > */}
         SING UP
         {/* </span> */}
        </Link>
       </Button>
      </div>
     </div>
    </div>
   </div>
  </div>
 );
}
