import { ColorType } from "../../theme/colors";

type inputType = {
  placeholder?: string;
  onChange?: () => void;
  className?: string;
  value?: string;
  error?: boolean;
  disabled?: boolean;
  fontSize?: "13" | "16" | "18" | "24" | "32";
  weight?: "400" | "500" | "600" | "700" | "800" | "900";
  color?: ColorType;
};

export const Input = (props: inputType) => {
  const {
    className,
    error,
    fontSize = "16",
    weight = "400",
    color = "black",
    ...others
  } = props;
  return (
    <input
      className={`input ${
        error && "input-error"
      } fs-${fontSize} weight-${weight} color-${color} ${className}`}
      {...others}
    />
  );
};
