export type RadioCheckProps = {
    style: string,
    text: string,
    value?: string;
    checked?: boolean;
    children?: React.ReactNode;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    disabled?: boolean;
  };