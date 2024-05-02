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
    | "footer-book-now";
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
        "py-1 md:py-2 xl:py-3  px-3 md:px-16 lg:px-12 xl:px-17  border border-solid border-secondary rounded-[10px] bg-black bg-opacity-35 backdrop-blur-[10px]   ";
      break;
    case "home-contact-us":
      styles =
        "py-1 md:py-2 xl:py-3  px-3 md:px-16 lg:px-12 xl:px-17  border border-solid border-secondary rounded-[10px] bg-black bg-opacity-35 backdrop-blur-[10px]   ";
      break;
    case "sidebar-book-now":
      styles =
        " px-8 xl:px-12 py-2 border rounded-[10px] border-secondary bg-main";
      break;
    case "sidebar-auth-in":
      styles =
        " border border-solid border-sand rounded-[10px] px-[70px] xl:px-[22px] py-1 xl:py-2 bg-main";
      break;
    case "sidebar-log-out":
      styles =
        " border  rounded-[10px] border-sand bg-main px-10 xl:px-14 py-2";
      break;
    case "auth-sign-up-border":
      styles =
        " py-2 lg:py-4 px-6 lg:px-14 border border-blue rounded-xl bg-main ";
      break;
    case "auth-sign":
      styles = " py-2 px-5 lg:px-6 bg-auth-button-bgn rounded-xl ";
      break;
    case "apply-btn-light":
      styles = " rounded-xl  bg-secondary  py-1 px-[74px]  ";
      break;
    case "apply-btn-blue":
      styles = " rounded-xl  bg-main  py-1 px-[74px]  ";
      break;
    case "footer-book-now":
      styles =
        " px-[14px] md:px-8 xl:px-12 py-1 border rounded-[10px] border-secondary bg-main";
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
