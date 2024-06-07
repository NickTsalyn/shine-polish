export type RadioCheckProps = {
    style?: string,
    text?: string,
    isActive?: boolean,
    value?: string;
    checked?: boolean;
    children?: React.ReactNode;
    onClick?: () => void;
    disabled?: boolean;
  };