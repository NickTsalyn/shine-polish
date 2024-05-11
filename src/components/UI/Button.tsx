type PropsButtton = {
  children?: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  type: "button" | "submit" | "reset";
  style:
    | "burger-book-now"
    | "burger-contact-us"
    | "home-book-now"
    | "home-contact-us"
    | "sidebar-book-now"
    | "sidebar-auth-in"
    | "sidebar-log-out"
    | "auth-sign"
    | "auth-sign-up-border"
    | "apply-btn-light"
    | "apply-btn-blue"
    | "footer-book-now"
    | "send"
    | "deep-cleaning"
    | "work-with-us";
};

export default function Button(props: PropsButtton) {
  let styles = "";

  switch (props.style) {
    case "burger-book-now":
      styles =
        " py-1 px-16 md:px-24 bg-white border border-solid border-accent  rounded-[10px]";
      break;
    case "burger-contact-us":
      styles =
        "py-1 px-[63px] md:px-[95px] border border-solid border-secondary rounded-[10px]";
      break;
    case "home-book-now":
      styles =
        "py-1 md:py-2 lg:py-2 xl:py-4  px-4 md:px-[54px] lg:px-12 xl:px-[70px]  border border-solid border-secondary rounded-[10px] backdrop-blur-[10px]   ";
      break;
    case "home-contact-us":
      styles =
        "py-1 md:py-2 lg:py-2 xl:py-4  px-3 md:px-12 lg:px-10 xl:px-[60px]  border border-solid border-secondary rounded-[10px] backdrop-blur-[10px]   ";
      break;
    case "sidebar-book-now":
      styles =
        " px-8 xl:px-12 py-1 xl:py-[6px] w-full border rounded-[10px] border-secondary bg-main ";
      break;
    case "sidebar-auth-in":
      styles =
        " border border-solid border-sand rounded-[10px]  py-1 xl:py-[6px] bg-main w-full";
      break;
    case "sidebar-log-out":
      styles =
        " px-10 xl:px-14 py-1 xl:py-[6px] w-full border rounded-[10px] border-sand bg-main ";
      break;
    case "auth-sign-up-border":
      styles =
        " py-2 lg:py-4 px-6 lg:px-14 border border-blue rounded-xl bg-main ";
      break;
    case "auth-sign":
      styles = " py-2 px-5 lg:px-6 bg-auth-button-bgn rounded-xl ";
      break;
    case "apply-btn-light":
      styles =
        " rounded-xl border-2 border-secondary   bg-secondary  py-1 px-[74px] hover:shadow-apply-send-button-shadow  focus:shadow-apply-send-button-shadow  ";
      break;
    case "apply-btn-blue":
      styles =
        " rounded-xl border-2 border-main  bg-main hover:border-2 hover:border-tertial  hover:bg-tertial/50 focus:bg-tertial/50 hover:shadow-apply-blue-button-shadow focus:shadow-apply-button-shadow  py-1 px-[74px]  ";
      break;
    case "footer-book-now":
      styles =
        " px-[14px] md:px-8 xl:px-12 py-1 border rounded-[10px] border-secondary bg-main";
      break;
    case "send":
      styles =
        " px-12 py-1 md:py-2 lg:px-16 lg:py-1 rounded-xl bg-secondary hover:shadow-apply-send-button-shadow  focus:shadow-apply-send-button-shadow ";
      break;
    case "deep-cleaning":
      styles =
        " px-5 py-3 border-2 rounded-xl border-tertial hover:border-main/30 focus:border-main/30 hover:bg-tertial focus:bg-tertial shadow-button-shadow hover:shadow-button-hover-shadow disabled:border-tertial/30 ";
      break;
    case "work-with-us":
      styles =
        " px-8 md:px-12 lg:px-[150px] xl:px-[424px] py-1 md:py-9 xl:py-14 rounded-xl bg-main ";
      break;
    default:
      break;
  }
  return (
    <button
      type={props.type}
      className={styles}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
}
