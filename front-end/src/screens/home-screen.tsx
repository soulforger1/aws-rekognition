import { useState } from "react";
import { ScreenContainer } from ".";
import { useAuth } from "../aws/auth";
import { Button, FileInput, Text } from "../components";
import { useNavigate } from "react-router-dom";

export const HomeScreen = () => {
  const { userData }: any = useAuth();
  const navigation = useNavigate();

  return userData ? (
    <ScreenContainer justifyContent="justify-between" className="flex-col">
      <Header />
      <Content />
      <Footer />
    </ScreenContainer>
  ) : (
    <ScreenContainer>
      <Button
        className="pv-14 ph-30 mt-10 h-6-vh"
        onClick={() => navigation("/signIn")}
      >
        <Text fontSize="24">Sign in</Text>
      </Button>
    </ScreenContainer>
  );
};

const Content = () => {
  const [selectedFile, setSelectedFile] = useState(undefined);

  console.log(selectedFile);
  return (
    <div>
      <FileInput onFileSelect={(file: any) => setSelectedFile(file)} />
      <FileInput onFileSelect={(file: any) => setSelectedFile(file)} />
    </div>
  );
};

const Header = () => {
  const { userData, logout }: any = useAuth();

  return (
    <div className="flex h-6-vh align-center w-80-vw justify-between mt-10">
      <Text fontSize="32">{`user : ${userData.username}`}</Text>
      <Button className="pv-14 ph-30" onClick={logout}>
        <Text fontSize="24">Log out</Text>
      </Button>
    </div>
  );
};

const Footer = () => {
  return <div></div>;
};
