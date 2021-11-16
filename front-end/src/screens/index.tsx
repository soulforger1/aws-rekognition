export * from "./home-screen";
export * from "./sign-up-screen";

type Props = {
  className?: string;
  children: any;
};
export const ScreenContainer = ({ className, children }: Props) => (
  <div className={`flex justify-center align-center h-100-vh ${className}`}>
    {children}
  </div>
);
