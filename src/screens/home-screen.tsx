import { useState } from "react";
import { ScreenContainer } from ".";
import { Button, FileInput, Text } from "../components";
import { useNavigate } from "react-router-dom";
import { ReactComponent as SearcgIcon } from "../assets/searchIcon.svg";
import { Loader } from "../components/loader";

export const HomeScreen = () => {
  return (
    <ScreenContainer justifyContent="justify-between" className="flex-col">
      <Header />
      <Content />
      <Footer />
    </ScreenContainer>
  );
};

const Content = () => {
  const [selectedFile, setSelectedFile] = useState(undefined);
  const [searching, setSearching] = useState(false);

  return (
    <div className="w-60-vw flex justify-between align-center">
      <div className="relative flex-col align-center">
        <FileInput
          onFileSelect={(file: any) => setSelectedFile(file)}
          label="Click to upload"
        />
        {selectedFile && (
          <Button className="absolute pv-20 ph-20 mt-10 bottom-1">
            <Text fontSize="16">Upload to AWS</Text>
          </Button>
        )}
      </div>

      {searching ? (
        <Loader />
      ) : (
        <div className="pointer" onClick={() => setSearching(true)}>
          <SearcgIcon className="w-10-vw h-10-vw" />
          <Text fontSize="24">Search from AWS</Text>
        </div>
      )}

      <div className="image w-20-vw h-20-vw" />
    </div>
  );
};

const Header = () => {
  const navigation = useNavigate();

  const onPress = () => {
    navigation("/signin");
  };
  return (
    <div className="flex h-6-vh align-center w-80-vw justify-between mt-10">
      <Button className="pv-14 ph-30" onClick={onPress}>
        <Text fontSize="24">Sign in</Text>
      </Button>
    </div>
  );
};

const Footer = () => {
  return (
    <Text fontSize="16" className="mb-20">
      Made by ❤️
    </Text>
  );
};