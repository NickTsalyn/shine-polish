// import Footer  from "../components/footer"

import Input from "@/components/UI/Input";

export default function Home() {
  return (
    <main>
      {/* <Footer/> */}
      <div className="w-[1000px]">
        <Input type="email" style="sign-in-input" placeholder="Sign In" />
        <Input type="password" style="sign-up-input" placeholder="Sign Up" />
        <Input type="text" style="form-input" placeholder="Form Input" />
        <Input type="text" style="modal-input" placeholder="Modal Input" />
      </div>
    </main>
  );
}
