import { ColorType } from "../../theme/colors";

type textType = {
  fontSize?: "13" | "16" | "18" | "24" | "32";
  children?: string;
  color?: ColorType;
  weight?: "400" | "500" | "600" | "700" | "800" | "900";
};

export const Text = ({
  children,
  color = "black",
  weight = "600",
  fontSize = "16",
}: textType) => {
  return (
    <p className={`text color-${color} weight-${weight} fs-${fontSize}`}>
      {children}
    </p>
  );
};
