// import Footer  from "../components/footer"

import Input from "@/components/UI/Input";

export default function Home() {
  return (
    <main>
      {/* <Footer/> */}
      <Input type="email" style="sign-in-input" placeholder="Sign In" />
      <Input
        type="email"
        style="sign-up-input"
        placeholder="Sign Up"
        border="input-border-gradient"
      />
      <Input type="email" style="form-input" placeholder="Form Input" />
      <Input
        type="email"
        style="modal-input"
        placeholder="Modal Input"
        border="input-border-gradient"
      />
    </main>
  );
}
